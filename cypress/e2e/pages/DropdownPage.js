/// <reference types="cypress" />

// Page Object Model for the Dropdown page
export class DropdownPage {

    // Returns the header element for the dropdown page
    get dropdownHeader() {
        return cy.contains('h3', 'Dropdown List');
    }

    // Returns the <select> element for the dropdown
    get dropdownSelect() {
        return cy.get('#dropdown');
    }

    // Returns all <option> elements within the dropdown
    get dropdownOptions() {
        return this.dropdownSelect.find('option');
    }

    // Checks that the dropdown page is loaded and options are present
    checkInitialDropdownPage() {
        cy.url().should('include', '/dropdown'); // Verify URL
        this.dropdownHeader.should('be.visible'); // Header should be visible
        this.dropdownSelect.should('be.visible'); // Dropdown should be visible
        this.dropdownOptions.should('have.length', 3); // Should have 3 options
        this.dropdownOptions.eq(0).should('have.text', 'Please select an option').and('be.visible'); // First option text
        this.dropdownOptions.eq(1).should('have.text', 'Option 1'); // Second option text
        this.dropdownOptions.eq(2).should('have.text', 'Option 2'); // Third option text
    }

    // Selects options from the dropdown and verifies selection
    selectOptions() {
        this.dropdownSelect.select('Option 1'); // Select "Option 1"
        this.dropdownSelect.should('have.value', '1'); // Value should be '1'
        this.dropdownOptions.eq(1).should('be.selected').and('be.visible'); // "Option 1" should be selected

        this.dropdownSelect.select('Option 2'); // Select "Option 2"
        this.dropdownSelect.should('have.value', '2'); // Value should be '2'
        this.dropdownOptions.eq(2).should('be.selected').and('be.visible'); // "Option 2" should be selected
    }

}