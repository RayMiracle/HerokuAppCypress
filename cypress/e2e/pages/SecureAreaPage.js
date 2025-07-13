/// <reference types="cypress" />

// Page Object Model for the Secure Area page (after successful login)
export class SecureAreaPage {

    // Returns the header element for the secure area page
    get secureAreaHeader() {
        return cy.get('h2');
    }

    // Returns the success message element shown after successful login
    get flashSuccessMessage() {
        return cy.get('.flash.success');
    }

    // Returns the logout button element
    get logoutButton() {
        return cy.contains('Logout');
    }

    // Checks that the login was successful and the secure area is displayed
    checkLoginSuccess() {
        this.flashSuccessMessage.should('contain.text', 'You logged into a secure area!'); // Success message
        cy.url().should('include', '/secure'); // URL should include '/secure'
        this.secureAreaHeader.should('contain.text', 'Secure Area'); // Header should be correct
    }

    // Clicks the logout button to log out of the secure area
    logout() {
        this.logoutButton.click();
    }

}