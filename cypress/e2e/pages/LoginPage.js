/// <reference types="cypress" />

// Page Object Model for the Login page
export class LoginPage {

    // Returns the header element for the login page
    get loginPageHeader() {
        return cy.get('h2');
    }

    // Returns the username input field
    get usernameInput() {
        return cy.get('#username');
    }

    // Returns the password input field
    get passwordInput() {
        return cy.get('#password');
    }

    // Returns the login button element
    get loginButton() {
        return cy.get('button[type="submit"]');
    }

    // Returns the error message element shown after a failed login
    get flashErrorMessage() {
        return cy.get('.flash.error');
    }

    // Returns the success message element shown after a successful logout
    get flashSuccessMessage() {
        return cy.get('.flash.success');
    }

    // Checks that the login page is loaded and the header is correct
    checkLoginPage() {
        cy.url().should('include', '/login'); // Verify URL contains '/login'
        this.loginPageHeader.should('have.text', 'Login Page'); // Header should have correct text
    }

    // Attempts to log in with the provided username and password
    login(username, password) {
        this.usernameInput.should('have.value', '').type(username); // Type username
        this.passwordInput.should('have.value', '').type(password); // Type password
        this.loginButton.should('contain.text', 'Login').click(); // Click the login button
    }

    // Checks that the error message for an invalid username is displayed
    checkLoginUsernameInvalid() {
        this.flashErrorMessage.should('contain.text', 'Your username is invalid!');
    }

    // Checks that the error message for an invalid password is displayed
    checkLoginPasswordInvalid() {
        this.flashErrorMessage.should('contain.text', 'Your password is invalid!');
    }

    // Checks that the success message for logout is displayed
    checkLogoutSuccess() {
        this.flashSuccessMessage.should('contain.text', 'You logged out of the secure area!');
    }

}