const { until, By, Select } = require("selenium-webdriver");
const DriverFactory = require("../../core/ui/driverFactory");
const configuration = require("../../configuration.json");

class CheckoutCarPage {
    priceElement = By.xpath('/html/body/div[2]/main/div[3]/div/div[2]/div[1]/div[2]/div/table/tbody/tr[3]/td/strong/span');
    subtotalPriceElement1 = By.xpath('/html/body/div[2]/main/div[3]/div/div[2]/form/div[1]/table/tbody/tr[1]/td[4]/span/span/span');
    subtotalPriceElement2 = By.xpath('/html/body/div[2]/main/div[3]/div/div[2]/div[1]/div[2]/div/table/tbody/tr[1]/td/span');
    cartQuantityInput = By.xpath('/html/body/div[2]/main/div[3]/div/div[2]/form/div[1]/table/tbody/tr[1]/td[3]/div/div/label/input');
    updateCartButton = By.css('button.action.update[name="update_cart_action"][title="Update Shopping Cart"]');
    removeItemButton = By.css('a.action-delete[title="Remove item"]');
    emptyCartMessage = By.css('div.cart-empty p:first-child');
    discountCodeTitle = By.css('div.title[data-role="title"][role="tab"][aria-expanded="false"] strong#block-discount-heading');
    couponCodeInput = By.css('input.input-text#coupon_code[name="coupon_code"]');
    applyDiscountButton = By.css('button.action.apply.primary[type="button"][value="Apply Discount"]');
    proceedToCheckoutButton = By.css('button.action.primary.checkout[type="button"][data-role="proceed-to-checkout"]');

    async waitForCartPageLoad() {
        await DriverFactory.myDriver.wait(until.urlIs("https://magento2-demo.magebit.com/checkout/cart/"), configuration.browser.extendedTimeout);
    }

    async getSubtotalText1() {
        const subtotalPriceElement1 = await DriverFactory.myDriver.wait(until.elementLocated(this.subtotalPriceElement1), configuration.browser.extendedTimeout);
        await DriverFactory.myDriver.executeScript("arguments[0].scrollIntoView(true);", subtotalPriceElement1);
        await DriverFactory.myDriver.wait(until.elementIsVisible(subtotalPriceElement1), configuration.browser.extendedTimeout);
        await DriverFactory.myDriver.wait(until.elementIsEnabled(subtotalPriceElement1), configuration.browser.extendedTimeout);
        return subtotalPriceElement1.getText();
    }

    async getSubtotalText2() {
        const subtotalPriceElement2 = await DriverFactory.myDriver.wait(until.elementLocated(this.subtotalPriceElement2), configuration.browser.extendedTimeout);
        await DriverFactory.myDriver.executeScript("arguments[0].scrollIntoView(true);", subtotalPriceElement2);
        await DriverFactory.myDriver.wait(until.elementIsVisible(subtotalPriceElement2), configuration.browser.extendedTimeout);
        await DriverFactory.myDriver.wait(until.elementIsEnabled(subtotalPriceElement2), configuration.browser.extendedTimeout);
        return subtotalPriceElement2.getText();
    }

    async scrollToAndEnterQuantity(randomQuantity) {
        const cartQuantityInput = await DriverFactory.myDriver.wait(until.elementLocated(this.cartQuantityInput), configuration.browser.extendedTimeout);
        await DriverFactory.myDriver.executeScript("arguments[0].scrollIntoView(true);", cartQuantityInput);
        await DriverFactory.myDriver.wait(until.elementIsVisible(cartQuantityInput), configuration.browser.extendedTimeout);
        await DriverFactory.myDriver.wait(until.elementIsEnabled(cartQuantityInput), configuration.browser.extendedTimeout);
        await cartQuantityInput.clear(); 
        await cartQuantityInput.sendKeys(randomQuantity.toString());
    }

    async clickUpdateCartButton() {
        const updateCartButton = await DriverFactory.myDriver.wait(until.elementLocated(this.updateCartButton), configuration.browser.extendedTimeout);
        await DriverFactory.myDriver.executeScript("arguments[0].scrollIntoView(true);", updateCartButton);
        await DriverFactory.myDriver.wait(until.elementIsVisible(updateCartButton), configuration.browser.extendedTimeout);
        await DriverFactory.myDriver.wait(until.elementIsEnabled(updateCartButton), configuration.browser.extendedTimeout);
        await updateCartButton.click();
        await DriverFactory.myDriver.wait(until.stalenessOf(updateCartButton), configuration.browser.extendedTimeout);
    }

