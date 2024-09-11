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
        And Se muestra un mensaje de error que el campo requerido

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
        And Se muestra un mensaje de error que el campo requerido

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
Scenario: DE-13: Verificar que cuando el campo Compañía (Company) con 1 carácter entonces la dirección se guarda correctamente.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa la compania con 1 caracter
        And El usuario guarda la dirección
        And La dirección debe guardarse correctamente sin errores

@createAccount @deleteAccount @funcional_Positivo @DE-14 @Iteracion2 @pass @shopping
Scenario: DE-14: Verificar que cuando el campo Compañía (Company) con 255 caracteres entonces la dirección se guarda correctamente.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa la compania con 255 caracteres
        And El usuario guarda la dirección
        And La dirección debe guardarse correctamente sin errores

@createAccount @deleteAccount @funcional_Positivo @DE-15 @Iteracion2 @pass @shopping
Scenario: DE-15: Verificar que cuando el campo Compañía (Company) con más 255 caracteres entonces la dirección se guarda correctamente.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa la compania con mas 255 caracteres
        And El usuario guarda la dirección
        And Se muestra un mensaje de error de mas de 255 caracteres

@createAccount @deleteAccount @funcional_Positivo @DE-16 @Iteracion2 @pass @shopping
Scenario: DE-16: Verificar que cuando el campo Compañía (Company) está vacío entonces la dirección se guarda correctamente.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa la compania vacio
        And El usuario guarda la dirección
        And La dirección debe guardarse correctamente sin errores

@createAccount @deleteAccount @funcional_Positivo @DE-17 @Iteracion2 @fail @shopping
Scenario: DE-17: Verificar que cuando el campo Compañía (Company) con números entonces se muestra un mensaje de error.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa la compania con numeros
        And El usuario guarda la dirección
        And Se muestra un mensaje de error

@createAccount @deleteAccount @funcional_Positivo @DE-18 @Iteracion2 @fail @shopping
Scenario: DE-18: Verificar que cuando el campo Compañía (Company) con alfanumérico entonces se muestra un mensaje de error.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa la compania con alfanumericos
        And El usuario guarda la dirección
        And Se muestra un mensaje de error

@createAccount @deleteAccount @funcional_Positivo @DE-19 @Iteracion2 @pass @shopping
Scenario: DE-19: Verificar que cuando se ingresa una Dirección (Street Address) con 5 caracteres entonces la dirección se guarda correctamente.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa la compania con 5 caracteres
        And El usuario guarda la dirección
        And La dirección debe guardarse correctamente sin errores

@createAccount @deleteAccount @funcional_Positivo @DE-20 @Iteracion2 @pass @shopping
Scenario: DE-20: Verificar que cuando se ingresa una Dirección (Street Address) con 255 caracteres entonces la dirección se guarda correctamente.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa la Dirección con 255 caracteres
        And El usuario guarda la dirección
        And La dirección debe guardarse correctamente sin errores

@createAccount @deleteAccount @funcional_Positivo @DE-21 @Iteracion2 @pass @shopping
Scenario: DE-21: Verificar que cuando se ingresa una Dirección (Street Address) con más de 255 caracteres entonces se muestra un mensaje de error.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa la Dirección con mas 255 caracteres
        And El usuario guarda la dirección
        And Se muestra un mensaje de error de mas de 255 caracteres

@createAccount @deleteAccount @funcional_Positivo @DE-22 @Iteracion2 @pass @shopping
Scenario: DE-22: Verificar que cuando se ingresa una Dirección (Street Address) vacío entonces se muestra un mensaje de error.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa la Dirección vacio
        And El usuario guarda la dirección
        And Se muestra un mensaje de error que el campo requerido

@createAccount @deleteAccount @funcional_Positivo @DE-23 @Iteracion2 @fail @shopping
Scenario: DE-23: Verificar que cuando el campo Dirección (Street Address) con números entonces se muestra un mensaje de error.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa la Dirección con numeros
        And El usuario guarda la dirección
        And Se muestra un mensaje de error

@createAccount @deleteAccount @funcional_Positivo @DE-23 @Iteracion2 @fail @shopping
Scenario: DE-24: Verificar que cuando el campo Dirección (Street Address) con alfanumérico entonces se muestra un mensaje de error.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa la Dirección con alfanumericos
        And El usuario guarda la dirección
        And Se muestra un mensaje de error

@createAccount @deleteAccount @funcional_Positivo @DE-25 @Iteracion2 @pass @shopping
Scenario: DE-25: Verificar que cuando se ingresa el nombre de una Ciudad (City) con 1 carácter entonces la dirección se guarda correctamente.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa la Ciudad con 1 caracter
        And El usuario guarda la dirección
        And La dirección debe guardarse correctamente sin errores

@createAccount @deleteAccount @funcional_Positivo @DE-26 @Iteracion2 @pass @shopping
Scenario: DE-26: Verificar que cuando se ingresa una Ciudad (City) con 255 caracteres entonces la dirección se guarda correctamente.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa la Ciudad con 255 caracteres
        And El usuario guarda la dirección
        And La dirección debe guardarse correctamente sin errores

@createAccount @deleteAccount @funcional_Positivo @DE-27 @Iteracion2 @pass @shopping
Scenario: DE-27: Verificar que cuando se ingresa una Ciudad (City) con más de 255 caracteres entonces se muestra un mensaje de error.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa la Ciudad con mas 255 caracteres
        And El usuario guarda la dirección
        And Se muestra un mensaje de error de mas de 255 caracteres

