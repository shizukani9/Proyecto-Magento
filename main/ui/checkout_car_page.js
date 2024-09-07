const { By } = require("selenium-webdriver");

class CheckoutCarPage {
    priceElement = By.xpath('/html/body/div[2]/main/div[3]/div/div[2]/div[1]/div[2]/div/table/tbody/tr[3]/td/strong/span');
    subtotalPriceElement1 = By.xpath('/html/body/div[2]/main/div[3]/div/div[2]/form/div[1]/table/tbody/tr[1]/td[4]/span/span/span');
    subtotalPriceElement2 = By.xpath('/html/body/div[2]/main/div[3]/div/div[2]/div[1]/div[2]/div/table/tbody/tr[1]/td/span');
    cartQuantityInput = By.xpath('/html/body/div[2]/main/div[3]/div/div[2]/form/div[1]/table/tbody/tr[1]/td[3]/div/div/label/input');
    updateCartButton = By.css('button.action.update[name="update_cart_action"][title="Update Shopping Cart"]');
    removeItemButton = By.css('a.action-delete[title="Remove item"]');
    emptyCartMessage = By.css('div.cart-empty p:first-child');
}

module.exports = new CheckoutCarPage();