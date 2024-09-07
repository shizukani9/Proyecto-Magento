const { By } = require("selenium-webdriver");

class YogaPage {
    listViewModeLink = By.xpath('/html/body/div[2]/main/div[4]/div[1]/div[2]/div[1]/a');
    firstAddToCartButton  = By.xpath('/html/body/div[2]/main/div[4]/div[1]/div[3]/ol/li[1]/div/div/div[3]/div[1]/div[1]/form/button');
    secondAddToCartButton = By.xpath('/html/body/div[2]/main/div[4]/div[1]/div[3]/ol/li[2]/div/div/div[3]/div[1]/div[1]/form/button');
    
    rivalFieldMessengerLink = By.css('a[href="https://magento2-demo.magebit.com/rival-field-messenger.html"]');
    overnightDuffleLink = By.css('a[href="https://magento2-demo.magebit.com/overnight-duffle.html"]');
    pushupGripsLink = By.css('a[href="https://magento2-demo.magebit.com/go-get-r-pushup-grips.html"]');
    summitWatchLink = By.css('a[href="https://magento2-demo.magebit.com/summit-watch.html"]');
    cruiseDualAnalogWatchLink = By.css('a[href="https://magento2-demo.magebit.com/cruise-dual-analog-watch.html"]');

    alternateMyCartLink = By.xpath('/html/body/div[2]/header/div[2]/div[1]/a');
    messageConfirm = By.css('div[data-bind="html: $parent.prepareMessageForHtml(message.text)"]');
    viewAndEditCartButton = By.css('span[data-bind="i18n: \'View and Edit Cart\'"]');
}

module.exports = new YogaPage();