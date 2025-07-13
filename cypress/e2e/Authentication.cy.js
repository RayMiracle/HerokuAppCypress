// Import Page Object Models for the tested pages
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { SecureAreaPage } from "./pages/SecureAreaPage";

// Main test suite for authentication-related scenarios
describe('Authentication tests', () => {

  // Runs before each test: navigates to the login page and verifies it loaded
  beforeEach(() => {
    cy.openHomePage(); // Custom Cypress command to open the application's home page

    const homePage = new HomePage();
    homePage.goToAuthenticationForm(); // Navigate from home to the authentication (login) form

    const loginPage = new LoginPage();
    loginPage.checkLoginPage(); // Assert that the login page is displayed
  });

  // Test: Should show an error when an invalid username is used
  it('Shows error on invalid username', () => {
    const loginPage = new LoginPage();
    loginPage.login('test', 'SuperSecretPassword!'); // Attempt login with invalid username
    loginPage.checkLoginUsernameInvalid(); // Assert that the correct error message is shown
    loginPage.checkLoginPage(); // Ensure the login page is still displayed
  });

  // Test: Should show an error when an invalid password is used
  it('Shows error on invalid password', () => {
    const loginPage = new LoginPage();
    loginPage.login('tomsmith', 'test'); // Attempt login with invalid password
    loginPage.checkLoginPasswordInvalid(); // Assert that the correct error message is shown
    loginPage.checkLoginPage(); // Ensure the login page is still displayed
  });

  // Test: Should successfully log in with valid credentials and then log out
  it('Successfully logs in and logs out', () => {
    const loginPage = new LoginPage();
    loginPage.login('tomsmith', 'SuperSecretPassword!'); // Login with valid credentials

    const secureAreaPage = new SecureAreaPage();
    secureAreaPage.checkLoginSuccess(); // Assert that login was successful
    secureAreaPage.logout(); // Log out from the secure area

    loginPage.checkLoginPage(); // Ensure the login page is displayed after logout
    loginPage.checkLogoutSuccess(); // Assert that the logout success message is shown
  });
});