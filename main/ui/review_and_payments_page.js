const { By } = require("selenium-webdriver");

class ReviewAndPaymentsPage {
    placeOrderButton = By.css('button.action.primary.checkout[title="Place Order"]');
}

module.exports = new ReviewAndPaymentsPage();