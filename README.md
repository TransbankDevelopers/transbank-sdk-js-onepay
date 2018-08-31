[![GitHub release](https://img.shields.io/github/release/TransbankDevelopers/transbank-sdk-js-onepay.svg)](https://github.com/TransbankDevelopers/transbank-sdk-js-onepay/releases)

# Transbank JavaScript SDK Onepay

## Requerimientos

Cualquier navegador que soporte ECMAScript 5 o superior

### Navegadores soportados

Por temas de seguridad y para proveer la mejor experiencia para tus clientes que usaran tu aplicación de pago,
no damos soporte a navegadores que han dejado de recibir actualizaciones de seguridad y que actualmente 
representan la minoría del trafico.

Si bien hemos realizado pruebas completas y exitosas usando Microsoft Internet Explorer 11
te recomendamos usar alguno de los navegadores listados a continuación:

- Microsoft Edge en sus versiones mas recientes
- Las versiones mas recientes de Google Chrome y Safari en todas las plataformas
- Mozilla Firefox en sus versiones para Desktop mas recientes
- Se requiere soporte de TLS 1.2 en todos los navegadores

## Instalación

Agrega el siguiente HTML justo antes de cerrar tu etiqueta body:

```html
<script>
    (function (o, n, e, p, a, y) {
        var s = n.createElement(p);
        s.type = "text/javascript";
        s.src = e;
        s.onload = s.onreadystatechange = function () {
            if (!o && (!s.readyState
                || s.readyState === "loaded")) {
                y();
            }
        };
        var t = n.getElementsByTagName("script")[0];
        p = t.parentNode;
        p.insertBefore(s, t);
    })(false, document, "https://cdn.rawgit.com/TransbankDevelopers/transbank-sdk-js-onepay/v1.4.1/lib/onepay.min.js",
        "script",window, function () {
            console.log("Onepay JS library successfully loaded.");
        });
</script>
```
## Modo de uso

Existen dos formas de integrar el pago Onepay en tu comercio:
1. Checkout
2. QR Directo

En nuestra modalidad QR Directo tienes la libertad de poder dibujar el código QR donde tu decidas dentro tu pagina web,
mientras que con la modalidad de Checkout se desplegará un Modal que contendrá el QR y toda la funcionalidad necesaria 
para completar el pago en forma satisfactoria.

En caso que decidas integrar bajo la modalidad de QR Directo eres tú el encargado de implementar que pasará en tu página
a medida que los diferentes estados de pago vayan sucediendo. El detalle de como debes realizarlo lo podrás ver a 
continuación.

## Integración Checkout
### Crear requerimiento

Lo primero que debes crear es el objeto de requerimiento para el SDK el cual se arma de la siguiente forma:

````javascript 1.5
var options = {
  endpoint: './transaction-create',
  commerceLogo: '/onepay-sdk-example/images/icons/logo-01.png',
  callbackUrl: './transaction-commit'
};
````

1. `endpoint` : corresponde a la URL que tiene la lógica de crear la transacción usando alguno de nuestros SDK 
disponibles para backend o invocando directamente al API de Onepay.

    El SDK enviara el parámetro `channel`a tu `endpoint`, cuyo valor podría ser `WEB` o `MOBILE`. Debes asegurarte de
    capturar este parámetro para poder enviar el `channel` adecuado al API de Onepay.

    Se espera que el `endpoint` retorne un JSON como el del siguiente ejemplo:
    ```json
    {  
     "externalUniqueNumber":"38bab443-c55b-4d4e-86fa-8b9f4a2d2d13",
     "amount":88000,
     "qrCodeAsBase64":"QRBASE64STRING",
     "issuedAt":1534216134,
     "occ":"1808534370011282",
     "ott":89435749
    }
    ```

2. `commerceLogo` : La URL del logo de comercio que se mostrará en el modal. 

3. `callbackUrl` : URL que invocara desde el SDK una vez que la transacción ha sido autorizada por el comercio. En este
callback el comercio debe hacer el confirmación de la transacción, para lo cual dispone de 30 segundos desde que la
transacción se autorizo, de lo contrario esta sera automáticamente reversada.

    El callback será invocado via `GET` e irán los parametros `occ` y `externalUniqueNumber` con los cuales podrás
    invocar la confirmación de la transacción desde tu backend.
    
    En caso que el págo falle por algúna razón será informado desde el modal.

### Ejecutar Checkout

Solo se debe invocar la siguiente funcion a la cual le entregaremos el objeto `options` que hemos creado previamente.

````javascript 1.5
Onepay.checkout(options);
````

## Integración QR Directo
### 1. Crear transacción

Para que el flujo de cliente sea el adecuado dependiendo si esta realizando el pago desde un computador o un aparato
móvil es indispensable que envíes el `channel` correcto cuando creas la transacción. Para obtener el `channel` adecuado
puedes usar la función `Onepay.getChannel()` disponible dentro del sdk.

Luego debes crear la transacción en Onepay desde tu backend enviando el `channel` que has rescatado como parámetro desde
frontend.

Si la transacción se crea en forma satisfactoria te retornara el `occ`, `ott`, `externalUniqueNumber`y `qrCodeAsBase64` 
que deberás usar en la llamada a QR Directo.

### 2. Crear requerimiento

Ahora ya puedes crear el objeto de requerimiento para el SDK el cual se arma de la siguiente forma:

```javascript
var transaction = {  
    occ:1808696602719171,
    ott:60361166,
    externalUniqueNumber:"cf734d22-550c-449b-aa68-a57d64831b41",
    qrCodeAsBase64:"iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAADkklEQVR42u3dQW7CQBBE0bn/peEEWUSy6aqe96XsEDJ4HouO" +
     "7TkfSX92fAUSIBIgEiASIBIgEiASIBIgEiCSAJEAkQCRAJEAkQCRAJEAkQCRAJEEiASIBIgEiHQLkHNOxd9/j7/l9bedL0AAAQQQQAABBBBAAA" +
     "EEEEAAAQSQZ7/wsdHdQ8fTsjDSADatH0AAAQQQQAABBBBAAAEEEEAAAQSQ8/rCazmeKchbzxcggAACCCCAAAIIIIAAAggggAACCCC/PJ609wEE" +
     "EEAAAQQQQAABBBBAAAEEEEAAAaQRyFPfw9axMCCAAAIIIIAAAggggAACCCCAAALIbiDtx9MCwfkCBBDnCxBAAAEEEEAAAQQQQAABBJA3xoC2P5" +
     "h9ve0PAAEEEEAseEAAAQQQQAABBBBAANkN5LbaN/EUIIAIEEAECCCAAAIIIIAAAsidQG7b1LJlvJm2mWniDwIggAACCCCAAAIIIIAAAggggAAC" +
     "SN6D19LGvGlAbhwvAwIIIIAAAggggAACCCCAAAIIIIDMAWm5pbRlQbYfPyCAAAIIIIAAAggggAACCCCAAALIb+Ckvf/UwmgZd7tYERBAAAEEEE" +
     "AAAQQQQAABBBBAANkBZOs496kF0PK9bRgLAwIIIIAAAggggAACCCCAAAIIIIDMwdk69mx5EFwTHEAAAQQQQAABBBBAAAEEEEAAAQSQ/m0Ftm7W" +
     "mTam9n8QQAABBBBAAAEEEEAAAQQQQAABxPYHyT8ILXDaPxcggAACCCCAAAIIIIAAAggggAACSObCa7kFNe34Wz4vIIAAAggggAACCCCAAAIIII" +
     "AAAsidtW8rkLbNBCCAAAIIIIAAIkAAESCAAAIIIJlA0rYhaLm4rn2MPPV5AQEEEEAAAQQQQAABBBBAAAEEEEB2j0lbFnbamHTzrbiAAAIIIIAA" +
     "AggggAACCCCAAAIIID23uN4GLW2cPhkggAACCCCAAAIIIIAAAggggAACSP+D2raOr9sfTAcIIIAAAggggAACCCCAAAIIIIAAAkjCiUsbL7dcVA" +
     "kIIIAAAggggAACCCCAAAIIIIAAMntCt44xty7IposYAQEEEEAAAQQQQAABBBBAAAEEEED2LqSWzTTfPo9TY3xAAAEEEEAAAQQQQAABBBBAAAEE" +
     "EOmuAJEAkQCRAJEAkQCRAJEAkQCRAJEEiASIBIgEiASIBIgEiASIBIgEiCRAJEAkQCRApIS+jaaPZv11nXQAAAAASUVORK5CYII\u003d",
   
    paymentStatusHandler: {
        ottAssigned: function () {
            // callback transacción asignada
            console.log("Transacción asignada.");
            
        },
        authorized: function (occ, externalUniqueNumber) {
            // callback transacción autorizada
            console.log("occ: " + occ);
            console.log("externalUniqueNumber: " + externalUniqueNumber);
            
            // funcion no incluida en sdk
            sendHttpPostRedirect("./transaction-commit", occ, externalUniqueNumber);
        },
        canceled: function () {
            // callback rejected by user
            console.log("Transacción cancelada por el usuario.");
            
        },
        authorizationError: function () {
            // cacllback authorization error
            console.log("Error de autorizacion.");

        },
        unknown: function () {
            // callback to any unknown status recived
            console.log("Estado desconocido.");

        }
    }
};
```

El objeto `paymentStatusHandler` debe implementar los diferentes callbacks que serán invocados por la librería
JavaScript según vayan ocurriendo los eventos de pago, los cuales son:

1. `ottAssigned`: Este evento se gatilla una vez que el usuario ha escaneado el código QR desde su aplicacion movil.

2. `authorized`: Si el pago se completa correctamente desde el app se gatilla este evento. Una vez que este evento  es 
gatillado dispones de sólo 30 segundos para poder confirmar la transacción, de lo contrario esta se reversa en forma 
automática de la tarjeta del cliente. Por esta razón, en este callback debes invocar a tu backend para confirmar 
rápidamente la transacción.

3. `canceled`: Se gatilla si el usuario presiona "Cancelar" desde su aplicación móvil antes de completar el pago.

4. `authorizationError`: Se gatilla en caso de que un error ocurra al momento de autorizar el pago.

5. `unknown`: Cualquier evento desconocido que se gatille durante el pago invocará este callback.

Pon especial atención en que el callback `authorized` recibirá 2 parámetros de entrada que te servirán para poder invocar 
luego la confirmación de la transacción.

```javascript
authorized: function (occ, externalUniqueNumber) {}
```

Para invocar a tu backend enviando estos dos parámetros puedes hacer un redirect vía POST o usando XHR.

En nuestro ejemplo hemos llamado a la función `sendHttpPostRedirect("./transaction-commit", occ, externalUniqueNumber)`
por temas de claridad no hemos puesto la definición e implementación de esta función ya que no es parte del SDK
y queda en tus manos el decidir su implementación.

### 3. Instanciar librería y dibujar QR

Una vez que tenemos construido el objeto `transaction` siguiendo los pasos de la sección anterior podemos crear una 
nueva instancia del SDK de JavaScript y dibujar el QR. Para esto deberás tener alguna etiqueta HTML preparada para 
recibir la imagen del QR. Ejemplo:

```html
<div id="qr-image"></div>
```

Lo anterior es importante ya que debemos indicarle luego al SDK o librería el ID del tag donde queremos que nos
incluya la imagen. Ejemplo:

```javascript 1.5
var htmlTagId = 'qr-image';
Onepay.directQr(transaction, htmlTagId);
```

Pon especial atención a que `Onepay.directQr` recibe como parámetro el objeto `transaction` que hemos preparado 
anteriormente y el `tagHtmlId` donde deseamos que se pinte el QR.

### 4. Consideraciones especiales
       
A diferencia del la integración Checkout que incluye toda la lógica para controlar y manejar el caso que el cliente este
pagando desde un dispositivo móvil, la integración de QR Directo esta pensado para que seas tú quien tenga más control
de qué y cómo lo quieres hacer. Es por esta razón que sera tarea tuya el ver si quieres manejar el caso móvil en tu 
pagina y como lo haces.
       
El SDK incluye un par de funciones que te pueden ser de utilidad para esto:
       
1. `Onepay.isMobile() : true|false`
2. `Onepay.getChannel() : 'WEB'|'MOBILE'`
3. `Onepay.redirectToApp(occ)`
       
La primera función te servirá para identificar si quien esta navegando en tu pagina esta haciéndolo desde un dispositivo
móvil o no y así poder dirigir al usuario directo a la app de Onepay en caso que esté en un móvil.

ejemplo:
```javascript 1.5
// si el cliente esta desde un movil redirecciono a la app y dejo de ejecutar las funciones de web.
if (Onepay.isMobile()) {
  Onepay.redirectToApp(transaction.occ);
  return;
}
```
       
La segunda función te servira para poder enviar el parametro `channel` en forma correcta cuando crees la transacción.
       
Por último la tercera función te servirá para hacer un redirect del usuario a la app de Onepay instalada en su
dispositivo móvil, aquí deberás entregar el occ que obtuviste al crear la transacción para que la app sea capaz de
identificar el pago y dejar al cliente directo en botón pagar. Esto tiene sentido ya que si tu cliente esta intentando
pagar desde su móvil seguramente le complicará un poco querer escanear el código QR.
       
Puedes ver como utilizarlas en cualquiera de nuestras tiendas de ejemplo.

## Ahora le toca al usuario

De aquí en adelante es el usuario quien comenzará a interactuar con la aplicación móvil que escaneará el código QR. Luego 
nuestra pagina se irá enterando de los cambios de estados cuando el SDK invoque a los diferentes callbacks que has 
implementado en el caso de `Integracion QR Directo` para poder personalizar la experiencia de tus clientes o usando la 
funcionalidad incluida en el caso de `Integracion Checkout`.

## Proyectos de ejemplo

Si deseas puedes revisar algunos proyectos de ejemplo con integración completa (backend y frontend) para los
distintos lenguajes soportados por los SDK de backend.

1. [Ejemplo Java][java_example]
2. [Ejemplo PHP][php_example]
3. [Ejemplo .NET][net_example]

[java_example]: https://github.com/TransbankDevelopers/transbank-sdk-java-example
[php_example]: https://github.com/TransbankDevelopers/transbank-sdk-php-example
[net_example]: https://github.com/TransbankDevelopers/transbank-sdk-dotNet-example

## Desarrollo

### Standares

- Para los commits respetamos las siguientes normas: https://chris.beams.io/posts/git-commit/
- Usamos ingles, para los mensajes de commit.
- Se pueden usar tokens como WIP, en el subject de un commit, separando el token con `:`, por ejemplo:
`WIP: This is a useful commit message`
- Para los nombres de ramas también usamos ingles.
- Se asume, que una rama de feature no mezclada, es un feature no terminado.
- El nombre de las ramas va en minúsculas.
- Las palabras se separan con `-`.
- Las ramas comienzan con alguno de los short lead tokens definidos, por ejemplo: `feat/tokens-configuration`

#### Short lead tokens
##### Commits
- WIP = Trabajo en progreso.
##### Ramas
- feat = Nuevos features
- chore = Tareas, que no son visibles al usuario.
- bug = Resolución de bugs.

### Todas las mezclas a master se hacen mediante Pull Request.

### Instalar dependencias para el desarrolo:
```bash
npm install
```

### Construir el javascript localmente antes de hacer commit:
```bash
npm run build
```

## Generar una nueva versión

Para generar una nueva versión, se debe crear un PR (con un título "Prepare release X.Y.Z" con los valores que correspondan para `X`, `Y` y `Z`). Se debe seguir el estándar semver para determinar si se incrementa el valor de `X` (si hay cambios no retrocompatibles), `Y` (para mejoras retrocompatibles) o `Z` (si sólo hubo correcciones a bugs).

En ese PR deben incluirse los siguientes cambios:

1. Modificar el archivo CHANGELOG.md para incluir una nueva entrada (al comienzo) para `X.Y.Z` que explique en español los cambios **de cara al usuario del SDK**.
2. Modificar este README.md para que los ejemplos usen la nueva versión `X.Y.Z`.
3. De ser necesario, actualizar la versión declarada en `package.json` y `src/onepay.js` para que tenga el valor `X.Y.Z` y ejecutar `npm run build`.

Luego de obtener aprobación del pull request, debe mezclarse a master e inmediatamente generar un release en GitHub con el tag `vX.Y.Z`. En la descripción del release debes poner lo mismo que agregaste al changelog.

Finalmente, debe crearse un nuevo PR (con título "Next release probably will be X.Y.{Z+1}") para incrementar el valor de Z en los archivos `package.json` y `src/onepay.js`.

Es buena práctica luego actualizar [los proyectos de ejemplo](#proyectos-de-ejemplo) para que usen la nueva versión liberada.