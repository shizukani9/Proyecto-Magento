const { By } = require("selenium-webdriver");

class ViewOrdenPage {
    orderTitleElement = By.css('span[data-ui-id="page-title-wrapper"]');
}

module.exports = new ViewOrdenPage();