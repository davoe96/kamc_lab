describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://lab.kamc.io/')
    cy.contains('Your Smiles, Our Joy')
    cy.contains('Start practice').click()
    cy.reload(true)
    cy.get('#loginCard').contains('Demo login')
    cy.get('#loginCard').contains('Log in to Lab')
    cy.contains('Ask KAMC').click()
  })
})