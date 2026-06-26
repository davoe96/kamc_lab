Cypress.Commands.add('login', (username, password) => {
    cy.session([username, password], ()=>{
        cy.visit('/')
        cy.visit('/login') // change to '/' if the login form is on the home page
        cy.get('#loginEmail').clear().type(username)
        cy.get('#loginPassword').clear().type(password, { log: false })
    })

      
        validate: () => {
          cy.getCookie('your-session-cookie').should('exist')

        }
    
  })
  Cypress.Commands.add('mockSafeTopFunction', () => {
    cy.on('window:before:load', (win) => {
      win.Intelex = {
        Util: {
          Window: {
            safeTop: () => ({
              $: () => {},
            }),
          },
        },
      };
    });
  });
