describe('home', () => {
  it('shows a home page', () => {
    cy.visit('/')

    cy.get('h1').contains('emailaddress.horse')
  })
})
