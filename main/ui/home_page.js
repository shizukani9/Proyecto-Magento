const { until, By } = require("selenium-webdriver");
const DriverFactory = require("../../core/ui/driverFactory");

class HomePage {
    yogaCollectionLink = By.css('span.action.more.button');
    pantsPromotionLink = By.css('a.block-promo.home-pants');
    performanceFabricsLink = By.css('a.block-promo.home-performance');
    ecoFriendlyCollectionLink = By.css('a.block-promo.home-eco');

    async waitForHomePageLoad() {
        await DriverFactory.myDriver.wait(until.urlIs("https://magento2-demo.magebit.com/"), configuration.browser.extendedTimeout);
    }
    
    async navigateToYogaCollection() {
        const yogaPageButton = await DriverFactory.myDriver.wait(until.elementLocated(this.yogaCollectionLink), configuration.browser.timeout);
        await DriverFactory.myDriver.wait(until.elementIsEnabled(yogaPageButton), configuration.browser.timeout);
        await yogaPageButton.click();
    }
}

module.exports = new HomePage();