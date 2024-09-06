const { Given, When, Then } = require("@cucumber/cucumber");
const DriverFactory = require("../../core/ui/driverFactory");
let chai = require('chai');
let expect = chai.expect;
const axios = require('axios');
const YogaPage = require('../../main/ui/yoga_page');
const environment = require("../../environment.json");
const configuration = require("../../configuration.json");
const { until } = require('selenium-webdriver');

Given('I navigate to a product in the store', async function () {
    console.log("I navigate to a product in the store");
    await DriverFactory.myDriver.get("https://magento2-demo.magebit.com/collections/yoga-new.html?product_list_mode=list");
    await DriverFactory.myDriver.wait(until.urlIs("https://magento2-demo.magebit.com/collections/yoga-new.html?product_list_mode=list"), configuration.browser.timeout);
});

When('I click on Add to Cart', async function () {
    console.log("I click on Add to Cart");
    const firstAddToCartButton = await DriverFactory.myDriver.wait(until.elementLocated(YogaPage.firstAddToCartButton), configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsEnabled(firstAddToCartButton), configuration.browser.timeout);
    await firstAddToCartButton.click();
});

Then('the product is correctly added to my cart', async function () {
    console.log("the product is correctly added to my cart");
    const myCartLink = await DriverFactory.myDriver.wait(until.elementLocated(YogaPage.alternateMyCartLink), configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsEnabled(myCartLink), configuration.browser.timeout);
    await myCartLink.click();

});

  