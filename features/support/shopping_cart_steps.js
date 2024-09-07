const { Given, When, Then } = require("@cucumber/cucumber");
const DriverFactory = require("../../core/ui/driverFactory");
let chai = require('chai');
let expect = chai.expect;
const axios = require('axios');
const YogaPage = require('../../main/ui/yoga_page');
const HomePage = require('../../main/ui/home_page');
const CheckoutCarPage = require('../../main/ui/checkout_car_page');
const environment = require("../../environment.json");
const configuration = require("../../configuration.json");
const { until, By } = require('selenium-webdriver');

Given('El usuario está en la página de inicio', async function () {
    console.log("El usuario está en la página de inicio");
    const expectedUrl = "https://magento2-demo.magebit.com/";
    await DriverFactory.myDriver.get(expectedUrl);
    const currentUrl = await DriverFactory.myDriver.getCurrentUrl();
    expect(currentUrl).to.equal(expectedUrl, currentUrl);
});

Given('El usuario navega a página de Yoga Collection', async function () {
    console.log("El usuario navega a página de Yoga Collection");
    const YogaPageButton = await DriverFactory.myDriver.wait(until.elementLocated(HomePage.yogaCollectionLink), configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsEnabled(YogaPageButton), configuration.browser.timeout);
    await YogaPageButton.click();
});

When('El usuario añade un producto al carrito', async function () {
    console.log("El usuario añade un producto al carrito");
    const listViewModeLinkButton = await DriverFactory.myDriver.wait(until.elementLocated(YogaPage.listViewModeLink), configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsEnabled(listViewModeLinkButton), configuration.browser.timeout);
    await listViewModeLinkButton.click();
    const firstAddToCartButton = await DriverFactory.myDriver.wait(until.elementLocated(YogaPage.firstAddToCartButton), configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsEnabled(firstAddToCartButton), configuration.browser.timeout);
    await firstAddToCartButton.click();
});

Then('La cantidad de productos en el carrito debe actualizarse', async function () {
    console.log("La cantidad de productos en el carrito debe actualizarse");
    await DriverFactory.myDriver.get("https://magento2-demo.magebit.com/checkout/cart/");
    await DriverFactory.myDriver.wait(until.urlIs("https://magento2-demo.magebit.com/checkout/cart/"), configuration.browser.timeout);

    const expectedUrl = "https://magento2-demo.magebit.com/checkout/cart/";
    await DriverFactory.myDriver.get(expectedUrl);
    const currentUrl = await DriverFactory.myDriver.getCurrentUrl();
    expect(currentUrl).to.equal(expectedUrl, currentUrl);
});

Then('El usuario modifica la cantidad de uno de los productos', async function () {
    console.log("El usuario modifica la cantidad de uno de los productos");
    // Hacer un pequeño scroll hacia abajo
    await DriverFactory.myDriver.executeScript("window.scrollBy(0, 200);");
    // Localizar el input de la cantidad
    const cartQuantityInput = await DriverFactory.myDriver.wait(until.elementLocated(CheckoutCarPage.cartQuantityInput),configuration.browser.extendedTimeout);
    await DriverFactory.myDriver.wait(until.elementIsVisible(cartQuantityInput), configuration.browser.extendedTimeout);
    await DriverFactory.myDriver.wait(until.elementIsEnabled(cartQuantityInput), configuration.browser.extendedTimeout);

    // Vaciar el campo de cantidad
    //await cartQuantityInput.clear();

    // Generar un número aleatorio entre 1 y 10
    const randomQuantity = Math.floor(Math.random() * 9) + 1;

    // Ingresar el número aleatorio en el campo de cantidad
    await cartQuantityInput.sendKeys(randomQuantity.toString());

    // Esperar la actualización de la página o el carrito
    await DriverFactory.myDriver.wait(until.urlIs("https://magento2-demo.magebit.com/checkout/cart/"), configuration.browser.extendedTimeout);
    
    const updateCartButton = await DriverFactory.myDriver.wait(until.elementLocated(CheckoutCarPage.updateCartButton),configuration.browser.extendedTimeout);
    await DriverFactory.myDriver.wait(until.elementIsVisible(updateCartButton), configuration.browser.extendedTimeout);
    await DriverFactory.myDriver.wait(until.elementIsEnabled(updateCartButton), configuration.browser.extendedTimeout);
    await updateCartButton.click();

    await DriverFactory.myDriver.wait(until.stalenessOf(updateCartButton), configuration.browser.extendedTimeout); // Espera a que el botón de actualización ya no esté en el DOM
    await DriverFactory.myDriver.wait(until.urlIs("https://magento2-demo.magebit.com/checkout/cart/"), configuration.browser.extendedTimeout); // Asegurarse que la URL no cambió o ya esté cargada
});

Then('El precio total del carrito debe actualizarse correctamente', async function () {
    console.log("El precio total del carrito debe actualizarse correctamente");
    await DriverFactory.myDriver.sleep(5000); 
    // Verificar visibilidad, habilitación y localización del subtotal
    const subtotalPriceElement1 = await DriverFactory.myDriver.wait(until.elementLocated(CheckoutCarPage.subtotalPriceElement1),configuration.browser.extendedTimeout);
    await DriverFactory.myDriver.wait(until.elementIsVisible(subtotalPriceElement1), configuration.browser.extendedTimeout);
    await DriverFactory.myDriver.wait(until.elementIsEnabled(subtotalPriceElement1), configuration.browser.extendedTimeout);
    const subtotalText1 = await subtotalPriceElement1.getText();

    const subtotalPriceElement2 = await DriverFactory.myDriver.wait(until.elementLocated(CheckoutCarPage.subtotalPriceElement2),configuration.browser.extendedTimeout);
    await DriverFactory.myDriver.wait(until.elementIsVisible(subtotalPriceElement2), configuration.browser.extendedTimeout);
    await DriverFactory.myDriver.wait(until.elementIsEnabled(subtotalPriceElement2), configuration.browser.extendedTimeout);
    const subtotalText2 = await subtotalPriceElement2.getText();

    // Convertir los subtotales a números eliminando el símbolo de dólar
    const subtotal1 = parseFloat(subtotalText1.replace('$', '').trim());
    const subtotal2 = parseFloat(subtotalText2.replace('$', '').trim());

    // Comparar los subtotales
    expect(subtotal1).to.equal(subtotal2, `El subtotal 1 (${subtotal1}) no coincide con el subtotal 2 (${subtotal2})`);
});