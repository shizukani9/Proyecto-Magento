const { until, By, Select } = require("selenium-webdriver");
const DriverFactory = require("../../core/ui/driverFactory");
const configuration = require("../../configuration.json");

class CheckoutPaymentPage {
    discountToggleElement = By.css('span#block-discount-heading.action.action-toggle');
    discountCodeInput = By.css('input[name="discount_code"]');
    applyDiscountButton = By.css('button.action.action-apply');
}

module.exports = new CheckoutPaymentPage();