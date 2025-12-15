describe('ACE Money Transfer Login to portal', () => {

// This test will send a error message as email and password entered are incorrect/not registered.
  it('Try to login to ace money transfer with invalid or non-registered credentials', () => {
    cy.visit("https://preportal1.ace4news.com/");
    cy.contains('li a', 'Login').click();
    // Type into Email input
        cy.get('#email')
          .should('be.visible')
          .type('test@example.com')
          .should('have.value', 'test@example.com');

        // Type into Password input
        cy.get('#password')
          .should('be.visible')
          .type('Password123')
          .should('have.value', 'Password123');

          cy.contains('button', 'Login').click();

          cy.get('#error-message')
            .should('be.visible')
            .and('contain.text', 'The provided email address is not registered. Please Sign Up');


  })

  })

  // This test will try to login with a valid credentials but without email verification
  it('Try to login to ace money transfer with invalid or non-registered credentials', () => {
      cy.visit("https://preportal1.ace4news.com/");
      cy.contains('li a', 'Login').click();
      // Type into Email input
          cy.get('#email')
            .should('be.visible')
            .type('testing@gmail.com')
            .should('have.value', 'testing@gmail.com');

          // Type into Password input
          cy.get('#password')
            .should('be.visible')
            .type('test123456')
            .should('have.value', 'test123456');

            cy.contains('button', 'Login').click();

            cy.get('#error-message')
              .should('be.visible')
              .and('contain.text', 'Your account is not verified. We have sent you an email to confirm your registration. Please click on the activation link to activate your account. If you did not receive the email, please check SPAM folder of your mailbox.');


    })

// This test will Successfully logged in to the system
  it('Try to login to ace money transfer with invalid or non-registered credentials', () => {
      cy.visit("https://preportal1.ace4news.com/");
      cy.contains('li a', 'Login').click();
      // Type into Email input
          cy.get('#email')
            .should('be.visible')
            .type('barracuda60671@mailshan.com')
            .should('have.value', 'barracuda60671@mailshan.com');

          // Type into Password input
          cy.get('#password')
            .should('be.visible')
            .type('test123456')
            .should('have.value', 'test123456');

            cy.contains('button', 'Login').click();
            //Asssert URL should include new transfer
            cy.url().should('include', '/dashboard');

    })