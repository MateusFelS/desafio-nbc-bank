describe('Login - cenários negativos - SauceDemo', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('deve exibir erro ao informar senha incorreta', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('senha_errada')
    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Epic sadface: Username and password do not match any user in this service')
    cy.url().should('eq', Cypress.config('baseUrl'))
  })

  it('deve bloquear o login do usuário locked_out_user', () => {
    cy.get('[data-test="username"]').type('locked_out_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Epic sadface: Sorry, this user has been locked out.')
    cy.url().should('not.include', '/inventory.html')
  })
})