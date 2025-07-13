/// <reference types="cypress" />

// Page Object Model for the Dynamic Controls page
export class DynamicControlsPage {

    // Returns the header element for the dynamic controls page
    get dynamicControlsHeader() {
        return cy.contains('h4', 'Dynamic Controls');
    }

    // Returns the checkbox input element
    get checkboxInput() {
        return cy.get('#checkbox input[type="checkbox"]')
    }

    // Returns the container for the checkbox
    get checkboxContainer() {
        return cy.get('#checkbox');
    }

    // Returns the button to remove/add the checkbox
    get checkboxButton() {
        return cy.get('#checkbox-example > button');
    }

    // Returns the text input field
    get textInput() {
        return cy.get('#input-example > input');
    }

    // Returns the button to enable/disable the text input
    get inputButton() {
        return cy.get('#input-example > button');
    }

    // Returns the loading container element
    get loadingContainer() {
        return cy.get('#loading');
    }

    // Returns the loading image element (spinner)
    get loadingImage() {
        return cy.get('#loading img');
    }

    // Returns the message element that displays feedback
    get message() {
        return cy.get('#message');
    }

    // Checks that the dynamic controls page is loaded and initial state is correct
    checkInitialDynamicControlsPage() {
        cy.url().should('include', '/dynamic_controls'); // Verify URL
        this.dynamicControlsHeader.should('be.visible'); // Header should be visible
        this.checkboxInput.should('not.be.checked'); // Checkbox should not be checked
        this.checkboxContainer.should('contain.text', 'A checkbox'); // Checkbox label
        this.checkboxButton.should('have.text', 'Remove'); // Button should say "Remove"
        this.textInput.should('be.disabled').and('have.attr', 'type', 'text'); // Text input should be disabled
        this.inputButton.should('have.text', 'Enable'); // Button should say "Enable"
    }

    // Clicks the checkbox to check it, then clicks the remove button
    removeCheckbox() {
        this.checkboxInput.check().and('be.checked'); // Check the checkbox
        this.checkboxButton.click().should('have.attr', 'disabled', 'disabled'); // Click remove and check button is disabled
    }

    // Waits for the loading animation to disappear
    waitForLoadingGifToDisappear() {
        this.loadingContainer.should('have.text', 'Wait for it... ').and('be.visible'); // Loading text visible
        this.loadingImage.should('have.attr', 'src', '/img/ajax-loader.gif').and('be.visible'); // Spinner visible
        this.loadingContainer.should('not.be.visible', { timeout: 5000 }); // Wait for loading to disappear
    }

    // Asserts that the checkbox has been removed
    checkCheckboxRemoved() {
        this.message.should('have.text', "It's gone!"); // Message should say "It's gone!"
        this.checkboxContainer.should('not.exist'); // Checkbox container should not exist
        this.checkboxButton.should('have.text', 'Add'); // Button should say "Add"
    }

    // Clicks the button to add the checkbox back
    addCheckbox() {
        this.checkboxButton.click().should('have.attr', 'disabled', 'disabled'); // Click add and check button is disabled
    }

    // Asserts that the checkbox has been added back
    checkCheckboxAdded() {
        this.message.should('contain.text', "It's back!"); // Message should say "It's back!"
        this.checkboxContainer.should('be.visible').and('not.to.be.checked').parent().and('contain.text', 'A checkbox'); // Checkbox visible and not checked
        this.checkboxButton.should('have.text', 'Remove'); // Button should say "Remove"
    }

    // Clicks the button to enable the text box
    enableTextBox() {
        this.inputButton.click().should('have.attr', 'disabled', 'disabled'); // Click enable and check button is disabled
    }

    // Asserts that the text box is enabled and allows typing
    checkTextBoxEnabledAndWriteText() {
        this.message.should('have.text', "It's enabled!"); // Message should say "It's enabled!"
        this.inputButton.should('have.text', 'Disable'); // Button should say "Disable"
        this.textInput.should('be.enabled').type('Test'); // Text input should be enabled and allow typing
    }

    // Clicks the button to disable the text box
    disableTextBox() {
        this.inputButton.click().should('have.attr', 'disabled', 'disabled'); // Click disable and check button is disabled
    }

    // Asserts that the text box is disabled and retains its value
    checkTextBoxDisabled() {
        this.message.should('have.text', "It's disabled!"); // Message should say "It's disabled!"
        this.inputButton.should('have.text', 'Enable'); // Button should say "Enable"
        this.textInput.should('be.disabled'); // Text input should be disabled
        this.textInput.should('have.value', 'Test'); // Text input should retain the value
    }

}