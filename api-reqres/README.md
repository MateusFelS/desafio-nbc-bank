# Testes de API – ReqRes

Testes automatizados da API pública [ReqRes](https://reqres.in) com **Cypress** (`cy.request`), como parte do desafio técnico de Analista de Testes de Software (Parte 4, questão 18).

## Cobertura

| Operação | Método | Endpoint | Status esperado |
|---|---|---|---|
| Consultar usuário | GET | `/api/users/2` | 200 |
| Criar usuário | POST | `/api/users` | 201 |
| Atualizar usuário | PUT | `/api/users/2` | 200 |
| Excluir usuário | DELETE | `/api/users/2` | 204 |

Validações em cada teste:

- Status code
- Estrutura do JSON (chaves e tipos)
- Campos obrigatórios
- Tempo de resposta (limite de 2000 ms)

### Cenários negativos (extras)

- Consulta de usuário inexistente (404)
- Login sem senha (400)

## Tecnologias utilizadas

- Cypress 16.3.0
- Node.js v22.17.1
- GitHub Actions

## Estrutura

```
api-reqres/
├── README.md
├── package.json
├── cypress.config.js
└── cypress/
    ├── e2e/
    │   ├── usuarios.cy.js
    │   └── cenarios-negativos.cy.js
    └── evidencias/
        └── execucao-terminal.txt
```

## Pré-requisitos

- [Node.js](https://nodejs.org) instalado (versão 18 ou superior)
- npm (já vem com o Node.js)
- Git
- (Opcional) chave gratuita de API do ReqRes, criada em [app.reqres.in](https://app.reqres.in/?next=/api-keys)

Para conferir:

```bash
node --version
npm --version
```

## Instruções para execução local

1. Clone o repositório e entre na pasta do projeto:

   ```bash
   git clone https://github.com/mateusfels/desafio-nbc-bank.git
   cd desafio-nbc-bank/api-reqres
   ```

2. Instale as dependências:

   ```bash
   npm ci
   ```

3. (Opcional) Configure a chave da API. Os endpoints usados nos testes responderam sem chave no momento da execução, mas o ReqRes pode passar a exigi-la. Crie o arquivo `cypress.env.json` na raiz da pasta `api-reqres`:

   ```json
   {
     "REQRES_API_KEY": "sua-chave-aqui"
   }
   ```

   Esse arquivo está no `.gitignore` e não deve ser enviado ao repositório. Se ele não existir, os testes rodam sem o header de autenticação.

4. Execute os testes, de uma das formas abaixo:

   **Modo terminal:**

   ```bash
   npx cypress run
   ```

   **Modo interativo (abre a interface do Cypress):**

   ```bash
   npx cypress open
   ```

   Ao abrir a interface, escolha **E2E Testing**, selecione um navegador e clique no arquivo de teste desejado.

5. Para executar apenas um arquivo:

   ```bash
   npx cypress run --spec "cypress/e2e/usuarios.cy.js"
   ```

6. Para salvar a saída do terminal como evidência (PowerShell):

   ```powershell
   [Console]::OutputEncoding = [System.Text.Encoding]::UTF8
   npx cypress run 2>&1 | Out-File -Encoding utf8 cypress/evidencias/execucao-terminal.txt
   ```

## Evidências da execução

- Saída do terminal: [`cypress/evidencias/execucao-terminal.txt`](cypress/evidencias/execucao-terminal.txt)

## Integração com GitHub Actions

O workflow `.github/workflows/reqres.yml` roda os testes a cada push na `main`, em pull requests e manualmente. A chave da API fica no **GitHub Secrets** (`REQRES_API_KEY`), e não no código.

Execução no GitHub Actions: https://github.com/MateusFelS/desafio-nbc-bank/actions

## Observações

- O ReqRes é uma API de demonstração, então as operações de criação, atualização e exclusão são simuladas e os dados do usuário de exemplo não são alterados de verdade.
- O limite de tempo de resposta (2000 ms) é uma premissa minha e pode ser ajustado em `usuarios.cy.js`.
