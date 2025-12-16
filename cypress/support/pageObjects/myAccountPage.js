class MyAccountPage {

  elements = {
    myAccountLink: () => cy.contains('a', 'My Account')
  }

  clickMyAccount() {
    this.elements.myAccountLink().click({ force: true });
  }
}

export default new MyAccountPage();
