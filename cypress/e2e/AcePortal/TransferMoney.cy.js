// This test will Successfully logged in to the system

    beforeEach(() => {
        cy.login();        // session is restored automatically
        cy.visit('/dashboard');
    });

  it('Transfer', () => {
            cy.contains('a', 'Send Money').click({force:true});

            cy.url().should('include', '/new-transfer');
            // Step 1: open the select2 dropdown
            cy.get('#sending_country + .select2 .select2-selection')
              .click();

            cy.get('body')
              .find('.select2-results__option')
              .contains('Australia')
              .click();

            cy.contains('span', 'Transfer Money To').click();

               cy.get('body')
               .find('.select2-results__option')
               .contains('Pakistan')
               .click();

            cy.get('#method_Cash').click();


    })