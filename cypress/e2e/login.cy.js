
//Practise different styles to log in
  it.only('login using worst style', () => {

    cy.visit('https://lab.kamc.io/')
    cy.contains('Start practice').click()
    cy.contains('Email address').should('be.visible')
    cy.get('#loginEmail').type('hello@kamc.io')
    cy.contains('Password').should('be.visible')
    cy.get('#loginPassword').type('KAMC-ltd-062023')
    cy.contains('Role').should('be.visible')
    cy.get('#loginRole').select('QA Engineer')
    cy.get('#loginConsent').check()
    cy.contains('Log in to Lab').click()
    cy.contains('Practice Lab').should('be.visible')
    cy.contains('Signed in as hello@kamc.io').should('be.visible')
    cy.get('#logoutButton').click()
    cy.reload(true)

  })
 it.only('login using best practices', () => {
   cy.visit('/')
    cy.contains('Start practice').click()
    cy.contains('Email address').should('be.visible')
    cy.get('#loginEmail').type('email')
    cy.contains('Password').should('be.visible')
    cy.get('#loginPassword').type('password')
    cy.contains('Role').should('be.visible')
    cy.get('#loginRole').select('QA Engineer')
    cy.get('#loginConsent').check()
    cy.contains('Log in to Lab').click()
    cy.reload(true)
 })
