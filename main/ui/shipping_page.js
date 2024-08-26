const { By } = require("selenium-webdriver");

class ShippingPage {
    firstNameInput = By.id('YKAMWTN');
    lastNameInput = By.id('PTTV2L8');
    companyInput = By.id('SGPIOAH');
    streetInput = By.id('M0BH57P');
    countrySelect = By.id('HJYKB46');
    regionSelect = By.id('M7KJ0TG');
    cityInput = By.id('IVAT7IJ');
    postcodeInput = By.id('HPVWYY7');
    telephoneInput = By.id('V1OR5Q7');
    shippingMethodRadio = By.css('input[type="radio"][value="flatrate_flatrate"]');
    shippingMethodTableRateRadio = By.css('input[type="radio"][value="tablerate_bestway"]');
    nextButton = By.css('button[data-role="opc-continue"]');
    link = https://magento2-demo.magebit.com/checkout/#shipping ;
}

module.exports = new ShippingPage();