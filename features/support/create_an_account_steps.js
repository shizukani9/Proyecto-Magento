const { Given, When, Then } = require("@cucumber/cucumber");
const DriverFactory = require("../../core/ui/driverFactory");
let chai = require('chai');
let expect = chai.expect;
const axios = require('axios');
const CreateAnAccountPage = require('../../main/ui/create_an_account_page');
const environment = require("../../environment.json");
const configuration = require("../../configuration.json");
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

Then('Delete customer', async function (dataTable) {
    console.log("Delete customer");

    // Obtener el email del cliente desde la tabla de datos
    const email = dataTable.rowsHash().email;

    // Endpoint para buscar al cliente por email
    const searchUrl = `https://magento2-demo.magebit.com/rest/default/V1/customers/search?searchCriteria[filterGroups][0][filters][0][field]=email&searchCriteria[filterGroups][0][filters][0][value]=${email}`;
    
    

    const searchResponse = await axios.get(searchUrl, {
        headers: {
          Authorization: "Bearer psz0zk8oqeetwpgt5i0x91a1jprqfgch"
        }
      });
    const customers = searchResponse.data.items;
    
    console.log(customers[0].email);
    console.log(customers[0].id);
    const idcustomer = customers[0].id;
    // Endpoint para eliminar al cliente los apostrofes son para ingresar valores a una cadena
    const deletecustomer = `https://magento2-demo.magebit.com/rest/default/V1/customers/${idcustomer}`;
    console.log(deletecustomer);
    
    //axios.delete ELIMINA EL CLIENTE
    const deleteResponse = await axios.delete( deletecustomer, {
        headers: {
          Authorization: "Bearer psz0zk8oqeetwpgt5i0x91a1jprqfgch"
        }
    });
    console.log(deleteResponse);
});