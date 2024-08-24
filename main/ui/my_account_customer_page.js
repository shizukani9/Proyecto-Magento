const { By } = require("selenium-webdriver");

class MyAccountCustomer {
    messageConfirm = By.css('div[data-bind="html: $parent.prepareMessageForHtml(message.text)"]');
}

module.exports = new MyAccountCustomer();