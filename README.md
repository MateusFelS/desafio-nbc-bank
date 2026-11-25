# Desafio Técnico – Analista de Testes de Software

## Dados do Candidato

- **Nome completo:** Mateus Felipe dos Santos
- **E-mail:** mateus.fes14@gmail.com
- **Telefone:** +55 14 99769-2248
- **LinkedIn:** https://linkedin.com/in/mateus-santos-qa
- **GitHub:** https://github.com/mateusfels
- **Cidade/Estado:** Fartura – SP
- **Cargo atual:** Analista de QA Júnior
- **Tempo de experiência com QA/Testes:** 2 anos

## Resumo da entrega

| Parte | Conteúdo | Status | Onde está |
|---|---|---|---|
| 1 | Processo de Testes (questões 1 a 5) | Concluída | [respostas/parte1-processo.md](respostas/parte1-processo.md) |
| 2 | Tipos de Testes (questões 6 a 10) | Concluída | [respostas/parte2-tipos-de-teste.md](respostas/parte2-tipos-de-teste.md) |
| 3 | Automação E2E (questões 11 a 14) | Concluída | [respostas/parte3-automacao-e2e.md](respostas/parte3-automacao-e2e.md) e [e2e-saucedemo](e2e-saucedemo/) |
| 4 | Testes de API (questões 15 a 19) | Concluída | [respostas/parte4-testes-de-api.md](respostas/parte4-testes-de-api.md) e [api-reqres](api-reqres/) |
| 5 | Testes de Performance (questões 20 a 23) | Concluída | [respostas/parte5-testes-de-performance.md](respostas/parte5-testes-de-performance.md) e [performance-k6](performance-k6/) |
| 6 | Visão Estratégica de QA (questões 24 a 28) | Concuída | [respostas/parte6-visao-estrategica.md](respostas/parte6-visao-estrategica.md) |

## Projetos práticos

| Projeto | Ferramenta | Alvo | Pasta |
|---|---|---|---|
| Automação E2E (questão 14) | Cypress | saucedemo.com | [e2e-saucedemo](e2e-saucedemo/) |
| Testes de API (questão 18) | Cypress (`cy.request`) | reqres.in | [api-reqres](api-reqres/) |
| Teste de performance (questão 23) | k6 | jsonplaceholder.typicode.com | [performance-k6](performance-k6/) |

Cada pasta tem um README próprio com as instruções de execução local e as evidências.

## Tecnologias utilizadas

- Cypress (automação E2E e testes de API)
- k6 (testes de performance)
- Node.js e npm
- GitHub Actions (execução automatizada dos testes de E2E e de API)
- Markdown (documentação)

## Diferenciais apresentados

- Integração com GitHub Actions: workflows em [`.github/workflows`](.github/workflows/)
- Chave da API guardada em GitHub Secrets, e não no código

## Estrutura do repositório

```
├── README.md
├── respostas/
├── e2e-saucedemo/
├── api-reqres/
├── performance-k6/
└── .github/workflows/
```

## Observações finais

- Dediquei a maior parte do tempo às Partes 1 a 5, que estão mais próximas da minha experiência prática. A Parte 6 (nível sênior) eu tentei, mas ainda tenho pouco conhecimento nesses temas, então as respostas são objetivas e baseadas no que já vivenciei e estudei.
- Nos desafios práticos, além do que foi pedido, incluí alguns cenários negativos para mostrar cobertura além do caminho feliz.
- No teste de performance, usei somente requisições de leitura e a carga exatamente como pedida (50 usuários por 3 minutos), por se tratar de um serviço público gratuito.
- Premissas assumidas (como limites de tempo de resposta e regras de senha) estão registradas nos arquivos de cada parte.
- Nenhuma credencial foi enviada ao repositório.
