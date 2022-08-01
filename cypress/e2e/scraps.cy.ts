describe('scraps', () => {
  it('shows a list of navigable posts', () => {
    cy.visit('/')

    cy.get('a[href*="scraps"]').click()
    cy.url().should('include', '/scraps')
    cy.get('h1').contains('Scraps')

    cy.get('h2 a').first().as('firstPost').invoke('text').then(title => {
      cy.get('@firstPost').click()

      cy.get('h1').should('have.text', title)
    })
  })
})
