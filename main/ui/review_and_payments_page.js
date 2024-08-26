const { By } = require("selenium-webdriver");

class ReviewAndPaymentsPage {
    placeOrderButton = By.css('button.action.primary.checkout');
    discountCodeInput = By.id('discount-code');
    applyDiscountButton = By.css('button.action.action-apply');
    editButtonShipToButton = By.css('button.action.action-edit');
    editShippingMethodButton = By.css('button.action.action-edit[data-bind="click: backToShippingMethod"]');
    toggleDiscountCodeSection = By.id('block-discount-heading');
}

module.exports = new ReviewAndPaymentsPage();