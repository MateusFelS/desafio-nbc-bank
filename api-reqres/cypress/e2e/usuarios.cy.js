describe('API ReqRes - CRUD de usuários', () => {
  const TEMPO_MAXIMO_MS = 2000

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

  it('consulta um usuário (GET)', () => {
    headers().then((h) => {
      cy.request({ method: 'GET', url: '/api/users/2', headers: h }).then((res) => {
        expect(res.status).to.eq(200)
        expect(res.duration).to.be.lessThan(TEMPO_MAXIMO_MS)

        expect(res.body).to.have.property('data')
        const usuario = res.body.data
        expect(usuario).to.include.all.keys('id', 'email', 'first_name', 'last_name', 'avatar')
        expect(usuario.id).to.be.a('number')
        expect(usuario.email).to.be.a('string').and.include('@')
        expect(usuario.id).to.eq(2)
      })
    })
  })

  it('cria um usuário (POST)', () => {
    const corpo = { name: 'Mateus', job: 'QA' }

    headers().then((h) => {
      cy.request({ method: 'POST', url: '/api/users', headers: h, body: corpo }).then((res) => {
        expect(res.status).to.eq(201)
        expect(res.duration).to.be.lessThan(TEMPO_MAXIMO_MS)

        expect(res.body).to.include.all.keys('name', 'job', 'id', 'createdAt')
        expect(res.body.name).to.eq(corpo.name)
        expect(res.body.job).to.eq(corpo.job)
        expect(res.body.id).to.exist
        expect(res.body.createdAt).to.be.a('string')
      })
    })
  })

  it('atualiza um usuário (PUT)', () => {
    const corpo = { name: 'Mateus Santos', job: 'Analista de QA' }

    headers().then((h) => {
      cy.request({ method: 'PUT', url: '/api/users/2', headers: h, body: corpo }).then((res) => {
        expect(res.status).to.eq(200)
        expect(res.duration).to.be.lessThan(TEMPO_MAXIMO_MS)

        expect(res.body).to.include.all.keys('name', 'job', 'updatedAt')
        expect(res.body.name).to.eq(corpo.name)
        expect(res.body.job).to.eq(corpo.job)
        expect(res.body.updatedAt).to.be.a('string')
      })
    })
  })

  it('exclui um usuário (DELETE)', () => {
    headers().then((h) => {
      cy.request({ method: 'DELETE', url: '/api/users/2', headers: h }).then((res) => {
        expect(res.status).to.eq(204)
        expect(res.duration).to.be.lessThan(TEMPO_MAXIMO_MS)
        expect(res.body).to.be.empty
      })
    })
  })
})