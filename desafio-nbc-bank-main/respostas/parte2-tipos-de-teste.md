# Parte 2 – Tipos de Testes (Nível Júnior/Pleno)

## 6. Conceitos

### Teste Funcional
Como o nome já diz, ele verifica se as funcionalidades do sistema estão funcionando como deveriam, de acordo com os requisitos. Um exemplo seria testar se o usuário consegue realizar o login com e-mail e senha válidos.

### Teste Não Funcional
Já o Não Funcional verifica aspectos relacionados à qualidade do sistema, como desempenho, segurança e usabilidade. Um exemplo seria verificar o tempo que o site demora para carregar.

### Teste Exploratório
É quando alguém explora o sistema sem seguir um roteiro de teste, tentando encontrar problemas e comportamentos inesperados, simulando um usuário real.

### Teste de Regressão
É realizado após uma alteração, correção ou implementação no sistema para verificar se as funcionalidades que já funcionavam continuam funcionando corretamente e se nenhuma outra parte do sistema foi afetada pela mudança. Por exemplo, após corrigir o carrinho, rodar de novo login, busca e checkout

### Teste Smoke
É um teste mais básico, feito para verificar se as principais funcionalidades do sistema estão funcionando e se vale a pena continuar com os testes. Por exemplo, após um novo deploy, verificar se o sistema abre e se o login funciona

### Teste de Aceite (UAT)
É realizado para verificar se o sistema atende às necessidades do negócio e dos usuários. Geralmente é feito pelo cliente ou usuário final antes da aprovação para uso. Por exemplo, o cliente realiza uma compra no sistema para verificar se todo o processo funciona como esperado antes de aprovar o sistema para uso.

---

## 7. Cenários de Teste: Cadastro de usuário

**Funcionalidade:** cadastro com Nome, E-mail, Senha e Confirmação de Senha.

**Premissas:** como o enunciado não define as regras de cada campo, assumi que a senha tem no mínimo 8 caracteres, com pelo menos uma letra maiúscula, um número e um caractere especial, e que o nome não pode conter apenas números ou caracteres especiais.

| ID | Cenário | Resultado esperado |
|---|---|---|
| CN-01 | Realizar cadastro com todos os campos preenchidos corretamente | Sistema cadastra o usuário e exibe mensagem de sucesso. |
| CN-02 | Enviar o formulário com todos os campos vazios | Sistema informa que os campos são obrigatórios e impede o cadastro. |
| CN-03 | Deixar o campo Nome vazio | Sistema informa que o nome é obrigatório e impede o cadastro. |
| CN-04 | Deixar o campo E-mail vazio | Sistema informa que o e-mail é obrigatório e impede o cadastro. |
| CN-05 | Deixar o campo Senha vazio | Sistema informa que a senha é obrigatória e impede o cadastro. |
| CN-06 | Deixar o campo Confirmação de Senha vazio | Sistema informa que a confirmação é obrigatória e impede o cadastro. |
| CN-07 | Informar um e-mail em formato inválido (ex.: `usuario@`) | Sistema informa que o e-mail é inválido e impede o cadastro. |
| CN-08 | Informar um e-mail que já está cadastrado | Sistema informa que o e-mail já está em uso e impede o cadastro. |
| CN-09 | Informar um e-mail já cadastrado trocando maiúsculas e minúsculas (ex.: `Teste@exemplo.com` x `teste@exemplo.com`) | Sistema reconhece como o mesmo e-mail, informa que já está em uso e impede o cadastro. |
| CN-10 | Informar senhas diferentes em Senha e Confirmação de Senha | Sistema informa que as senhas não coincidem e impede o cadastro. |
| CN-11 | Informar uma senha com menos de 8 caracteres | Sistema informa que a senha não atende ao tamanho mínimo e impede o cadastro. |
| CN-12 | Informar uma senha sem os requisitos de complexidade (ex.: sem maiúscula, número ou caractere especial) | Sistema informa os requisitos da senha e impede o cadastro. |
| CN-13 | Informar um nome contendo apenas números ou caracteres especiais | Sistema rejeita o nome e impede o cadastro. |
| CN-14 | Preencher os campos apenas com espaços em branco | Sistema trata como campos vazios e impede o cadastro. |
| CN-15 | Informar um nome com acentos e cedilha (ex.: `João Conceição`) | Sistema aceita o nome e salva os caracteres corretamente. |
| CN-16 | Digitar `<script>alert(1)</script>` no campo Nome | Sistema rejeita ou trata a entrada, sem executar o script. |
| CN-17 | Clicar duas vezes rapidamente no botão "Cadastrar" com dados válidos | Sistema cria apenas um cadastro, sem duplicidade. |

