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

- Cypress 
- Node.js 
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

## Instruções para execução local

1. Entre na pasta do projeto e instale as dependências:

   ```bash
   cd api-reqres
   npm ci
   ```

2. Crie uma chave gratuita em [app.reqres.in](https://app.reqres.in/?next=/api-keys).

3. Crie o arquivo `cypress.env.json` na raiz da pasta `api-reqres`, com a sua chave:

   ```json
   {
     "REQRES_API_KEY": "sua-chave-aqui"
   }
   ```

   Esse arquivo está no `.gitignore` e não deve ser enviado ao repositório.

4. Execute os testes:

   ```bash
   npx cypress run
   ```

   Para ver a interface do Cypress: `npx cypress open`.

## Evidências da execução

- Saída do terminal: [`cypress/evidencias/execucao-terminal.txt`](cypress/evidencias/execucao-terminal.txt)
- Execução no GitHub Actions: <!-- cole aqui o link de uma execução verde -->

## Integração com GitHub Actions

O workflow `.github/workflows/api-reqres.yml` roda os testes a cada push na `main`, em pull requests e manualmente. A chave da API fica no **GitHub Secrets** (`REQRES_API_KEY`), e não no código.

## Observações

- O ReqRes é uma API de demonstração, então as operações de criação, atualização e exclusão são simuladas e os dados do usuário de exemplo não são alterados de verdade.
- O limite de tempo de resposta (2000 ms) é uma premissa minha e pode ser ajustado em `usuarios.cy.js`.