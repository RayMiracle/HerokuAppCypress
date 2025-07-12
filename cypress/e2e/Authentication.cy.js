import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { SecureAreaPage } from "./pages/SecureAreaPage";

describe('Authentication tests', () => {
  beforeEach(() => {
    cy.openHomePage();

    const homePage = new HomePage();
    homePage.goToAuthenticationForm();

    const loginPage = new LoginPage();
    loginPage.checkLoginPage();
  })

  it('Shows error on invalid username', () => {
    const loginPage = new LoginPage();
    loginPage.login('test', 'SuperSecretPassword!');
    loginPage.checkLoginUsernameInvalid();
    loginPage.checkLoginPage();
  })

  it('Shows error on invalid password', () => {
    const loginPage = new LoginPage();
    loginPage.login('tomsmith', 'test');
    loginPage.checkLoginPasswordInvalid()
    loginPage.checkLoginPage();
  })

  it('Successfully logs in and logs out', () => {
    const loginPage = new LoginPage();
    loginPage.login('tomsmith', 'SuperSecretPassword!');

    const secureAreaPage = new SecureAreaPage();
    secureAreaPage.checkLoginSuccess();
    secureAreaPage.logout();

    loginPage.checkLoginPage();
    loginPage.checkLogoutSuccess();
  })
})