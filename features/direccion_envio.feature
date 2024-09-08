@ui
Feature: Direccion de envio 

@createAccount @deleteAccount @funcional_Positivo @GC-1 @Iteracion1 @pass
Scenario: DE-1: Verificar que cuando se ingresa un Nombre (First Name) con 1 carácter entonces la dirección se guarda correctamente.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa el nombre con solo 1 carácter
        And El usuario guarda la dirección
        And La dirección debe guardarse correctamente sin errores