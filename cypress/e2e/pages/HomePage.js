/// <reference types="cypress" />

// Page Object Model for the application's Home page
export class HomePage {

    // Returns the link to the Form Authentication page
    get formAuthenticationLink() {
        return cy.contains('Form Authentication');
    }

    // Returns the link to the Dynamic Controls page
    get dynamicControlsLink() {
        return cy.contains('Dynamic Controls');
    }

    // Returns the link to the Dropdown page
    get dropdownLink() {
        return cy.contains('Dropdown');
    }

    // Returns the link to the Entry Ad (modal window) page
    get entryAdLink() {
        return cy.contains('Entry Ad');
    }

    // Navigates to the Form Authentication page
    goToAuthenticationForm() {
        this.formAuthenticationLink.click();
    }

    // Navigates to the Dynamic Controls page
    goToDynamicControls() {
        this.dynamicControlsLink.click();
    }

    // Navigates to the Dropdown page
    goToDropdown() {
        this.dropdownLink.click();
    }

    // Navigates to the Entry Ad (modal window) page
    goToEntryAd() {
        this.entryAdLink.click();
    }

}