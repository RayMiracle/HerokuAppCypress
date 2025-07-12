export class HomePage {

    get formAuthenticationLink() {
        return cy.contains('Form Authentication');
    }

    get dynamicControlsLink() {
        return cy.contains('Dynamic Controls');
    }

    goToAuthenticationForm() {
        this.formAuthenticationLink.click();
    }

    goToDynamicControls() {
        this.dynamicControlsLink.click();
    }

}