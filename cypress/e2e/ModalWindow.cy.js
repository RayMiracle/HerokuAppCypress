describe('Modal Window tests', () => {
  it('Opens and closes modal window', () => {
    cy.openHomePage()

    cy.contains('Entry Ad')
      .click()

    cy.url()
      .should('contain', '/entry_ad')

    cy.contains('h3', 'Entry Ad')
      .should('be.visible')
    
    cy.get('.modal')
      .should('be.visible')
    
    cy.get('.modal-title h3')
      .should('have.text', 'This is a modal window')
    
    cy.get('.modal-footer p')
      .should('have.text', 'Close')
      .click()
    
    cy.get('.modal')
      .should('not.be.visible')
  })
})