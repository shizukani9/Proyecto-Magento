const { By } = require("selenium-webdriver");

class CheckoutSucessPage {
    thankYouMessage = By.css('h1.page-title span.base[data-ui-id="page-title-wrapper"]');
    orderNumberLink = By.css('a.order-number[href^="https://magento2-demo.magebit.com/sales/order/view/order_id/"]');
    thankYouMessageElement = By.css('span[data-ui-id="page-title-wrapper"]');
}

module.exports = new CheckoutSucessPage();