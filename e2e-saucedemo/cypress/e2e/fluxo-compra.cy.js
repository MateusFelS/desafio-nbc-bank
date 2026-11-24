describe('Fluxo de compra - SauceDemo', () => {
  it('deve realizar login, comprar dois produtos e fazer logout', () => {
    // 1. Login válido
    cy.visit('/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.url().should('include', '/inventory.html')
    cy.get('[data-test="title"]').should('have.text', 'Products')

    // 2. Adicionar dois produtos ao carrinho
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '2')

    // 3. Acessar o carrinho
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.url().should('include', '/cart.html')
    cy.get('[data-test="inventory-item"]').should('have.length', 2)
    cy.get('[data-test="inventory-item-name"]')
      .should('contain', 'Sauce Labs Backpack')
      .and('contain', 'Sauce Labs Bike Light')

    // 4. Finalizar compra
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('Mateus')
    cy.get('[data-test="lastName"]').type('Santos')
    cy.get('[data-test="postalCode"]').type('18800000')
    cy.get('[data-test="continue"]').click()

    cy.url().should('include', '/checkout-step-two.html')
    cy.get('[data-test="inventory-item"]').should('have.length', 2)
    cy.get('[data-test="finish"]').click()

    // 5. Validar mensagem de sucesso
    cy.url().should('include', '/checkout-complete.html')
    cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!')
    cy.screenshot('compra-finalizada-com-sucesso')

    // 6. Logout
    cy.get('#react-burger-menu-btn').click()
    cy.get('[data-test="logout-sidebar-link"]').click()

    cy.url().should('eq', Cypress.config('baseUrl'))
    cy.get('[data-test="login-button"]').should('be.visible')
  })
})