
  it('My Account', () => {
  cy.visit("https://acemoneytransfer.com/login");
        //cy.contains('li a', 'Login').click({force:true});
        // Type into Email input
            cy.get('#email')
              .should('be.visible')
              .type('unitedkingdom@mailinator.com')
              .should('have.value', 'unitedkingdom@mailinator.com');

            // Type into Password input
            cy.get('#password')
              .should('be.visible')
              .type('abcd1234')
              .should('have.value', 'abcd1234');

              cy.contains('button', 'Login').click();
              //Asssert URL should include new transfer
              cy.url().should('include', '/dashboard');
            cy.contains('a', 'My Account').click({force:true});




   })