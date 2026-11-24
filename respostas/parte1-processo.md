# Parte 1 – Processo de Testes (Nível Júnior)

## 1. Conceitos Fundamentais

### Erro (Error)
O erro é ligado ao ser humano, como um equívoco na implementação ou um entendimento errado da regra.

### Defeito (Defect)
O defeito é um problema ligado ao código ou à implementação, como um "if" fora de lugar ou uma condição incorreta.

### Bug
O bug é um termo utilizado para se referir a um defeito no software que pode causar um comportamento incorreto.

### Falha (Failure)
A falha é quando esse problema afeta o usuário final durante a execução do sistema, como um problema que impede o usuário de finalizar uma compra

---

## 2. Ciclo de Testes (STLC)

O STLC é basicamente um conjunto de etapas que ajudam a organizar o processo de testes de um software. Primeiro, analisamos os requisitos para entender o que o sistema deve fazer e o que precisa ser testado. Depois, planejamos os testes, definindo o que será testado e como isso será feito. Em seguida, criamos os casos de teste, com os passos que vamos seguir e os resultados que esperamos encontrar. Depois preparamos o ambiente onde os testes serão realizados. Com tudo pronto, partimos para a execução dos testes, verificando se o sistema está funcionando como deveria e registrando os problemas encontrados. Por último, temos o encerramento, onde analisamos os resultados e verificamos o que foi encontrado durante os testes.

---

## 3. Caso de Teste: Login com e-mail e senha

| ID | Cenário | Objetivo | Pré-condição | Passos de Execução | Resultado Esperado |
|----|---------|----------|--------------|--------------------|---------------------|
| CT-001 | Realizar login com e-mail e senha válidos | Verificar se o usuário consegue acessar sua conta com credenciais válidas | Usuário cadastrado e na página de login | 1. Preencher o campo de e-mail com um e-mail válido. 2. Preencher o campo de senha com uma senha válida. 3. Clicar em "Entrar". | Sistema deve autenticar o usuário e redirecioná-lo para a área logada. |

### Outros cenários que eu cobriria

- Realizar login com e-mail em formato inválido.
- Realizar login com senha incorreta.
- Tentar realizar login com os dois campos vazios.
- Tentar realizar login sem preencher o campo de senha.
- Tentar realizar login sem preencher o campo de e-mail.
---

## 4. Evidências

**Por que registrar:**
É importante pois elas servem para comprovar o que aconteceu durante um teste. Assim, caso seja encontrado algum problema, fica mais fácil mostrar o erro para o time, entender o que acontecer e tentar reproduzir ele novamente.

**Exemplos:**

- Print de tela: Capturar a tela mostrando uma mensagem de erro ao tentar fazer login.
- Gravação de vídeo: Gravar o processo de adicionar um produto ao carrinho e mostrar que ele não é adicionado.
- Log de erro: Registrar uma falha em uma requisição à API, como um erro HTTP 500 ao tentar carregar os dados do usuário.

---

## 5. Gestão de Defeitos

O ciclo começa quando o QA identifica um problema durante os testes e registra o bug com todas as informações necessárias para que ele possa ser entendido e reproduzido. Depois, o desenvolvedor analisa e realiza a correção. Em seguida, o QA testa novamente para verificar se o problema foi resolvido. Se estiver tudo certo, o bug é fechado. Caso contrário, é reaberto para uma nova correção.
