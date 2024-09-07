const { By } = require("selenium-webdriver");

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
}

module.exports = new ShippingAdressPage();