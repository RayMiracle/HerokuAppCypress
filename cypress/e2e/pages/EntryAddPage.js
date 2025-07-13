/// <reference types="cypress" />

// Page Object Model for the Entry Ad (modal window) page
export class EntryAdPage {

    // Returns the header element for the Entry Ad page
    get entryAdHeader() {
        return cy.contains('h3', 'Entry Ad');
    }

    // Returns the modal window element
    get modalWindow() {
        return cy.get('.modal');
    }

    // Returns the title element inside the modal window
    get modalTitle() {
        return this.modalWindow.find('.modal-title > h3');
    }

    // Returns the close button element inside the modal window
    get modalCloseButton() {
        return this.modalWindow.find('.modal-footer > p');
    }

    // Checks that the Entry Ad page and modal window are loaded and visible
    checkInitialEntryAdPage() {
        cy.url().should('include', '/entry_ad'); // Verify URL
        this.entryAdHeader.should('be.visible'); // Entry Ad header should be visible
        this.modalWindow.should('be.visible'); // Modal window should be visible
        this.modalTitle.should('have.text', 'This is a modal window'); // Modal title text
        this.modalCloseButton.should('have.text', 'Close'); // Close button text
    }

    // Closes the modal window and verifies it is no longer visible
    closeModalWindow() {
        this.modalCloseButton.click(); // Click the close button
        this.modalWindow.should('not.be.visible'); // Modal window should not be visible
    }

}