    async scrollToRemoveItemButton() {
        const removeItemButton = await DriverFactory.myDriver.wait(until.elementLocated(this.removeItemButton), configuration.browser.extendedTimeout);
        await DriverFactory.myDriver.executeScript("arguments[0].scrollIntoView(true);", removeItemButton);
        await DriverFactory.myDriver.wait(until.elementIsVisible(removeItemButton), configuration.browser.extendedTimeout);
        await DriverFactory.myDriver.wait(until.elementIsEnabled(removeItemButton), configuration.browser.extendedTimeout);
        return removeItemButton;
    }

    async clickRemoveItemButton() {
        const removeItemButton = await this.scrollToRemoveItemButton();
        await removeItemButton.click();
        await DriverFactory.myDriver.wait(until.stalenessOf(removeItemButton), configuration.browser.extendedTimeout);
    }

    async getEmptyCartMessage() {
        const emptyCartMessage = await DriverFactory.myDriver.wait(until.elementLocated(this.emptyCartMessage), configuration.browser.timeout);
        await DriverFactory.myDriver.executeScript("arguments[0].scrollIntoView(true);", emptyCartMessage);
        await DriverFactory.myDriver.wait(until.elementIsVisible(emptyCartMessage), configuration.browser.timeout);
        await DriverFactory.myDriver.wait(until.elementIsEnabled(emptyCartMessage), configuration.browser.timeout);
        return emptyCartMessage.getText();
    }

    async verifyEmptyCartMessage(expectedMessage) {
        const messageText = await this.getEmptyCartMessage();
        if (messageText.trim() !== expectedMessage) {
            throw new Error(`El mensaje obtenido fue: "${messageText}", pero se esperaba: "${expectedMessage}".`);
        }
    }

    async clickDiscountCodeTitle() {
        const discountCodeTitle = await DriverFactory.myDriver.wait(until.elementLocated(this.discountCodeTitle), configuration.browser.timeout);
        await DriverFactory.myDriver.executeScript("arguments[0].scrollIntoView(true);", discountCodeTitle);
        await DriverFactory.myDriver.wait(until.elementIsVisible(discountCodeTitle), configuration.browser.timeout);
        await DriverFactory.myDriver.wait(until.elementIsEnabled(discountCodeTitle), configuration.browser.timeout);
        await discountCodeTitle.click();
    }

    async enterCouponCode(couponCode) {
        const couponCodeInput = await DriverFactory.myDriver.wait(until.elementLocated(this.couponCodeInput), configuration.browser.timeout);
        await DriverFactory.myDriver.executeScript("arguments[0].scrollIntoView(true);", couponCodeInput);
        await DriverFactory.myDriver.wait(until.elementIsVisible(couponCodeInput), configuration.browser.timeout);
        await DriverFactory.myDriver.wait(until.elementIsEnabled(couponCodeInput), configuration.browser.timeout);
        await couponCodeInput.sendKeys(couponCode);
    }

    async clickApplyDiscountButton() {
        const applyDiscountButton = await DriverFactory.myDriver.wait(until.elementLocated(this.applyDiscountButton), configuration.browser.timeout);
        await DriverFactory.myDriver.executeScript("arguments[0].scrollIntoView(true);", applyDiscountButton);
        await DriverFactory.myDriver.wait(until.elementIsVisible(applyDiscountButton), configuration.browser.timeout);
        await DriverFactory.myDriver.wait(until.elementIsEnabled(applyDiscountButton), configuration.browser.timeout);
        await applyDiscountButton.click();
    }

    async clickProceedToCheckoutButton() {
        const proceedToCheckoutButton = await DriverFactory.myDriver.wait(until.elementLocated(this.proceedToCheckoutButton), configuration.browser.timeout);
        await DriverFactory.myDriver.executeScript("arguments[0].scrollIntoView(true);", proceedToCheckoutButton);
        await DriverFactory.myDriver.wait(until.elementIsVisible(proceedToCheckoutButton), configuration.browser.timeout);
        await DriverFactory.myDriver.wait(until.elementIsEnabled(proceedToCheckoutButton), configuration.browser.timeout);
        await proceedToCheckoutButton.click();
    }

}

module.exports = new CheckoutCarPage();