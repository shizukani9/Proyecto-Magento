const { Then } = require("@cucumber/cucumber");
const DriverFactory = require("../../core/ui/driverFactory");
let chai = require('chai');
let expect = chai.expect;
const CheckoutSucessPage = require('../../main/ui/checkout_sucess_page');
const ViewOrdenPage = require('../../main/ui/view_orden_page');
const configuration = require("../../configuration.json");
const { until } = require('selenium-webdriver');

Then('El usuario visualiza el numero unico de pedido', async function () {
    console.log("El usuario visualiza el numero unico de pedido");
    const orderNumberLink = await DriverFactory.myDriver.wait(until.elementLocated(CheckoutSucessPage.orderNumberLink),configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsVisible(orderNumberLink), configuration.browser.timeout);
    const isClickable = await DriverFactory.myDriver.wait(until.elementIsEnabled(orderNumberLink), configuration.browser.timeout);
    if (isClickable) {
        console.log("El enlace del número de pedido está habilitado y es clickeable.");
    } else {
        console.log("El enlace del número de pedido NO está habilitado.");
    }
});

Then('El usuario realiza clic en el numero unico de pedido', async function () {
    console.log("El usuario realiza clic en el numero unico de pedido");
    const orderNumberLink = await DriverFactory.myDriver.wait(until.elementLocated(CheckoutSucessPage.orderNumberLink),configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsVisible(orderNumberLink), configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsEnabled(orderNumberLink), configuration.browser.timeout);
    await orderNumberLink.click();
});

Then('El usuario visualiza detalles del pedido', async function () {
    console.log("El usuario visualiza detalles del pedido");
    const orderTitleElement = await DriverFactory.myDriver.wait(until.elementLocated(ViewOrdenPage.orderTitleElement),configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsVisible(orderTitleElement), configuration.browser.timeout);
    const isEnabled = await DriverFactory.myDriver.wait(until.elementIsEnabled(orderTitleElement), configuration.browser.timeout);
    if (isEnabled) {
        console.log("El elemento que contiene los detalles del pedido está visible y habilitado.");
    } else {
        console.log("El elemento que contiene los detalles del pedido NO está habilitado.");
    }
});

Then('El usuario ve un mensaje de agradecimiento de compra', async function () {
    console.log("El usuario ve un mensaje de agradecimiento de compra");
    const expectMessage = "Thank you for your purchase!";
    const thankYouMessageElement = await DriverFactory.myDriver.wait(
        until.elementLocated(CheckoutSucessPage.thankYouMessageElement),
        configuration.browser.timeout
    );

     const actualMessage = await thankYouMessageElement.getText();
     if (actualMessage.trim() === expectMessage) {
         console.log("El mensaje de agradecimiento es correcto.");
     } else {
         throw new Error(`El mensaje de agradecimiento no coincide. Se esperaba: "${expectMessage}", pero se obtuvo: "${actualMessage.trim()}"`);
     }
});
