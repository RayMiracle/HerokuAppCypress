// Import the Page Object Models for the tested pages
import { HomePage } from './pages/HomePage';
import { EntryAdPage } from './pages/EntryAddPage';

// Main test suite for modal window-related scenarios
describe('Modal Window tests', () => {

  // Test: Should open and close the modal window
  it('Opens and closes modal window', () => {
    cy.openHomePage(); // Open the application's home page

    const homePage = new HomePage();
    homePage.goToEntryAd(); // Navigate from home to the Entry Ad (modal) page

    const entryAdPage = new EntryAdPage();
    entryAdPage.checkInitialEntryAdPage(); // Assert that the modal window is displayed
    entryAdPage.closeModalWindow(); // Close the modal window and verify it is closed
  });
});