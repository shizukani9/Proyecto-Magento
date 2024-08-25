const { By } = require("selenium-webdriver");

class MyAccountCustomer {
    messageConfirm = By.css('div[data-bind="html: $parent.prepareMessageForHtml(message.text)"]');
    // Botón para cambiar de cuenta (toggle customer menu)
    customerMenuToggleButton = By.css('button.action.switch[data-action="customer-menu-toggle"]');

    // Enlace para cerrar sesión (Sign Out)
    signOutLink = By.css('a[href="https://magento2-demo.magebit.com/customer/account/logout/"]');
}

module.exports = new MyAccountCustomer();