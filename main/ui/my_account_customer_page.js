const { By } = require("selenium-webdriver");

class MyAccountCustomer {
    messageConfirm = By.css('div[data-bind="html: $parent.prepareMessageForHtml(message.text)"]');
    // Botón para cambiar de cuenta (toggle customer menu)
    customerMenuToggleButton = By.css('button[data-action="customer-menu-toggle"]');

    // Enlace para cerrar sesión (Sign Out)
    signOutLink = By.xpath('/html/body/div[2]/header/div[1]/div/ul/li[2]/div/ul/li[4]/a');
}

module.exports = new MyAccountCustomer();