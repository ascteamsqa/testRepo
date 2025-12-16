import TransferPage from '../../support/pageObjects/transferPage';

describe('Transfer', () => {
beforeEach(() => {
    // Runs before each test
    cy.loginAMT()
  })
  it('should create a cash transfer', () => {

    TransferPage.clickSendMoney();
    TransferPage.verifyTransferPage();

    TransferPage.selectSendingCountry('Australia');
    TransferPage.selectReceivingCountry('Pakistan');
    TransferPage.selectCashMethod();

  });
});
