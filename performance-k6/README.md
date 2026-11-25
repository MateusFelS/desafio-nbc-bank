# Teste de Performance – jsonplaceholder (k6)

Teste de carga com **k6** na API pública [JSONPlaceholder](https://jsonplaceholder.typicode.com), como parte do desafio técnico de Analista de Testes de Software (Parte 5, questão 23).

## Cenário

| Item | Configuração |
|---|---|
| Endpoint | `GET /posts` |
| Usuários simultâneos | 50 |
| Duração | 3 minutos |
| Pausa entre requisições | 1 segundo por usuário |
| Validações | Status 200 e corpo não vazio |

Critérios de aprovação (thresholds):

- Taxa de erro menor que 1%
- Percentil 95 do tempo de resposta menor que 800 ms

## Resultados

Execução realizada em: `24/11/2026`

| Métrica | Resultado |
|---|---|
| Tempo médio de resposta | 21,23 ms |
| Throughput | 48,7 requisições/s (8821 requisições no total) |
| Percentil 95 | 27,46 ms |
| Taxa de erro | 0,00% (0 de 8821) |

Outros valores da execução: mínimo de 15,35 ms, mediana de 19,61 ms, percentil 90 de 23,77 ms e máximo de 2,06 s. Os dois thresholds foram atendidos, e as 17642 validações (2 por requisição) passaram.

## Análise

- **Estabilidade:** não houve nenhum erro, e todas as validações passaram.
- **Tempo de resposta:** a média (21,23 ms), a mediana (19,61 ms) e o P95 (27,46 ms) estão próximos, o que indica respostas consistentes na grande maioria das requisições.
- **Pico isolado:** o tempo máximo foi de 2,06 s, muito acima do restante. Como o P95 ficou em 27,46 ms, esse valor afetou pouquíssimas requisições. É um bom exemplo de por que a média sozinha não mostra tudo, e de por que o percentil e o valor máximo são analisados em conjunto. A causa não pôde ser determinada (pode ser oscilação de rede ou do serviço público).
- **Throughput:** o valor de ~48,7 req/s é limitado pelo próprio teste, e não pela capacidade da API. Com 50 usuários e 1 segundo de pausa entre as requisições, o teto fica perto de 50 req/s. Sem a pausa, o throughput seria maior.

## Tecnologias utilizadas

- k6 v1.7.1

O k6 é um executável independente e não precisa de Node.js nem de instalação de dependências.

## Estrutura

```
performance-k6/
├── README.md
├── teste-carga.js
└── resultados/
    ├── relatorio.html
    └── resumo.json
```

## Pré-requisitos

- [k6](https://grafana.com/docs/k6/latest/set-up/install-k6/) instalado (testado na v1.7.1; a exportação do relatório HTML exige uma versão recente)
- Git

Instalação do k6:

```bash
# Windows
winget install k6 --source winget

# macOS
brew install k6
```

Para outros sistemas, veja o link acima. Para conferir:

```bash
k6 version
```

## Instruções para execução local

1. Clone o repositório e entre na pasta do projeto:

   ```bash
   git clone https://github.com/mateusfels/desafio-nbc-bank.git
   cd desafio-nbc-bank/performance-k6
   ```

2. (Opcional) Faça uma execução rápida só para conferir o script, sem gerar relatório:

   ```bash
   k6 run --vus 5 --duration 10s teste-carga.js
   ```

3. Execute o teste completo, que dura 3 minutos e gera o relatório:

   ```bash
   k6 run --out web-dashboard=export=resultados/relatorio.html --summary-export=resultados/resumo.json teste-carga.js
   ```

4. Ao final, o terminal mostra o resumo com as métricas e se os thresholds foram atendidos. Abra `resultados/relatorio.html` no navegador para ver o relatório visual.

Onde encontrar as métricas no resumo do terminal:

| Métrica | Linha do resumo |
|---|---|
| Tempo médio de resposta | `http_req_duration`, valor `avg` |
| Throughput | `http_reqs`, taxa por segundo |
| Percentil 95 | `http_req_duration`, valor `p(95)` |
| Taxa de erro | `http_req_failed` |

## Evidências da execução

- **Relatório HTML:** [`resultados/relatorio.html`](resultados/relatorio.html)
- **Resumo em JSON:** [`resultados/resumo.json`](resultados/resumo.json)

## Observações

- A API é um serviço público gratuito, por isso usei somente requisições de leitura (`GET`) e mantive a carga exatamente como pedida.
- Os limites dos thresholds (1% de erro e 800 ms no P95) e a pausa de 1 segundo são premissas minhas.
- Os valores variam de uma execução para outra, pois dependem da rede e do estado do serviço. Em uma execução anterior, o tempo máximo foi de 633 ms, e a média e o P95 ficaram próximos dos valores acima.