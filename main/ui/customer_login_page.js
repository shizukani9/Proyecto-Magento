const { By } = require("selenium-webdriver");

class CustomerloginPage {
    emailInput = By.id('email');
    passwordInput = By.id('pass');
    signInButton = By.id('send2');
}

module.exports = new CustomerloginPage();