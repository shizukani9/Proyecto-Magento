const { Given, When, Then } = require("@cucumber/cucumber");
const DriverFactory = require("../../core/ui/driverFactory");
let chai = require('chai');
let expect = chai.expect;
const YogaPage = require('../../main/ui/yoga_page');
const HomePage = require('../../main/ui/home_page');
const CheckoutCarPage = require('../../main/ui/checkout_car_page');
const ShippingAdressPage = require('../../main/ui/shipping_address_page');
const ReviewAndPaymentsPage = require('../../main/ui/review_and_payments_page');
const CheckoutSucessPage = require('../../main/ui/checkout_sucess_page');
const DataGenerator = require('../../utils/dataGenerator');
const environment = require("../../environment.json");
const CheckoutPaymentPage = require('../../main/ui/checkout_payment_page');
const configuration = require("../../configuration.json");
const { until, By, Select } = require('selenium-webdriver');

Then('El usuario visualiza un resumen detallado del pedido', async function () {
    console.log("El usuario visualiza un resumen detallado del pedido");
    const expectedUrl = "https://magento2-demo.magebit.com/checkout/#payment";
    await DriverFactory.myDriver.wait(until.urlIs(expectedUrl),configuration.browser.extendedTimeout);
    const currentUrl = await DriverFactory.myDriver.getCurrentUrl();
    expect(currentUrl).to.equal(expectedUrl, `La URL actual (${currentUrl}) no coincide con la esperada (${expectedUrl})`);
});

Then('El usuario visualiza el metodo de envio valido', async function () {
    console.log("El usuario visualiza el metodo de envio valido");
    const expectedUrl = "https://magento2-demo.magebit.com/checkout/#payment";
    await DriverFactory.myDriver.wait(until.urlIs(expectedUrl),configuration.browser.extendedTimeout);
    const currentUrl = await DriverFactory.myDriver.getCurrentUrl();
    expect(currentUrl).to.equal(expectedUrl, `La URL actual (${currentUrl}) no coincide con la esperada (${expectedUrl})`);
});

Then('El usuario ingresa el código de descuento en el campo Código de descuento en payment', async function () {
    console.log("El usuario ingresa el código de descuento en el campo Código de descuento en payment");
    const couponCode = environment.demo.website.couponCode;

    const discountCodeTitle = await DriverFactory.myDriver.wait(until.elementLocated(CheckoutPaymentPage.discountToggleElement), configuration.browser.timeout);
    await DriverFactory.myDriver.executeScript("arguments[0].scrollIntoView(true);", discountCodeTitle);
    await DriverFactory.myDriver.wait(until.elementIsVisible(discountCodeTitle), configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsEnabled(discountCodeTitle), configuration.browser.timeout);
    await DriverFactory.myDriver.executeScript("arguments[0].click();", discountCodeTitle);

    const couponCodeInput = await DriverFactory.myDriver.wait(until.elementLocated(CheckoutPaymentPage.discountCodeInput), configuration.browser.timeout);
    await DriverFactory.myDriver.executeScript("arguments[0].scrollIntoView(true);", couponCodeInput);
    await DriverFactory.myDriver.wait(until.elementIsVisible(couponCodeInput), configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsEnabled(couponCodeInput), configuration.browser.timeout);
    await couponCodeInput.sendKeys(couponCode);
});

Then('El usuario hace clic en Aplicar el descuento', async function () {
    console.log("El usuario hace clic en Aplicar el descuento");
    await DriverFactory.myDriver.sleep(2000); 
    await DriverFactory.myDriver.wait(until.urlIs("https://magento2-demo.magebit.com/checkout/#payment"), configuration.browser.extendedTimeout);

    const applyDiscountButton = await DriverFactory.myDriver.wait(until.elementLocated(CheckoutPaymentPage.applyDiscountButton), configuration.browser.timeout);
    await DriverFactory.myDriver.executeScript("arguments[0].scrollIntoView(true);", applyDiscountButton);
    await DriverFactory.myDriver.wait(until.elementIsVisible(applyDiscountButton), configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsEnabled(applyDiscountButton), configuration.browser.timeout);
    await applyDiscountButton.click();
    console.log("El usuario hazi clic en Aplicar el descuento");
});

Then('El usuario ingresa el código no válido de descuento en el campo Código de descuento en payment', async function () {
    console.log("El usuario ingresa el código no válido de descuento en el campo Código de descuento en payment");
    const couponCode = environment.demo.website.incorrectCouponCode;
    await DriverFactory.myDriver.sleep(2000); 
    const discountCodeTitle = await DriverFactory.myDriver.wait(until.elementLocated(CheckoutPaymentPage.discountToggleElement), configuration.browser.timeout);
    await DriverFactory.myDriver.executeScript("arguments[0].scrollIntoView(true);", discountCodeTitle);
    await DriverFactory.myDriver.wait(until.elementIsVisible(discountCodeTitle), configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsEnabled(discountCodeTitle), configuration.browser.timeout);
    await DriverFactory.myDriver.executeScript("arguments[0].click();", discountCodeTitle);

    const couponCodeInput = await DriverFactory.myDriver.wait(until.elementLocated(CheckoutPaymentPage.discountCodeInput), configuration.browser.timeout);
    await DriverFactory.myDriver.executeScript("arguments[0].scrollIntoView(true);", couponCodeInput);
    await DriverFactory.myDriver.wait(until.elementIsVisible(couponCodeInput), configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsEnabled(couponCodeInput), configuration.browser.timeout);
    await couponCodeInput.sendKeys(couponCode);
});

Then('El usuario ve un mensaje de error de código de descuento en payment', async function () {
    console.log("El usuario ve un mensaje de error de código de descuento en payment");
    await DriverFactory.myDriver.sleep(2000); 

    const errorMessageElement = await DriverFactory.myDriver.wait(until.elementLocated(CheckoutPaymentPage.errorMessageCoupon), configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsVisible(errorMessageElement), configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsEnabled(errorMessageElement), configuration.browser.timeout);

    const couponCode = environment.demo.website.incorrectCouponCode;
    const expectedMessage = `The coupon code "${couponCode}" is not valid.`;
    expect(errorMessage.trim()).to.equal(expectedMessage, `El mensaje obtenido fue: "${errorMessage}", pero se esperaba: "${expectedMessage}".`);
});