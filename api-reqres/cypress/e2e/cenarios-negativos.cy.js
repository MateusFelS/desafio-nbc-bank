describe('API ReqRes - cenários negativos', () => {

  const headers = () => {
    return cy.env(['REQRES_API_KEY']).then((env) => {
      const h = {
        'Content-Type': 'application/json',
        'User-Agent': 'reqres-qa-tests/1.0',
      }

      const chave = env.REQRES_API_KEY

      if (chave) h['x-api-key'] = chave

      return h
    })
  }

  it('retorna 404 ao consultar usuário inexistente', () => {
    headers().then((h) => {
      cy.request({
        method: 'GET',
        url: '/api/users/23',
        headers: h,
        failOnStatusCode: false,
      }).then((res) => {
        expect(res.status).to.eq(404)
        expect(res.body).to.be.empty
      })
    })
  })

  it('retorna 400 ao fazer login sem senha', () => {
    headers().then((h) => {
      cy.request({
        method: 'POST',
        url: '/api/login',
        headers: h,
        body: { email: 'eve.holt@reqres.in' },
        failOnStatusCode: false,
      }).then((res) => {
        expect(res.status).to.eq(400)
        expect(res.body).to.have.property('error')
      })
    })
  })
})