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
Cypress.Commands.add('login', () => {

  cy.visit('https://prebackoffice1.ace4news.com/login');

  cy.get('input[name="user_email"]')
    .should('be.visible')
    .type('bilalahmad');

  cy.get('input[name="password"]')
    .should('be.visible')
    .type('Backoffice@123', { log: false });

  cy.get('button[type="submit"]').click();

  // Verify login success
  cy.url().should('not.include', '/login');
});



