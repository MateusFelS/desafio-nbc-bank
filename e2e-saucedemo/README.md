# Automação E2E – SauceDemo

Automação do fluxo de compra do portal [SauceDemo](https://www.saucedemo.com) utilizando **Cypress**, como parte do desafio técnico de Analista de Testes de Software (Parte 3, questão 14).

## Fluxo automatizado

1. Login válido
2. Adicionar dois produtos ao carrinho
3. Acessar o carrinho
4. Finalizar compra
5. Validar mensagem de sucesso
6. Realizar logout

Cada etapa possui validações (assertions): URL, contador do carrinho, produtos listados, mensagem de sucesso e retorno à tela de login.

## Cenários extras

Além do fluxo pedido, incluí cenários negativos:

- Login com senha incorreta
- Login com o usuário bloqueado (`locked_out_user`)
- Checkout sem o primeiro nome
- Checkout sem o CEP

## Tecnologias utilizadas

- Cypress 16.3.0
- Node.js v22.17.1
- GitHub Actions

## Estrutura do projeto

```
e2e-saucedemo/
├── README.md
├── package.json
├── package-lock.json
├── cypress.config.js
└── cypress/
    ├── e2e/
    │   ├── fluxo-compra.cy.js
    │   ├── login.cy.js
    │   └── checkout.cy.js
    └── evidencias/
        ├── screenshots/
        └── videos/
```

## Pré-requisitos

- [Node.js](https://nodejs.org) instalado (versão 18 ou superior)
- npm (já vem com o Node.js)
- Git

Para conferir:

```bash
node --version
npm --version
```

## Instruções para execução local

1. Clone o repositório e entre na pasta do projeto:

   ```bash
   git clone https://github.com/mateusfels/desafio-nbc-bank.git
   cd desafio-nbc-bank/e2e-saucedemo
   ```

2. Instale as dependências:

   ```bash
   npm ci
   ```

3. Execute os testes, de uma das formas abaixo:

   **Modo terminal (gera vídeo e screenshots):**

   ```bash
   npx cypress run
   ```

   **Modo interativo (abre a interface do Cypress):**

   ```bash
   npx cypress open
   ```

   Ao abrir a interface, escolha **E2E Testing**, selecione um navegador e clique no arquivo de teste desejado.

4. Para executar apenas um arquivo:

   ```bash
   npx cypress run --spec "cypress/e2e/fluxo-compra.cy.js"
   ```

## Evidências da execução

As evidências ficam na pasta `cypress/evidencias/`:

- **Vídeos:** `cypress/evidencias/videos/`
- **Screenshots:** `cypress/evidencias/screenshots/`

## Integração com GitHub Actions

Os testes também são executados automaticamente a cada push na branch `main`, em pull requests e manualmente, pelo workflow `.github/workflows/demoblaze.yml`. Os vídeos e screenshots de cada execução ficam disponíveis como artefatos na aba **Actions** do repositório.

Execução no GitHub Actions: https://github.com/MateusFelS/desafio-nbc-bank/actions/runs/45489355572

## Observações

- Os dados de checkout (nome e CEP) são fictícios.
- O SauceDemo é um site de treino, então não foram encontrados defeitos no fluxo principal.
