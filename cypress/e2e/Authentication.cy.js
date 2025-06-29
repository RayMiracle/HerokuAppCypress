describe('Authentication tests', () => {
  beforeEach(() => {
    cy.openHomePage()

    cy.contains('Form Authentication')
      .click()

    cy.url()
      .should('contain', '/login')
    
    cy.get('h2')
      .should('have.text', 'Login Page')
  })

  it('Shows error on invalid username', () => {
    cy.get('[name="username"]')
      .should('have.value', '')
      .type('test')

    cy.get('[name="password"]')
      .should('have.value', '')
      .type('SuperSecretPassword!')

    cy.get('button')
      .should('contain.text', 'Login')
      .click()

    cy.get('.flash.error')
      .should('be.visible')
      .and('contain.text', 'Your username is invalid!')
  })

  it('Shows error on invalid password', () => {    
    cy.get('[name="username"]')
      .should('have.value', '')
      .type('tomsmith')

    cy.get('[name="password"]')
      .should('have.value', '')
      .type('test')

    cy.get('button')
      .should('contain.text', 'Login')
      .click()

    cy.get('.flash.error')
      .should('be.visible')
      .and('contain.text', 'Your password is invalid!')
  })

  it('Successfully logs in and logs out', () => {
    cy.get('[name="username"]')
      .should('have.value', '')
      .type('tomsmith')

    cy.get('[name="password"]')
      .should('have.value', '')
      .type('SuperSecretPassword!')

    cy.get('button')
      .should('contain.text', 'Login')
      .click()

    cy.url()
      .should('contain', '/secure')

    cy.get('.flash.success')
      .should('be.visible')
      .and('contain.text', 'You logged into a secure area!')

    cy.get('h2')
      .should('contain.text', 'Secure Area')

    cy.contains('Logout')
      .click()

    cy.url()
      .should('contain', '/login')

    cy.get('h2')
      .should('have.text', 'Login Page')
  })
})