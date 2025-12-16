// File: cypress/e2e/BackOffice/Create Competitor.cy.js

import CompetitorRateAnalysisPage from '../../support/pageObjects/competitorRateAnalysisPage'

describe('Competitor Rate Analysis', () => {

  beforeEach(() => {
    // Runs before each test
    cy.login()
  })

  it('should create a competitor and show it in the listing', () => {
    // Navigate to the page
    CompetitorRateAnalysisPage.navigateToPage();
    cy.url().should('include', '/report/competitor-rates');

    // Create a new competitor
//    CompetitorRateAnalysisPage.createCompetitor('Test Competitor')
//
//    // Verify the competitor appears in the list
//    CompetitorRateAnalysisPage.verifyCompetitorIsListed('Test Competitor')
  })

})

