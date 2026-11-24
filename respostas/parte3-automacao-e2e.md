# Parte 3 – Automação E2E (Nível Pleno)

## 11. Fundamentos

### O que é automação de testes?
É quando usamos ferramentas e programas para testar um sistema automaticamente, sem precisar que uma pessoa faça tudo manualmente e em menor tempo. Isso ajuda a encontrar erros e verificar se o software está funcionando como deveria.

### Quais seus benefícios?

- Os testes são feitos em menos tempo.
- Evita repetir as mesmas tarefas manualmente.
- Diminui as chances de falhas durante os testes.
- Permite repetir os testes sempre que necessário (teste de regressão).
- Ajuda a encontrar problemas antes do sistema chegar aos usuários.

### Quais seus riscos?

- Pode ser necessário investir em ferramentas e treinamento.
- Quando o sistema muda, os testes precisam ser atualizados.
- Se forem programados incorretamente, podem deixar passar alguns erros.
- Problemas nas ferramentas podem atrapalhar os testes.

---

## 12. Frameworks

- Cypress: é uma ferramenta utilizada para automatizar testes em aplicações web. Permite simular ações do usuário, como clicar em botões, preencher campos, navegar entre páginas e validar se os elementos estão funcionando corretamente.

- Playwright: é uma ferramenta de automação que permite testar aplicações web em diferentes navegadores, como Chrome, Firefox e Safari. Possibilita simular a navegação e as ações dos usuários, além de verificar se o sistema está funcionando como esperado.

Minha experiência: Já utilizei o Cypress na automação de testes de funcionalidades da plataforma ConectaBem, como Login e Cadastro, Filtros e Buscas e Agendamento de Profissionais. Também tive contato com o Playwright em projetos de estudo, para conhecer melhor seus recursos e possibilidades. Além disso, configurei pipelines com GitHub Actions para que os testes automatizados fossem executados automaticamente a cada push ou pull request, facilitando a identificação de possíveis erros durante o desenvolvimento.

---

## 13. Arquitetura

### Page Object Model (POM)
O POM é um padrão de organização de testes automatizados que separa os elementos e as ações de cada página do código dos testes. Na prática, cada página do sistema possui uma classe ou arquivo responsável por armazenar seus elementos e ações, como clicar em botões, preencher campos e acessar menus. Isso facilita a organização, evita repetição de código e torna a manutenção dos testes mais simples.

### Screenplay Pattern
O Screenplay é um padrão que organiza os testes com base nas ações dos usuários dentro do sistema. Ele utiliza conceitos como atores, tarefas e interações para representar o comportamento de quem está utilizando a aplicação. Essa abordagem deixa os testes mais próximos de situações reais e facilita a reutilização de ações em diferentes cenários.

### Quando usar cada um

- **POM:** é indicado para projetos menores ou de médio porte, quando queremos organizar os testes por páginas e facilitar a manutenção dos elementos e ações.
- **Screenplay:** é mais indicado para projetos maiores e mais complexos, que possuem muitos fluxos e cenários de teste, pois oferece maior reutilização e organização das ações.

---

## 14. Desafio Prático E2E

O código, as evidências e as instruções de execução estão na pasta [`e2e-saucedemo`](../e2e-saucedemo/).
