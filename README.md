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
    })(false, document, "https://cdn.rawgit.com/TransbankDevelopers/transbank-sdk-js-onepay/v1.2.0/lib/onepay.min.js", 
        "script",window, function () {
            console.log("Onepay JS library successfully loaded.");
        });
</script>
```
## Modo de uso

Existen dos formas de integrar el pago Onepay en tu comercio:
1. QR Directo
2. Checkout

En nuestra modalidad QR Directo tienes la libertad de poder pintar el código QR donde tu decidas dentro tu pagina web,
mientras que con la modalidad de Checkout se desplegara un Modal que contendrá el QR y toda la funcionalidad necesaria 
para completar el pago en forma satisfactoria.

En caso que decidas integrar bajo la modalidad de QR Directo eres tu el encargado de implementar que pasara en tu pagina
a medida que los diferentes estados de pago vayan sucediendo. El detalle de como debes realizarlo lo podrás ver a 
continuación.

## Integración QR Directo

Lo primero que debes crear es el objeto de requerimiento para el SDK el cual se arma de la siguiente forma:

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
            sendHttpPostRedirect("./transaction-commit.html", occ, externalUniqueNumber);
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

Los valores de `occ`, `ott`, `externalUniqueNumber` y `qrCodeAsBase64` deben ser obtenidas en tu backend al crear una 
transacción Onepay y transmitidas a tu frontend.

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

En nuestro ejemplo hemos llamado a la función `sendHttpPostRedirect("./transaction-commit.html", occ, externalUniqueNumber)`
por temas de claridad no hemos puesto la definición e implementación de esta función ya que no es parte del SDK
y queda en tus manos el decidir su implementación.

### Instanciar librería y dibujar QR

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

## Ahora le toca al usuario

De aquí en adelante es el usuario quien comenzará a interactuar con la aplicación móvil que escaneará el código QR. Luego 
nuestra pagina se irá enterando de los cambios de estados cuando el SDK invoque a los diferentes callbacks que has 
implementado para poder personalizar la experiencia de tus clientes.

Por ejemplo, tu interfaz puede indicarle al usuario que use la app de Onepay para escanear el código y tan pronto como 
recibes el llamado al callback `ottAssigned` dejas de mostrar ese mensaje y le indicas que se está esperando la aprobación en la app.

## Proyectos de ejemplo

Si deseas puedes revisar algunos proyectos de ejemplo con integración completa (backend y frontend) para los
distintos lenguajes soportados por los SDK de backend.

1. [Ejemplo Java][java_example]
2. [Ejemplo PHP][php_example]

[java_example]: https://github.com/TransbankDevelopers/transbank-sdk-java-example
[php_example]: https://github.com/TransbankDevelopers/transbank-sdk-php-example

