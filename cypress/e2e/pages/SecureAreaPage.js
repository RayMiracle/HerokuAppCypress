export class SecureAreaPage {

    get secureAreaHeader() {
        return cy.get('h2');
    }

    get flashSuccessMessage() {
        return cy.get('.flash.success');
    }

    get logoutButton() {
        return cy.contains('Logout');
    }

    checkLoginSuccess() {
        this.flashSuccessMessage.should('contain.text', 'You logged into a secure area!');
        cy.url().should('contain', '/secure');
        this.secureAreaHeader.should('contain.text', 'Secure Area');
    }

    logout() {
        this.logoutButton.click();
    }

}