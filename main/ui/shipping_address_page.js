const { By, Select } = require("selenium-webdriver");
const DriverFactory = require("../../core/ui/driverFactory");
const configuration = require("../../configuration.json");

class ShippingAdressPage {
    firstNameInput = By.css('input.input-text[name="firstname"][aria-required="true"][aria-invalid="false"]');
    lastNameInput = By.css('input.input-text[name="lastname"][aria-required="true"][aria-invalid="false"]');
    companyInput = By.css('input.input-text[name="company"][aria-invalid="false"]');
    streetAddressInput = By.css('input.input-text[name="street[0]"][aria-required="true"][aria-invalid="false"]');
    countrySelect = By.css('select.select[name="country_id"][aria-required="true"][aria-invalid="false"]');
    stateSelect = By.css('select[name="region_id"]');    
    cityInput = By.css('input.input-text[name="city"][aria-required="true"]');
    postcodeInput = By.css('input.input-text[name="postcode"][aria-required="true"][aria-invalid="false"]');
    telephoneInput = By.css('input.input-text[name="telephone"][aria-required="true"][aria-invalid="false"]');
    shippingMethodRadio = By.css('input[type="radio"][value="flatrate_flatrate"]');
    shippingMethodTableRateRadio = By.css('input[type="radio"][value="tablerate_bestway"]');
    nextButton = By.css('button[data-role="opc-continue"]');

    async enterFirstName(firstName) {
        const firstNameInput = await DriverFactory.myDriver.wait(until.elementLocated(this.firstNameInput), configuration.browser.timeout);
        await this.scrollAndInput(firstNameInput, firstName);
    }

    async enterLastName(lastName) {
        const lastNameInput = await DriverFactory.myDriver.wait(until.elementLocated(this.lastNameInput), configuration.browser.timeout);
        await this.scrollAndInput(lastNameInput, lastName);
    }

    async enterCompany(company) {
        const companyInput = await DriverFactory.myDriver.wait(until.elementLocated(this.companyInput), configuration.browser.timeout);
        await this.scrollAndInput(companyInput, company);
    }

    async enterStreetAddress(streetAddress) {
        const streetAddressInput = await DriverFactory.myDriver.wait(until.elementLocated(this.streetAddressInput), configuration.browser.timeout);
        await this.scrollAndInput(streetAddressInput, streetAddress);
    }

    async selectState(stateValue) {
        const stateSelect = await DriverFactory.myDriver.wait(until.elementLocated(this.stateSelect), configuration.browser.timeout);
        await this.scrollAndSelect(stateSelect, stateValue);
    }

    async enterCity(city) {
        const cityInput = await DriverFactory.myDriver.wait(until.elementLocated(this.cityInput), configuration.browser.timeout);
        await this.scrollAndInput(cityInput, city);
    }

    async enterPostcode(postcode) {
        const postcodeInput = await DriverFactory.myDriver.wait(until.elementLocated(this.postcodeInput), configuration.browser.timeout);
        await this.scrollAndInput(postcodeInput, postcode);
    }

    async enterTelephone(phoneNumber) {
        const telephoneInput = await DriverFactory.myDriver.wait(until.elementLocated(this.telephoneInput), configuration.browser.timeout);
        await this.scrollAndInput(telephoneInput, phoneNumber);
    }

    async selectShippingMethod() {
        const shippingMethodRadio = await DriverFactory.myDriver.wait(until.elementLocated(this.shippingMethodRadio), configuration.browser.timeout);
        await DriverFactory.myDriver.executeScript("arguments[0].scrollIntoView(true);", shippingMethodRadio);
        await DriverFactory.myDriver.wait(until.elementIsVisible(shippingMethodRadio), configuration.browser.timeout);
        await DriverFactory.myDriver.wait(until.elementIsEnabled(shippingMethodRadio), configuration.browser.timeout);
        await shippingMethodRadio.click();
    }

    // Métodos auxiliares para scroll y entrada de datos
    async scrollAndInput(element, value) {
        const driver = DriverFactory.myDriver;
        await driver.executeScript("arguments[0].scrollIntoView(true);", element);
        await driver.wait(until.elementIsVisible(element), configuration.browser.timeout);
        await driver.wait(until.elementIsEnabled(element), configuration.browser.timeout);
        await element.clear();
        await element.sendKeys(value);
    }

    async scrollAndSelect(element, value) {
        const driver = DriverFactory.myDriver;
        await driver.executeScript("arguments[0].scrollIntoView(true);", element);
        await driver.wait(until.elementIsVisible(element), configuration.browser.timeout);
        await driver.wait(until.elementIsEnabled(element), configuration.browser.timeout);
        const select = new Select(element);
        await select.selectByValue(value);
    }
}

module.exports = new ShippingAdressPage();