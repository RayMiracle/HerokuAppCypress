// Import the Page Object Models for the tested pages
import { HomePage } from './pages/HomePage';
import { DropdownPage } from './pages/DropdownPage';

// Main test suite for dropdown-related scenarios
describe('Dropdown tests', () => {

  // Test: Verifies dropdown options and selection functionality
  it('Verifies dropdown options', () => {
    cy.openHomePage(); // Open the application's home page

    const homePage = new HomePage();
    homePage.goToDropdown(); // Navigate from home to the dropdown page

    const dropdownPage = new DropdownPage();
    dropdownPage.checkInitialDropdownPage(); // Assert that the dropdown page is displayed

    // Custom method to check dropdown options and selection (implementation in POM)
    dropdownPage.selectOptions();
  });
});