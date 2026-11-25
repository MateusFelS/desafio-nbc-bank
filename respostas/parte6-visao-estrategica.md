# Parte 6 – Visão Estratégica de QA (Nível Sênior)

> Nota: esta parte está além da minha experiência atual. As respostas são objetivas e partem do que já vivenciei e estudei.

## 24. Estratégia de Qualidade

**Plataforma:** front-end web, aplicativo mobile, APIs REST e integrações externas.

### Por onde eu começaria
Primeiramente, eu procuraria entender como o sistema funciona e quais são suas principais funcionalidades. Depois, organizaria os testes por área, verificando o funcionamento do site, aplicativo, APIs e integrações. Daria prioridade às funcionalidades mais importantes para o usuário, como login e pagamentos. Também buscaria automatizar os testes mais repetitivos para facilitar as validações futuras.

---

## 25. Pirâmide de Testes

| Nível | Percentual | O que cobre |
|---|---|---|
| Unitários | ~70% | Regras de negócio, funções e componentes, de forma isolada. São rápidos e baratos de manter. |
| Integração / API | ~20% | Comunicação entre serviços, contratos das APIs REST e integrações externas (com mocks ou sandbox). |
| E2E (web e mobile) | ~10% | Apenas os fluxos críticos do usuário, como login e compra, nos dois canais. |

---

## 26. Métricas de Qualidade

Eu acompanharia métricas para entender se a qualidade do sistema está melhorando. Por exemplo, observaria quantos defeitos estão chegando à produção, quantos requisitos possuem testes, quanto tempo a equipe leva para entregar funcionalidades e quantos testes estão automatizados. Esses indicadores ajudariam a identificar problemas e melhorar o processo de testes.

---

## 27. Gestão de Riscos: demanda crítica em 24 horas

Como temos apenas 24 horas, eu começaria identificando as funcionalidades mais importantes e os riscos que poderiam causar maiores prejuízos. Daria prioridade aos testes de login, pagamentos e integrações. Também faria testes de regressão para verificar se as funcionalidades antigas continuam funcionando. Caso encontrasse algum problema crítico, comunicaria à equipe e recomendaria não publicar até que fosse corrigido ou que o risco fosse devidamente tratado.

---

## 28. Qualidade em DevOps

Na cultura DevOps, acredito que o QA deve participar de todo o processo de desenvolvimento. Com Shift Left, os testes começam a ser pensados desde os requisitos. Com CI/CD, podemos executar testes automaticamente a cada alteração no código. Os Quality Gates ajudam a impedir que versões com problemas importantes avancem. Os testes automatizados facilitam as validações e a observabilidade permite acompanhar o sistema depois da publicação, identificando possíveis problemas.
