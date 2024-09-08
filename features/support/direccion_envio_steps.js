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
const configuration = require("../../configuration.json");
const { until, By, Select } = require('selenium-webdriver');

Then('El usuario ingresa el nombre con solo 1 carácter', async function () {
    console.log("El usuario ingresa el nombre con solo 1 carácter");

});

Then('La dirección debe guardarse correctamente sin errores', async function () {
    console.log("La dirección debe guardarse correctamente sin errores");
    
});

Then('El usuario ingresa el nombre con 255 caracteres', async function () {
    console.log("El usuario ingresa el nombre con 255 caracteres");
    
});

