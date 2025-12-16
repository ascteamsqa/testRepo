class CompetitorRateAnalysisPage {
  // ===== Locators =====
  competitorRateAnalysisLink() {
    return cy.contains('Competitor Rate Analysis');
  }

  createCompetitorButton() {
    return cy.get('[data-testid="create-competitor"]');
    // or any selector you already use
  }

  competitorNameInput() {
    return cy.get('[data-testid="competitor-name"]');
  }

  saveButton() {
    return cy.contains('Save');
  }

  competitorList() {
    return cy.get('[data-testid="competitor-list"]');
  }

  // ===== Actions =====
  navigateToPage() {
    this.competitorRateAnalysisLink().click({force:true});
  }

  createCompetitor(name) {
    this.createCompetitorButton().click();
    this.competitorNameInput().type(name);
    this.saveButton().click();
  }

  verifyCompetitorIsListed(name) {
    this.competitorList().should('contain.text', name);
  }
}

export default new CompetitorRateAnalysisPage();
