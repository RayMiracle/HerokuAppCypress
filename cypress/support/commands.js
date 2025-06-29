Cypress.Commands.add('openHomePage', () => {
  cy.visit('https://the-internet.herokuapp.com')
})

Cypress.Commands.add('waitForLoadingGifToDisappear', () => {
  cy.get('#loading')
    .should('have.text', 'Wait for it... ')
  cy.get('#loading img')
    .should('have.attr', 'src', '/img/ajax-loader.gif')
    .and('be.visible')
  cy.get('#loading img', { timeout: 5000 })
    .should('not.be.visible')
})