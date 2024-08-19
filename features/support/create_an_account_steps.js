const { Given, When, Then } = require("@cucumber/cucumber");
const DriverFactory = require("../../core/ui/driverFactory");
let chai = require('chai');
let expect = chai.expect;
const CreateAnAccountPage = require('../../main/ui/create_an_account_page');
const { until } = require('selenium-webdriver');

Given('I set the create account with:', async function (dataTable) {
    const firstNameInput = await DriverFactory.myDriver.wait(until.elementLocated(CreateAnAccountPage.firstNameInput));
    const lastNameInput = await DriverFactory.myDriver.wait(until.elementLocated(CreateAnAccountPage.lastNameInput));
    const emailInput = await DriverFactory.myDriver.wait(until.elementLocated(CreateAnAccountPage.emailInput));
    const passwordInput = await DriverFactory.myDriver.wait(until.elementLocated(CreateAnAccountPage.passwordInput));
    const confirmPasswordInput = await DriverFactory.myDriver.wait(until.elementLocated(CreateAnAccountPage.confirmPasswordInput));

    await firstNameInput.sendKeys(dataTable.rowsHash().firstName);
    await lastNameInput.sendKeys(dataTable.rowsHash().lastName);
    await emailInput.sendKeys(dataTable.rowsHash().email);
    await passwordInput.sendKeys(dataTable.rowsHash().password);
    await confirmPasswordInput.sendKeys(dataTable.rowsHash().confirmPassword);
});

When('I click on the Create an Account button', async function () {
    const createAccountButton = await DriverFactory.myDriver.wait(until.elementLocated(CreateAnAccountPage.createAccountButton));
    await createAccountButton.click();
});

Then('the account should be created successfully', async function () {
    expect(await DriverFactory.myDriver.getCurrentUrl()).to.equal('https://magento2-demo.magebit.com/customer/account/');
});