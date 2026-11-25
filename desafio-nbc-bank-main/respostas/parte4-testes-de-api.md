# Parte 4 – Testes de API (Nível Pleno)

## 15. Conceitos

### O que é uma API REST?
Uma API REST é uma forma de comunicação entre sistemas, permitindo que diferentes aplicações troquem informações pela internet. Ela utiliza o protocolo HTTP para enviar e receber dados, geralmente no formato JSON. Por exemplo, um aplicativo pode utilizar uma API REST para buscar informações de usuários em um servidor.

### Diferença entre os métodos HTTP

| Método | Finalidade | Idempotente? | Exemplo de uso |
|---|---|---|---|
| GET | Consultar informações. | Sim | Buscar os dados de um usuário. |
| POST | Criar um novo registro ou enviar dados. | Não | Cadastrar um novo usuário. |
| PUT | Atualizar ou substituir um registro inteiro. | Sim | Atualizar todos os dados de um usuário. |
| PATCH | Atualizar parcialmente um registro. | Depende | Alterar apenas o e-mail de um usuário. |
| DELETE | Excluir um registro. | Sim | Excluir um usuário. |

---

## 16. Status Codes

| Código | Significado | Exemplo de quando ocorre |
|---|---|---|
| 200 | OK – Requisição realizada com sucesso. | Ao consultar os dados de um usuário com sucesso. |
| 201 | Created – Recurso criado com sucesso. | Ao cadastrar um novo usuário. |
| 400 | Bad Request – Requisição inválida ou com dados incorretos. | Ao enviar um formulário com informações inválidas. |
| 401 | Unauthorized – Usuário não autenticado. | Ao tentar acessar uma área que exige login sem estar autenticado. |
| 403 | Forbidden – Usuário sem permissão de acesso. | Ao tentar acessar uma área restrita sem autorização. |
| 404 | Not Found – Recurso não encontrado. | Ao tentar acessar um usuário que não existe. |
| 500 | Internal Server Error – Erro interno no servidor. | Quando ocorre uma falha inesperada durante o processamento de uma requisição. |

---

## 17. Estratégia de API: criação de usuário

**Validações que eu executaria:**

- Verificaria se a API retorna o status code correto, como 201 (Created) quando o usuário é criado com sucesso, e se a resposta apresenta uma mensagem adequada.
- Conferiria se o JSON retornado possui os campos esperados e se cada informação está no formato correto, como nome e e-mail em texto e ID no formato definido pela API.
- Testaria se os campos obrigatórios são preenchidos corretamente, se o e-mail possui um formato válido e se as senhas atendem aos requisitos mínimos definidos pelo sistema.
- Tentaria realizar cadastros com campos vazios, e-mail inválido, senha incorreta e dados incompletos, verificando se a API retorna os erros esperados.
- Verificaria se a API exige autenticação quando necessário, se impede acessos não autorizados e se não expõe informações sensíveis, como senhas dos usuários.
- Verificaria se a API responde em um tempo adequado, se o usuário realmente é salvo no banco de dados e se o sistema impede o cadastro de usuários duplicados, principalmente com o mesmo e-mail.

---

## 18. Desafio Prático de API

O código, as evidências e as instruções de execução estão na pasta [`api-reqres`](../api-reqres/).

---

## 19. Automação: suíte de API em pipeline CI/CD

- Eu organizaria a suíte automatizada de APIs separando os testes por funcionalidades, como cadastro, consulta, atualização e exclusão de usuários.
- Criaria testes para validar os status codes, estrutura das respostas JSON, regras de negócio, autenticação e cenários de erro.
- Integraria os testes ao pipeline CI/CD para que fossem executados automaticamente a cada alteração no código ou antes de uma nova publicação.
- Também configuraria relatórios de execução para identificar falhas e permitir que a equipe corrija os problemas antes de disponibilizar uma nova versão da aplicação.
- Dessa forma, a automação ajudaria a garantir a qualidade da API, reduzir testes manuais e evitar que erros cheguem à produção.