---

## 8. Técnicas de Teste

**Regra:** a idade permitida para cadastro é entre 18 e 65 anos.

### Particionamento por Equivalência

| Partição | Faixa de valores | Válida ou inválida | Exemplo de valor | Resultado esperado |
|---|---|---|---|---|
| Menor que 18 anos | Abaixo de 18 | Inválida | 16 anos | Sistema deve impedir o cadastro. |
| Entre 18 e 65 anos | De 18 a 65 | Válida | 30 anos | Sistema deve permitir o cadastro. |
| Maior que 65 anos | Acima de 65 | Inválida | 70 anos | Sistema deve impedir o cadastro. |

### Análise de Valor Limite

| Valor testado | Posição em relação ao limite | Resultado esperado |
|---|---|---|
| 17 anos | Abaixo do limite mínimo | Sistema deve impedir o cadastro. |
| 18 anos | No limite mínimo | Sistema deve permitir o cadastro. |
| 19 anos | Acima do limite mínimo | Sistema deve permitir o cadastro. |
| 64 anos | Abaixo do limite máximo | Sistema deve permitir o cadastro. |
| 65 anos | No limite máximo | Sistema deve permitir o cadastro. |
| 66 anos | Acima do limite máximo | Sistema deve impedir o cadastro. |

---

## 9. Priorização

### Severidade
É relacionado ao impacto que o bug causa no sistema, ou seja, o quanto ele afeta o funcionamento de uma funcionalidade.

### Prioridade
Está relacionada à urgência com que o bug precisa ser corrigido, ou seja, o quanto é importante resolver aquele problema rapidamente.

### Exemplos práticos

| Situação | Severidade | Prioridade | Justificativa |
|---|---|---|---|
| Usuários não conseguem realizar login no sistema | Alta | Alta | Impede o acesso ao sistema e afeta todos os usuários. |
| Logo da empresa aparece desalinhado na página inicial | Baixa | Alta | Não afeta o funcionamento, mas é um problema visual muito visível para os usuários. |
| Um botão de uma funcionalidade pouco utilizada apresenta um pequeno desalinhamento | Baixa | Baixa | Não compromete o funcionamento e tem pouco impacto na experiência do usuário. |

---

## 10. Avaliação de Risco

**Cenário:** um defeito permite que clientes finalizem pedidos sem efetuar pagamento.

**Severidade:**
Alta, pois permite que clientes finalizem pedidos sem realizar o pagamento, causando prejuízo financeiro para a empresa.

**Prioridade:**
Alta, porque é um problema que precisa ser corrigido o mais rápido possível para evitar novos pedidos sem pagamento.

**Como trataria esse incidente:**
Primeiro, registraria o bug com os passos para reproduzir o problema e as evidências encontradas. Comunicaria imediatamente o time responsável, destacando o impacto financeiro. Após a correção, realizaria novos testes para garantir que não seja mais possível finalizar pedidos sem pagamento e verificaria se o fluxo normal de compra continua funcionando.

Exemplo:

```
Título: Sistema permite finalizar pedidos sem efetuar pagamento.

Descrição: Foi identificado um problema em que o sistema permite que clientes finalizem pedidos sem concluir o pagamento, podendo causar prejuízos financeiros para a empresa.

Pré-condições:
- Usuário deve estar logado no sistema.
- Deve existir um produto disponível para compra.
- Usuário deve ter acesso ao fluxo de finalização do pedido.

Passos para reproduzir:
1. Acessar a loja com um usuário cadastrado.
2. Adicionar um produto ao carrinho.
3. Avançar para a etapa de pagamento.
4. Não realizar o pagamento.
5. Tentar finalizar o pedido.

Resultado esperado: Sistema deve impedir a finalização do pedido enquanto o pagamento não for confirmado.

Resultado obtido: Sistema permite finalizar o pedido mesmo sem a confirmação do pagamento.

Severidade: Alta, pois pode causar prejuízos financeiros para a empresa.

Prioridade: Alta, pois o problema precisa ser corrigido imediatamente para evitar novos pedidos sem pagamento.

Evidências:
- Gravação de vídeo mostrando o processo de finalização do pedido sem pagamento.
- Print da tela confirmando que o pedido foi realizado.
- Log da requisição relacionada à finalização do pedido.
```
