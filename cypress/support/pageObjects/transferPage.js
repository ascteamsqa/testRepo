class TransferPage {

  elements = {
    sendMoneyLink: () => cy.contains('a', 'Send Money'),
    sendingCountryDropdown: () =>
      cy.get('#sending_country + .select2 .select2-selection'),
    select2Options: () =>
      cy.get('body').find('.select2-results__option'),
    transferMoneyToLabel: () =>
      cy.contains('span', 'Transfer Money To'),
    cashMethod: () => cy.get('#method_Cash')
  }

  clickSendMoney() {
    this.elements.sendMoneyLink().click({ force: true });
  }

  verifyTransferPage() {
    cy.url().should('include', '/new-transfer');
  }

  selectSendingCountry(country) {
    this.elements.sendingCountryDropdown().click();
    this.elements.select2Options().contains(country).click();
  }

  selectReceivingCountry(country) {
    this.elements.transferMoneyToLabel().click();
    this.elements.select2Options().contains(country).click();
  }

  selectCashMethod() {
    this.elements.cashMethod().click();
  }
}

export default new TransferPage();
