# Parte 1 – Processo de Testes (Nível Júnior)

## 1. Conceitos Fundamentais

### Erro (Error)
O erro é ligado ao ser humano, como um equívoco na implementação ou um entendimento errado da regra.

### Defeito (Defect)
O defeito é um problema ligado ao código ou à implementação, como um "if" fora de lugar ou uma condição incorreta.

### Bug
Bug é o termo informal usado como sinônimo de defeito. No dia a dia das equipes, é a forma mais comum de se referir a um problema encontrado no software.

### Falha (Failure)
A falha é quando esse problema afeta o usuário final durante a execução do sistema, como um problema que impede o usuário de finalizar uma compra

---

## 2. Ciclo de Testes (STLC)

O STLC é um conjunto de etapas que organiza o processo de testes de um software. Cada etapa tem critérios de entrada (o que precisa estar pronto para começar) e de saída (o que precisa ser cumprido para concluir).

1. **Análise de requisitos:** entender o que o sistema deve fazer e o que precisa ser testado.
2. **Planejamento dos testes:** definir o escopo, a estratégia, as ferramentas e o que será testado e como.
3. **Criação dos casos de teste:** escrever os casos com os passos de execução e os resultados esperados.
4. **Preparação do ambiente:** deixar pronto o ambiente e os dados onde os testes serão realizados.
5. **Execução dos testes:** executar os casos, verificar se o sistema funciona como deveria e registrar os defeitos encontrados, com evidências.
6. **Encerramento:** analisar os resultados, gerar o relatório final com as métricas (casos executados, defeitos encontrados e corrigidos), avaliar se os critérios de saída foram cumpridos e registrar as lições aprendidas.

---

## 3. Caso de Teste: Login com e-mail e senha

| ID | Cenário | Objetivo | Pré-condição | Passos de Execução | Resultado Esperado |
|----|---------|----------|--------------|--------------------|---------------------|
| CT-001 | Realizar login com e-mail e senha válidos | Verificar se o usuário consegue acessar sua conta com credenciais válidas | Usuário cadastrado e na página de login | 1. Preencher o campo de e-mail com um e-mail válido. <br>2. Preencher o campo de senha com uma senha válida. <br>3. Clicar em "Entrar". | O sistema autentica o usuário e o redireciona para a página inicial da área logada, exibindo o nome ou menu do usuário, sem mensagens de erro. |

### Outros cenários que eu cobriria

- Realizar login com e-mail em formato inválido.
- Realizar login com senha incorreta.
- Tentar realizar login com os dois campos vazios.
- Tentar realizar login sem preencher o campo de senha.
- Tentar realizar login sem preencher o campo de e-mail.
---

## 4. Evidências

**Por que registrar:**
É importante pois elas servem para comprovar o que aconteceu durante um teste. Assim, caso seja encontrado algum problema, fica mais fácil mostrar o erro para o time, entender o que aconteceu e tentar reproduzir ele novamente.

**Exemplos:**

- Print de tela: Capturar a tela mostrando uma mensagem de erro ao tentar fazer login.
- Gravação de vídeo: Gravar o processo de adicionar um produto ao carrinho e mostrar que ele não é adicionado.
- Log de erro: Registrar uma falha em uma requisição à API, como um erro HTTP 500 ao tentar carregar os dados do usuário.

---

## 5. Gestão de Defeitos

O ciclo começa quando o QA identifica um problema durante os testes e registra o bug com todas as informações necessárias para que ele possa ser entendido e reproduzido. Depois, o desenvolvedor analisa e realiza a correção. Em seguida, o QA testa novamente para verificar se o problema foi resolvido. Se estiver tudo certo, o bug é fechado. Caso contrário, é reaberto para uma nova correção.
