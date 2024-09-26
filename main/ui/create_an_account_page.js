const { By } = require("selenium-webdriver");

class CreateAnAccountPage {
    firstNameInput = By.id('firstname');
    lastNameInput = By.id('lastname');
    emailInput = By.id('email_address');
    passwordInput = By.id('password');
    confirmPasswordInput = By.id('password-confirmation');
    createAccountButton = By.css('button.action.submit.primary');
    pageTitle = By.css('span.base[data-ui-id="page-title-wrapper"]');
}

module.exports = new CreateAnAccountPage();