const { By } = require("selenium-webdriver");

class HomePage {
    yogaCollectionLink = By.css('a.block-promo.home-main');
    pantsPromotionLink = By.css('a.block-promo.home-pants');
    performanceFabricsLink = By.css('a.block-promo.home-performance');
    ecoFriendlyCollectionLink = By.css('a.block-promo.home-eco');
}

module.exports = new HomePage();