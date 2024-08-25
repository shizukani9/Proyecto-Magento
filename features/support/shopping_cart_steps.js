const { Given, When, Then } = require("@cucumber/cucumber");
const DriverFactory = require("../../core/ui/driverFactory");
let chai = require('chai');
let expect = chai.expect;
const axios = require('axios');
const CreateAnAccountPage = require('../../main/ui/create_an_account_page');
const environment = require("../../environment.json");
const configuration = require("../../configuration.json");
const { until } = require('selenium-webdriver');

Given('I navigate to a product in the store', async function () {
    console.log("I navigate to a product in the store");
});

When('I click on Add to Cart', async function () {
    console.log("I click on Add to Cart");
});

Then('the product is correctly added to my cart', async function () {
    console.log("the product is correctly added to my cart");
});

  