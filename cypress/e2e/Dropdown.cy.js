describe('Dropdown tests', () => {
  it('Verifies dropdown options', () => {
    cy.openHomePage()

    cy.contains('Dropdown')
      .click()

    cy.url()
      .should('contain', '/dropdown')
    
    cy.get('h3')
      .should('have.text', 'Dropdown List')

    cy.get('#dropdown option')
      .should('have.length', 3)

    cy.get('#dropdown')
      .find('option:selected')
      .should('have.text', 'Please select an option')

    cy.get('#dropdown')
      .select('Option 1')
      .should('have.value', '1')

    cy.get('#dropdown')
      .select('Option 2')
      .should('have.value', '2')
  })
})