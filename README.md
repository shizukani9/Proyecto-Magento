# Proyecto de Automatización - Magento

## Descripción del Proyecto
Este proyecto tiene como objetivo automatizar las pruebas de regresión para un sitio web basado en Magento. Utilizamos herramientas como **Selenium WebDriver**, **Cucumber** y **Node.js** para asegurar la funcionalidad y estabilidad del sitio en diversas áreas, incluyendo la creación de cuentas, inicio de sesión, gestión del carrito de compras, proceso de pago, y revisión de pedidos.

## Estructura del Proyecto
- **`core/ui/`**: Contiene la configuración y manejo del WebDriver.
- **`features/`**: Carpeta que incluye los escenarios `.feature` de Cucumber y las definiciones de pasos.
  - **`gestion_carrito_steps.js`**: Define los pasos para gestionar el carrito de compras.
  - **`hooks.js`**: Contiene configuraciones y hooks de Cucumber para ejecutar tareas antes o después de los escenarios de prueba.
- **`main/api/`**: Implementa el cliente API para la creación, eliminación y gestión de datos en el backend.
  - **`apiClient.js`**: Cliente API genérico para realizar solicitudes HTTP.
  - **`userService.js`**: Servicio para gestionar usuarios a través de la API.
- **`main/ui/`**: Implementa los objetos de página que representan las diferentes páginas del sitio web.
  - **`create_an_account_page.js`**: Página para la creación de una cuenta de usuario.
  - **`customer_login_page.js`**: Página de inicio de sesión del cliente.
  - **`home_page.js`**: Página principal del sitio Magento.
  - Otros archivos que representan diferentes partes del sitio web (checkout, shipping, etc.).
- **`utils/`**: Herramientas auxiliares, como generadores de datos aleatorios para pruebas.
- **`reports/`**: Contiene los informes generados por las pruebas, en formato HTML.

## Instalación y Ejecución

### Prerrequisitos
- **Node.js** (versión recomendada: >= 18)
- **npm** (gestor de paquetes para Node.js)
- **Google Chrome** o **Chromium**

### Instalación

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/tu-repositorio.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd tu-repositorio
   ```
3. Instala las dependencias necesarias:
   ```bash
   npm install
   ```

### Ejecución de las Pruebas

Para ejecutar las pruebas de automatización de la Iteración 1, utiliza el siguiente comando:

```bash
npx cucumber-js --tags "@Iteracion1"
```
Para ejecutar las pruebas de automatización de la Iteración 2, utiliza el siguiente comando:

```bash
npx cucumber-js --tags "@Iteracion2"
```
Para ejecutar las pruebas de automatización de la Iteración 3, utiliza el siguiente comando:

```bash
npx cucumber-js --tags "@Iteracion3"
```
Para ejecutar las pruebas de automatización de la Iteración 4, utiliza el siguiente comando:

```bash
npx cucumber-js --tags "@Iteracion4"
```

Este comando ejecutará todos los escenarios definidos en los archivos `.feature` utilizando Cucumber.

### Ver el Informe de Pruebas
Al finalizar las pruebas, un informe HTML se generará automáticamente en la carpeta reports/. Puedes abrir el informe en tu navegador:

```bash
open reports/cucumber-report.html
```

### Generación de Datos
El proyecto incluye un generador de datos aleatorios (dataGenerator.js) que permite generar información como nombres de usuario, correos electrónicos y contraseñas para las pruebas. Estos datos se utilizan para asegurar la variabilidad y evitar duplicidades en las pruebas.

Ejemplo de Uso


```bash
const DataGenerator = require('./utils/dataGenerator');
```
```bash
const correoAleatorio = DataGenerator.generateLetters(10) + "@example.com";
```

### Contribuciones
Si deseas contribuir a este proyecto, sigue los siguientes pasos:

Haz un fork del repositorio.
Crea una nueva rama:


```bash
git checkout -b feature/nueva-funcionalidad
```

Realiza los cambios y haz un commit:

```bash
git commit -m "Añadir nueva funcionalidad"
```

Sube los cambios a tu repositorio:


```bash
git push origin feature/nueva-funcionalidad
```

Abre un Pull Request para revisión.

### Licencia
Este proyecto está licenciado bajo la Licencia MIT. Para más detalles, consulta el archivo LICENSE.