class LoginPage {

  visit() {
    cy.visit("https://preportal1.ace4news.com/");
  }

  clickLoginMenu() {
    cy.contains('li a', 'Login').click();
  }

  enterEmail(email) {
    cy.get('#email')
      .should('be.visible')
      .clear()
      .type(email)
      .should('have.value', email);
  }

  enterPassword(password) {
    cy.get('#password')
      .should('be.visible')
      .clear()
      .type(password)
      .should('have.value', password);
  }

  clickLoginButton() {
    cy.contains('button', 'Login').click();
  }

  verifyErrorMessage(message) {
    cy.get('#error-message')
      .should('be.visible')
      .and('contain.text', message);
  }

  verifySuccessfulLogin() {
    cy.url().should('include', '/dashboard');
  }
}

export default LoginPage;
