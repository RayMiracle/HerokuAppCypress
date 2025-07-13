// Import the Page Object Models for the tested pages
import { HomePage } from "./pages/HomePage";
import { DynamicControlsPage } from "./pages/DynamicControlsPage";

// Main test suite for dynamic controls-related scenarios
describe('Dynamic Controls tests', () => {

  // Runs before each test: navigates to the dynamic controls page and verifies it loaded
  beforeEach(() => {
    cy.openHomePage(); // Open the application's home page

    const homePage = new HomePage();
    homePage.goToDynamicControls(); // Navigate from home to the dynamic controls page

    const dynamicControlsPage = new DynamicControlsPage();
    dynamicControlsPage.checkInitialDynamicControlsPage(); // Assert that the dynamic controls page is displayed
  });

  // Test: Should remove and add the checkbox, verifying each step
  it('Removes and adds checkbox', () => {
    const dynamicControlsPage = new DynamicControlsPage();
    dynamicControlsPage.removeCheckbox(); // Click to remove the checkbox
    dynamicControlsPage.waitForLoadingGifToDisappear(); // Wait for loading animation to disappear
    dynamicControlsPage.checkCheckboxRemoved(); // Assert checkbox is removed
    dynamicControlsPage.addCheckbox(); // Click to add the checkbox back
    dynamicControlsPage.waitForLoadingGifToDisappear(); // Wait for loading animation to disappear
    dynamicControlsPage.checkCheckboxAdded(); // Assert checkbox is added
  });

  // Test: Should enable and disable the text box, verifying each step
  it('Enables and Disables text box', () => {
    const dynamicControlsPage = new DynamicControlsPage();
    dynamicControlsPage.enableTextBox(); // Click to enable the text box
    dynamicControlsPage.waitForLoadingGifToDisappear(); // Wait for loading animation to disappear
    dynamicControlsPage.checkTextBoxEnabledAndWriteText(); // Assert text box is enabled and write text
    dynamicControlsPage.disableTextBox(); // Click to disable the text box
    dynamicControlsPage.waitForLoadingGifToDisappear(); // Wait for loading animation to disappear
    dynamicControlsPage.checkTextBoxDisabled(); // Assert text box is disabled
  });
});