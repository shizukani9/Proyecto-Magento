@ui
Feature: Direccion de envio 

@createAccount @deleteAccount @funcional_Positivo @DE-1 @Iteracion2 @pass @shopping
Scenario: DE-1: Verificar que cuando se ingresa un Nombre (First Name) con 1 carácter entonces la dirección se guarda correctamente.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa el nombre con solo 1 carácter
        And El usuario guarda la dirección
        And La dirección debe guardarse correctamente sin errores

@createAccount @deleteAccount @funcional_Positivo @DE-2 @Iteracion2 @pass @shopping
Scenario: DE-2: Verificar que cuando se ingresa un Nombre (First Name) con 255 caracteres entonces la dirección se guarda correctamente.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa el nombre con 255 caracteres
        And El usuario guarda la dirección
        And La dirección debe guardarse correctamente sin errores

@createAccount @deleteAccount @funcional_Positivo @DE-3 @Iteracion2 @pass @shopping
Scenario: DE-3: Verificar que cuando se ingresa un Nombre (First Name) con más de 255 caracteres entonces se muestra un mensaje de error.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa el nombre con mas 255 caracteres
        And El usuario guarda la dirección
        And Se muestra un mensaje de error de mas de 255 caracteres

@createAccount @deleteAccount @funcional_Positivo @DE-4 @Iteracion2 @pass @shopping
Scenario: DE-4: Verificar que cuando se ingresa un Nombre (First Name) vacío entonces se muestra un mensaje de error.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa el nombre vacio
        And El usuario guarda la dirección
        And Se muestra un mensaje de error en el nombre menciona que el campo requerido

@createAccount @deleteAccount @funcional_Positivo @DE-5 @Iteracion2 @fail @shopping
Scenario: DE-5: Verificar que cuando se ingresa un Nombre (First Name) con números entonces se muestra un mensaje de error.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa el nombre con numeros
        And El usuario guarda la dirección
        And Se muestra un mensaje de error

@createAccount @deleteAccount @funcional_Positivo @DE-6 @Iteracion2 @fail @shopping
Scenario: DE-6: Verificar que cuando se ingresa un Nombre (First Name) con caracteres alfanuméricos entonces se muestra un mensaje de error.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa el nombre con alfanumericos
        And El usuario guarda la dirección
        And Se muestra un mensaje de error

@createAccount @deleteAccount @funcional_Positivo @DE-7 @Iteracion2 @pass @shopping
Scenario: DE-7: Verificar que cuando se ingresa un Apellido (Last Name) con 1 carácter entonces la dirección se guarda correctamente.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa el apellido con solo 1 carácter
        And El usuario guarda la dirección
        And La dirección debe guardarse correctamente sin errores

@createAccount @deleteAccount @funcional_Positivo @DE-8 @Iteracion2 @pass @shopping
Scenario: DE-8: Verificar que cuando se ingresa un Apellido (Last Name) con 255 caracteres entonces la dirección se guarda correctamente.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa el apellido con 255 caracteres
        And El usuario guarda la dirección
        And La dirección debe guardarse correctamente sin errores

@createAccount @deleteAccount @funcional_Positivo @DE-9 @Iteracion2 @pass @shopping
Scenario: DE-9: Verificar que cuando se ingresa un Apellido (Last Name) con más de 255 caracteres entonces se muestra un mensaje de error.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa el apellido con mas 255 caracteres
        And El usuario guarda la dirección
        And Se muestra un mensaje de error de mas de 255 caracteres

@createAccount @deleteAccount @funcional_Positivo @DE-10 @Iteracion2 @pass @shopping
Scenario: DE-10: Verificar que cuando se ingresa un Apellido (Last Name) vacío entonces se muestra un mensaje de error.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa el apellido vacio
        And El usuario guarda la dirección
        And Se muestra un mensaje de error en el apellido menciona que el campo requerido

@createAccount @deleteAccount @funcional_Positivo @DE-11 @Iteracion2 @fail @shopping
Scenario: DE-11: Verificar que cuando se ingresa un Apellido (Last Name) con números entonces se muestra un mensaje de error.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa el apellido con numeros
        And El usuario guarda la dirección
        And Se muestra un mensaje de error

@createAccount @deleteAccount @funcional_Positivo @DE-12 @Iteracion2 @fail @shopping
Scenario: DE-12: Verificar que cuando se ingresa un Apellido (Last Name) con caracteres alfanuméricos entonces se muestra un mensaje de error.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa el apellido con alfanumericos
        And El usuario guarda la dirección
        And Se muestra un mensaje de error

@createAccount @deleteAccount @funcional_Positivo @DE-13 @Iteracion2 @pass @shopping
Scenario: DE-13: Verificar que cuando el campo Compañía (Company) está vacío entonces la dirección se guarda correctamente.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa la compania vacio
        And El usuario guarda la dirección
        And La dirección debe guardarse correctamente sin errores

@createAccount @deleteAccount @funcional_Positivo @DE-14 @Iteracion2 @pass @shopping
Scenario: DE-14: Verificar que cuando el campo Compañía (Company) con 1 carácter entonces la dirección se guarda correctamente.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa la compania con 1 caracter
        And El usuario guarda la dirección
        And La dirección debe guardarse correctamente sin errores

@createAccount @deleteAccount @funcional_Positivo @DE-15 @Iteracion2 @pass @shopping
Scenario: DE-15: Verificar que cuando el campo Compañía (Company) con 255 caracteres entonces la dirección se guarda correctamente.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa la compania con 255 caracteres
        And El usuario guarda la dirección
        And La dirección debe guardarse correctamente sin errores

@createAccount @deleteAccount @funcional_Positivo @DE-16 @Iteracion2 @pass @shopping
Scenario: DE-16: Verificar que cuando el campo Compañía (Company) con más 255 caracteres entonces la dirección se guarda correctamente.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa la compania con mas 255 caracteres
        And El usuario guarda la dirección
        And Se muestra un mensaje de error de mas de 255 caracteres

@createAccount @deleteAccount @funcional_Positivo @DE-17 @Iteracion2 @pass @shopping
Scenario: DE-17: Verificar que cuando se ingresa una Dirección (Street Address) con 5 caracteres entonces la dirección se guarda correctamente.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa la compania con 5 caracteres
        And El usuario guarda la dirección
        And La dirección debe guardarse correctamente sin errores

@createAccount @deleteAccount @funcional_Positivo @DE-18 @Iteracion2 @pass @shopping
Scenario: DE-18: Verificar que cuando se ingresa una Dirección (Street Address) con 255 caracteres entonces la dirección se guarda correctamente.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa la Dirección con 255 caracteres
        And El usuario guarda la dirección
        And La dirección debe guardarse correctamente sin errores

@createAccount @deleteAccount @funcional_Positivo @DE-19 @Iteracion2 @pass @shopping
Scenario: DE-19: Verificar que cuando se ingresa una Dirección (Street Address) con más de 255 caracteres entonces se muestra un mensaje de error.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa la Dirección con mas 255 caracteres
        And El usuario guarda la dirección
        And Se muestra un mensaje de error de mas de 255 caracteres