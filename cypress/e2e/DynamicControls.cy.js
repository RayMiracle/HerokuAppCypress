import { HomePage } from "./pages/HomePage";
import { DynamicControlsPage } from "./pages/DynamicControlsPage";

describe('Dynamic Controls tests', () => {
  beforeEach(() => {
    cy.openHomePage()

    const homePage = new HomePage();
    homePage.goToDynamicControls();

    const dynamicControlsPage = new DynamicControlsPage();
    dynamicControlsPage.checkInitialDynamicControlsPage();
  })

  it('Removes and adds checkbox', () => {
    const dynamicControlsPage = new DynamicControlsPage();
    dynamicControlsPage.removeCheckbox();
    dynamicControlsPage.waitForLoadingGifToDisappear();
    dynamicControlsPage.checkCheckboxRemoved();
    dynamicControlsPage.addCheckbox();
    dynamicControlsPage.waitForLoadingGifToDisappear();
    dynamicControlsPage.checkCheckboxAdded();
  })

  it('Enables and Disables text box', () => {
    const dynamicControlsPage = new DynamicControlsPage();
    dynamicControlsPage.enableTextBox();
    dynamicControlsPage.waitForLoadingGifToDisappear();
    dynamicControlsPage.checkTextBoxEnabledAndWriteText();
    dynamicControlsPage.disableTextBox();
    dynamicControlsPage.waitForLoadingGifToDisappear();
    dynamicControlsPage.checkTextBoxDisabled();
  })
})