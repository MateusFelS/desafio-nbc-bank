# Parte 5 – Testes de Performance (Nível Pleno/Sênior)

## 20. Conceitos

| Tipo de teste | Objetivo | Como é feito | Exemplo |
|---|---|---|---|
| Teste de Carga (Load) | Verificar se o sistema suporta a quantidade normal de usuários. | Simulando vários usuários acessando o sistema ao mesmo tempo. | Um site recebendo 500 acessos simultâneos sem ficar lento. |
| Teste de Estresse (Stress) | Descobrir até onde o sistema consegue suportar antes de falhar. | Aumentando a quantidade de acessos acima do limite esperado. | Um site recebendo 5.000 acessos ao mesmo tempo e começando a travar. |
| Teste de Pico (Spike) | Verificar como o sistema reage a aumentos repentinos de acessos. | Aumentando rapidamente o número de usuários em pouco tempo. | Uma loja virtual recebendo muitos acessos de uma vez durante uma promoção. |
| Teste de Resistência (Soak) | Verificar se o sistema consegue funcionar bem durante muito tempo. | Mantendo uma quantidade de acessos constante por várias horas ou dias. | Um sistema funcionando por 24 horas com muitos usuários sem apresentar lentidão. |

---

## 21. Métricas

| Indicador | O que representa | Por que importa |
|---|---|---|
| Throughput | Quantidade de requisições que o sistema consegue processar em um determinado período. | Ajuda a saber quantas solicitações o sistema consegue atender. |
| TPS | Quantidade de transações realizadas por segundo. | Mostra a capacidade do sistema de realizar operações rapidamente. |
| Tempo médio de resposta | Tempo que o sistema demora, em média, para responder a uma solicitação. | Ajuda a identificar se o sistema está rápido ou lento para os usuários. |
| Percentil 95 | Indica que 95% das requisições foram respondidas naquele tempo ou em menos tempo. | Ajuda a avaliar a experiência da maioria dos usuários. |
| Percentil 99 | Indica que 99% das requisições foram respondidas naquele tempo ou em menos tempo. | Ajuda a identificar respostas muito lentas, mesmo que aconteçam poucas vezes. |
| Taxa de erro | Porcentagem de requisições que apresentaram falhas durante os testes. | Ajuda a identificar problemas e avaliar a estabilidade do sistema. |

---

## 22. Ferramentas

- JMeter: Já utilizei a versão com interface gráfica, onde é possível inserir a URL, configurar os usuários, as requisições e executar os testes para analisar o desempenho do sistema.
- k6: Também já utilizei essa ferramenta, que permite criar testes de performance utilizando JavaScript. Com ela, é possível configurar cenários, quantidade de usuários virtuais e duração dos testes.

---

## 23. Desafio Prático de Performance

Os resultados estão na pasta [`performance-k6`](../performance-k6/).
