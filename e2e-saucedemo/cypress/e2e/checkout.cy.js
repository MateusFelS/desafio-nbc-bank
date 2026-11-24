describe('Checkout - validação de campos - SauceDemo', () => {
    beforeEach(() => {
        cy.visit('/')

        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        // Verifica se o produto já está no carrinho
        cy.get('body').then(($body) => {
            if ($body.find('[data-test="remove-sauce-labs-backpack"]').length > 0) {
            cy.get('[data-test="remove-sauce-labs-backpack"]').click()
            }
        })

        // Adiciona novamente o produto
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="checkout"]').click()
    })

  it('deve exigir o primeiro nome ao enviar o formulário vazio', () => {
    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'First Name is required')
    cy.url().should('include', '/checkout-step-one.html')
  })

  it('deve exigir o CEP quando ele não é preenchido', () => {
    cy.get('[data-test="firstName"]').type('Mateus')
    cy.get('[data-test="lastName"]').type('Santos')
    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Postal Code is required')
    cy.url().should('include', '/checkout-step-one.html')
  })
})