# Parte 2 – Tipos de Testes (Nível Júnior/Pleno)

## 6. Conceitos

### Teste Funcional
Como o nome já diz, ele verifica se as funcionalidades do sistema estão funcionando como deveriam, de acordo com os requisitos. Um exemplo seria testar se o usuário consegue realizar o login com e-mail e senha válidos.

### Teste Não Funcional
Já o Não Funcional verifica aspectos relacionados à qualidade do sistema, como desempenho, segurança e usabilidade. Um exemplo seria verificar o tempo que o site demora para carregar.

### Teste Exploratório
É quando alguém explora o sistema sem seguir um roteiro de teste, tentando encontrar problemas e comportamentos inesperados, simulando um usuário real.

### Teste de Regressão
É realizado após uma alteração, correção ou implementação no sistema para verificar se as funcionalidades que já funcionavam continuam funcionando corretamente e se nenhuma outra parte do sistema foi afetada pela mudança.

### Teste Smoke
É um teste mais básico, feito para verificar se as principais funcionalidades do sistema estão funcionando e se vale a pena continuar com os testes.

### Teste de Aceite (UAT)
É realizado para verificar se o sistema atende às necessidades do negócio e dos usuários. Geralmente é feito pelo cliente ou usuário final antes da aprovação para uso. Por exemplo, o cliente realiza uma compra no sistema para verificar se todo o processo funciona como esperado antes de aprovar o sistema para uso.

---

## 7. Cenários de Teste: Cadastro de usuário

**Funcionalidade:** cadastro com Nome, E-mail, Senha e Confirmação de Senha.

## 7. Cenários de Teste - Cadastro de Usuário

| ID | Cenário | Resultado esperado |
|---|---|---|
| CT-001 | Realizar cadastro com todos os campos preenchidos corretamente | Sistema deve cadastrar o usuário e exibir uma mensagem de sucesso. |
| CT-002 | Informar nome e sobrenome | Sistema deve aceitar o nome informado. |
| CT-003 | Informar um e-mail válido | Sistema deve aceitar o formato do e-mail. |
| CT-004 | Informar uma senha que atenda aos requisitos | Sistema deve aceitar a senha informada. |
| CT-005 | Informar senhas iguais nos campos Senha e Confirmação de Senha | Sistema deve aceitar a confirmação e permitir o cadastro. |
| CT-006 | Enviar formulário com todos os campos vazios | Sistema deve informar que os campos são obrigatórios e impedir o cadastro. |
| CT-007 | Deixar o campo Nome vazio | Sistema deve informar que o nome é obrigatório. |
| CT-008 | Deixar o campo E-mail vazio | Sistema deve informar que o e-mail é obrigatório. |
| CT-009 | Deixar o campo Senha vazio | Sistema deve informar que a senha é obrigatória. |
| CT-010 | Deixar o campo Confirmação de Senha vazio | Sistema deve informar que a confirmação de senha é obrigatória. |
| CT-011 | Informar um e-mail em formato inválido | Sistema deve informar que o e-mail é inválido e impedir o cadastro. |
| CT-012 | Informar um e-mail que já está cadastrado | Sistema deve informar que o e-mail já está em uso e impedir o cadastro. |
| CT-013 | Informar senhas diferentes nos campos Senha e Confirmação de Senha | Sistema deve informar que as senhas não coincidem e impedir o cadastro. |
| CT-014 | Informar uma senha abaixo do tamanho mínimo permitido | Sistema deve informar que a senha não atende aos requisitos e impedir o cadastro. |
| CT-015 | Informar um nome contendo apenas números ou caracteres especiais | Sistema deve rejeitar o nome e impedir o cadastro. |

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
