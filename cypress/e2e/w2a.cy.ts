describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://www.way2automation.com/angularjs-protractor/banking/#/login')
    cy.contains('Bank Manager Login').click();
    cy.contains('Add Customer').should('be.visible')
    cy.contains('Open Account').should('be.visible')
  })
})