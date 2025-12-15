// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('loginByApi', () => {
  cy.session(
    'user-session',
    () => {
      cy.request({
        method: 'POST',
        url: 'https://preportal1.ace4news.com/authenticate',
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          email: 'ascteamsqa+02@gmail.com',
          password: '@Qwerty123'
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(200)

        // ✅ WRITE TO FILE
        cy.task(
          'log',
          `LOGIN API RESPONSE: status=${response.status}, body=${JSON.stringify(response.body)}`
        )
      })
    },
    {
      validate: () => {
        cy.request({
          method: 'GET',
          url: 'https://preportal1.ace4news.com/authenticate',
          failOnStatusCode: false
        }).then((res) => {
          expect(res.status).to.eq(405)

          // ✅ WRITE TO FILE
          cy.task(
            'log',
            `DASHBOARD VALIDATE RESPONSE: status=${res.status}`
          )
        })
      }
    }
  )
})


