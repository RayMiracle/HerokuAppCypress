export class DynamicControlsPage {

    get dynamicControlsHeader() {
        return cy.contains('h4', 'Dynamic Controls');
    }

    get checkboxInput() {
        return cy.get('#checkbox input[type="checkbox"]')
    }

    get checkboxContainer() {
        return cy.get('#checkbox');
    }

    get checkboxButton() {
        return cy.get('#checkbox-example > button');
    }

    get textInput() {
        return cy.get('#input-example > input');
    }

    get inputButton() {
        return cy.get('#input-example > button');
    }

    get loadingContainer() {
        return cy.get('#loading');
    }

    get loadingImage() {
        return cy.get('#loading img');
    }

    get message() {
        return cy.get('#message');
    }

    checkInitialDynamicControlsPage() {
        cy.url().should('contain', '/dynamic_controls');
        this.dynamicControlsHeader.should('be.visible');
        this.checkboxInput.should('not.be.checked');
        this.checkboxContainer.should('contain.text', 'A checkbox');
        this.checkboxButton.should('have.text', 'Remove');
        this.textInput.should('be.disabled').and('have.attr', 'type', 'text');
        this.inputButton.should('have.text', 'Enable');
    }

    removeCheckbox() {
        this.checkboxInput.check().and('be.checked');
        this.checkboxButton.click().should('have.attr', 'disabled', 'disabled');
    }

    waitForLoadingGifToDisappear() {
        this.loadingContainer.should('have.text', 'Wait for it... ').and('be.visible');
        this.loadingImage.should('have.attr', 'src', '/img/ajax-loader.gif').and('be.visible');
        this.loadingContainer.should('not.be.visible', { timeout: 5000 });
    }

    checkCheckboxRemoved() {
        this.message.should('have.text', "It's gone!");
        this.checkboxContainer.should('not.exist');
        this.checkboxButton.should('have.text', 'Add');
    }

    addCheckbox() {
        this.checkboxButton.click().should('have.attr', 'disabled', 'disabled');
    }

    checkCheckboxAdded() {
        this.message.should('contain.text', "It's back!");
        this.checkboxContainer.should('be.visible').and('not.to.be.checked').parent().and('contain.text', 'A checkbox')
        this.checkboxButton.should('have.text', 'Remove');
    }

    enableTextBox() {
        this.inputButton.click().should('have.attr', 'disabled', 'disabled');
    }

    checkTextBoxEnabledAndWriteText() {
        this.message.should('have.text', "It's enabled!");
        this.inputButton.should('have.text', 'Disable');
        this.textInput.should('be.enabled').type('Test');
    }

    disableTextBox() {
        this.inputButton.click().should('have.attr', 'disabled', 'disabled');
    }

    checkTextBoxDisabled() {
        this.message.should('have.text', "It's disabled!");
        this.inputButton.should('have.text', 'Enable');
        this.textInput.should('be.disabled');
        this.textInput.should('have.value', 'Test');
    }

}