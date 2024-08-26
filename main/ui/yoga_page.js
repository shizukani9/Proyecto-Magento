const { By } = require("selenium-webdriver");

class YogaPage {
    listViewModeLink = By.css('a.modes-mode.mode-list');
    addToCartButton = By.css('button.action.tocart.primary');
    firstAddToCartButton  = By.xpath('(//button[@title="Add to Cart" and contains(@class, "tocart primary")])[1]');
    secondAddToCartButton = By.xpath('(//button[@title="Add to Cart" and contains(@class, "tocart primary")])[2]');
    addedToCartMessage = By.css('div[data-bind="html: $parent.prepareMessageForHtml(message.text)"]');
    myCartLink = By.css('a.action.showcart');
    
    rivalFieldMessengerLink = By.css('a[href="https://magento2-demo.magebit.com/rival-field-messenger.html"]');
    overnightDuffleLink = By.css('a[href="https://magento2-demo.magebit.com/overnight-duffle.html"]');
    pushupGripsLink = By.css('a[href="https://magento2-demo.magebit.com/go-get-r-pushup-grips.html"]');
    summitWatchLink = By.css('a[href="https://magento2-demo.magebit.com/summit-watch.html"]');
    cruiseDualAnalogWatchLink = By.css('a[href="https://magento2-demo.magebit.com/cruise-dual-analog-watch.html"]');

    alternateMyCartLink = By.xpath('/html/body/div[2]/header/div[2]/div[1]/a');
}

module.exports = new YogaPage();