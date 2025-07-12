export class LoginPage {

    get loginPageHeader() {
        return cy.get('h2');
    }

    get usernameInput() {
        return cy.get('#username');
    }

    get passwordInput() {
        return cy.get('#password');
    }

    get loginButton() {
        return cy.get('button[type="submit"]');
    }

    get flashErrorMessage() {
        return cy.get('.flash.error');
    }

    get flashSuccessMessage() {
        return cy.get('.flash.success');
    }

    checkLoginPage() {
        cy.url().should('contain', '/login');
        this.loginPageHeader.should('have.text', 'Login Page');
    }

    login(username, password) {
        this.usernameInput.should('have.value', '').type(username);
        this.passwordInput.should('have.value', '').type(password);
        this.loginButton.should('contain.text', 'Login').click();
    }

    checkLoginUsernameInvalid() {
        this.flashErrorMessage.should('contain.text', 'Your username is invalid!');
    }

    checkLoginPasswordInvalid() {
        this.flashErrorMessage.should('contain.text', 'Your password is invalid!');
    }

    checkLogoutSuccess() {
        this.flashSuccessMessage.should('contain.text', 'You logged out of the secure area!');
    }

}