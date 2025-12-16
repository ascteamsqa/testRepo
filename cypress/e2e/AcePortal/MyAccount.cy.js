import MyAccountPage from '../../support/pageObjects/myAccountPage';

describe('My Account', () => {

  beforeEach(() => {
    cy.loginAMT();   // handled globally
  });

  it('should open My Account page', () => {

    MyAccountPage.clickMyAccount();
    cy.url().should('include', '/account-detail');
  });
});
