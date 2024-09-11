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

Then('El usuario visualiza un resumen detallado del pedido', async function () {
    console.log("El usuario visualiza un resumen detallado del pedido");
    
});

Then('El usuario selecciona el metodo de envio valido', async function () {
    console.log("El usuario selecciona el metodo de envio valido");
    
});