@createAccount @deleteAccount @funcional_Positivo @DE-28 @Iteracion2 @fail @shopping
Scenario: DE-28: Verificar que cuando se ingresa una Ciudad (City) con números entonces se muestra un mensaje de error.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa la Ciudad con numeros
        And El usuario guarda la dirección
        And Se muestra un mensaje de error

@createAccount @deleteAccount @funcional_Positivo @DE-29 @Iteracion2 @fail @shopping
Scenario: DE-29: Verificar que cuando se ingresa una Ciudad (City) con caracteres alfanuméricos entonces se muestra un mensaje de error.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa la Ciudad con alfanumericos
        And El usuario guarda la dirección
        And Se muestra un mensaje de error

@createAccount @deleteAccount @funcional_Positivo @DE-30 @Iteracion2 @pass @shopping
Scenario: DE-30: Verificar que cuando se selecciona una Estado/Provincia (State/Province) entonces la dirección se guarda correctamente.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa el Estado Provincia
        And El usuario guarda la dirección
        And La dirección debe guardarse correctamente sin errores

@createAccount @deleteAccount @funcional_Positivo @DE-31 @Iteracion2 @fail @shopping
Scenario: DE-31: Verificar que cuando no se selecciona una Estado/Provincia (State/Province) entonces la dirección no se guarda correctamente.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario no ingresa el Estado Provincia
        And El usuario guarda la dirección
        And Se muestra un mensaje de error que el campo requerido

@createAccount @deleteAccount @funcional_Positivo @DE-32 @Iteracion2 @pass @shopping
Scenario: DE-32: Verificar que cuando se ingresa un Código Postal (Zip/Postal Code) con 5 caracteres entonces la dirección se guarda correctamente.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa el Codigo Postal con 5 caracteres numericos
        And El usuario guarda la dirección
        And La dirección debe guardarse correctamente sin errores

@createAccount @deleteAccount @funcional_Positivo @DE-33 @Iteracion2 @pass @shopping
Scenario: DE-33: Verificar que cuando se ingresa un Código Postal (Zip/Postal Code) con 255 caracteres númericos entonces la dirección se guarda correctamente.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa el Codigo Postal con 255 caracteres numericos
        And El usuario guarda la dirección
        And La dirección debe guardarse correctamente sin errores

@createAccount @deleteAccount @funcional_Positivo @DE-34 @Iteracion2 @pass @shopping
Scenario: DE-34: Verificar que cuando se ingresa un Código Postal (Zip/Postal Code) con más de 255 caracteres numéricos entonces la dirección se guarda correctamente.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa el Codigo Postal con mas 255 caracteres numericos
        And El usuario guarda la dirección
        And Se muestra un mensaje de error de mas de 255 caracteres

@createAccount @deleteAccount @funcional_Positivo @DE-35 @Iteracion2 @pass @shopping
Scenario: DE-35: Verificar que cuando se ingresa un Código Postal (Zip/Postal Code) vacío entonces la dirección se guarda correctamente.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa el Codigo Postal vacio
        And El usuario guarda la dirección
        And Se muestra un mensaje de error que el campo requerido

@createAccount @deleteAccount @funcional_Positivo @DE-36 @Iteracion2 @fail @shopping
Scenario: DE-36: Verificar que cuando se ingresa un Código Postal (Zip/Postal Code) con letras entonces se muestra un mensaje de error.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa el Codigo Postal letras
        And El usuario guarda la dirección
        And Se muestra un mensaje de error

@createAccount @deleteAccount @funcional_Positivo @DE-37 @Iteracion2 @fail @shopping
Scenario: DE-37: Verificar que cuando se ingresa un Código Postal (Zip/Postal Code) con alfanumérico entonces se muestra un mensaje de error.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa el Codigo Postal alfanumericos
        And El usuario guarda la dirección
        And Se muestra un mensaje de error

@createAccount @deleteAccount @funcional_Positivo @DE-38 @Iteracion2 @pass @shopping
Scenario: DE-38: Verificar que cuando se ingresa un Número de Teléfono (Phone Number) con 7 dígitos entonces la dirección se guarda correctamente.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa el Teléfono con 7 caracteres numericos
        And El usuario guarda la dirección
        And La dirección debe guardarse correctamente sin errores

@createAccount @deleteAccount @funcional_Positivo @DE-39 @Iteracion2 @pass @shopping
Scenario: DE-39: Verificar que cuando se ingresa un Número de Teléfono (Phone Number) con 15 dígitos entonces la dirección se guarda correctamente.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa el Teléfono con 15 caracteres numericos
        And El usuario guarda la dirección
        And La dirección debe guardarse correctamente sin errores

@createAccount @deleteAccount @funcional_Positivo @DE-40 @Iteracion2 @pass @shopping
Scenario: DE-40: Verificar que cuando se ingresa un Número de Teléfono (Phone Number) con más de 255 dígitos entonces se muestra un mensaje de error.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa el Teléfono con mas de 255 caracteres numericos
        And El usuario guarda la dirección
        And Se muestra un mensaje de error de mas de 255 caracteres

@createAccount @deleteAccount @funcional_Positivo @DE-41 @Iteracion2 @fail @shopping
Scenario: DE-41: Verificar que cuando se ingresa un Número de Teléfono (Phone Number) con letras entonces se muestra un mensaje de error.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa el Teléfono con letras
        And El usuario guarda la dirección
        And And Se muestra un mensaje de error

@createAccount @deleteAccount @funcional_Positivo @DE-42 @Iteracion2 @fail @shopping
Scenario: DE-42: Verificar que cuando se ingresa un Número de Teléfono (Phone Number) con caracteres alfanuméricos entonces se muestra un mensaje de error.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa el Teléfono con alfanumericos
        And El usuario guarda la dirección
        And And Se muestra un mensaje de error