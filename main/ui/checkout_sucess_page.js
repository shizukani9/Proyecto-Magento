const { By } = require("selenium-webdriver");

class CheckoutSucessPage {
    thankYouMessage = By.css('h1.page-title span.base[data-ui-id="page-title-wrapper"]');
}

module.exports = new CheckoutSucessPage();