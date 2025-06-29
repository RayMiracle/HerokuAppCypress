describe('Dynamic Controls tests', () => {
  beforeEach(() => {
    cy.openHomePage()

    cy.contains('Dynamic Controls')
      .click()

    cy.url()
      .should('contain', '/dynamic_controls')

    cy.contains('h4', 'Dynamic Controls')
      .should('be.visible')
  })

  it('Removes and adds checkbox', () => {
    cy.get('#checkbox input')
      .should('have.attr', 'type', 'checkbox')
      .and('not.be.checked')
      .check()
      .and('be.checked')

    cy.get('#checkbox')
      .should('contain.text', 'A checkbox')
    
    cy.contains('button', 'Remove')
      .click()
      .should('have.attr', 'disabled', 'disabled')

    cy.waitForLoadingGifToDisappear()
    
    cy.get('#message')
      .should('contain.text', "It's gone!")
    
    cy.contains('button', 'Add')
      .click()
      .should('have.attr', 'disabled', 'disabled')
    
    cy.waitForLoadingGifToDisappear()
    
    cy.get('#message')
      .should('contain.text', "It's back!")
    
    cy.get('#checkbox')
      .should('have.attr', 'type', 'checkbox')
      .and('not.be.checked')
      .parent()
      .should('contain.text', 'A checkbox')     
    
    cy.contains('button', 'Remove')
      .should('be.visible')
      .and('not.be.disabled')
  })

  it('Enables and Disables text box', () => {
    cy.get('#input-example input')
      .should('have.attr', 'type', 'text')
      .and('be.disabled')
    
    cy.contains('button', 'Enable')
      .click()
      .should('have.attr', 'disabled', 'disabled')
    
    cy.waitForLoadingGifToDisappear()

    cy.get('#message')
      .should('contain.text', "It's enabled!")
    
    cy.get('#input-example input')
      .should('have.attr', 'type', 'text')
      .and('be.enabled')
      .type('Test')
    
    cy.contains('button', 'Disable')
      .click()
      .should('have.attr', 'disabled', 'disabled')
    
    cy.waitForLoadingGifToDisappear()

    cy.get('#message')
      .should('contain.text', "It's disabled!")
  })
})