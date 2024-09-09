@ui
Feature: Direccion de envio 

@createAccount @deleteAccount @funcional_Positivo @DE-1 @Iteracion2 @pass
Scenario: DE-1: Verificar que cuando se ingresa un Nombre (First Name) con 1 carácter entonces la dirección se guarda correctamente.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa el nombre con solo 1 carácter
        And El usuario guarda la dirección
        And La dirección debe guardarse correctamente sin errores

@createAccount @deleteAccount @funcional_Positivo @DE-2 @Iteracion2 @pass
Scenario: DE-2: Verificar que cuando se ingresa un Nombre (First Name) con 255 caracteres entonces la dirección se guarda correctamente.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa el nombre con 255 caracteres
        And El usuario guarda la dirección
        And La dirección debe guardarse correctamente sin errores

@createAccount @deleteAccount @funcional_Positivo @DE-3 @Iteracion2 @fail
Scenario: DE-3: Verificar que cuando se ingresa un Nombre (First Name) con más de 255 caracteres entonces se muestra un mensaje de error.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa el nombre con mas 255 caracteres
        And El usuario guarda la dirección
        And Se muestra un mensaje de error

@createAccount @deleteAccount @funcional_Positivo @DE-4 @Iteracion2 @fail
Scenario: DE-4: Verificar que cuando se ingresa un Nombre (First Name) vacío entonces se muestra un mensaje de error.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa el nombre vacio
        And El usuario guarda la dirección
        And Se muestra un mensaje de error

@createAccount @deleteAccount @funcional_Positivo @DE-5 @Iteracion2 @fail
Scenario: DE-5: Verificar que cuando se ingresa un Nombre (First Name) con números entonces se muestra un mensaje de error.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario ingresa el nombre con numeros
        And El usuario guarda la dirección
        And Se muestra un mensaje de error

@createAccount @deleteAccount @funcional_Positivo @DE-6 @Iteracion2 @fail
Scenario: DE-6: Verificar que cuando se ingresa un Nombre (First Name) con caracteres alfanuméricos entonces se muestra un mensaje de error.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario ingresa el nombre con alfanumericos
        And El usuario guarda la dirección
        And Se muestra un mensaje de error