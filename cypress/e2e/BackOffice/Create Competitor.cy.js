import CompetitorRateAnalysisPage from '../../support/pageObjects/competitorRateAnalysisPage'

describe('Competitor Rate Analysis', () => {

  beforeEach(() => {
    // Runs before each test
    cy.login()
  })

  it('should create a competitor and show it in the listing', () => {

    CompetitorRateAnalysisPage.navigateToPage();
    cy.url().should('include', '/report/competitor-rates');

    CompetitorRateAnalysisPage.createCompetitor('Test Competitor');
    CompetitorRateAnalysisPage.verifyCompetitorIsListed('Test Competitor');
  })

})

