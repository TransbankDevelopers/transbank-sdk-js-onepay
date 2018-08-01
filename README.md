# Transbank Javascript SDK Onepay

## Requerimientos

Cualquier navegador que soporte ECMAScript 2015 (6th Edition, ECMA-262)

## Instalación

Agrega el siguiente HTML justo antes de cerrar tu etiqueta body:

```html
<script type="text/javascript">
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
    })(false, document, "https://cdn.rawgit.com/TransbankDevelopers/transbank-sdk-js-onepay/a75e7827/dist/onepay-lib.min.js", "script",
        window, function () {
            console.log("onepay js lib sucess loaded");
        });
</script>
```
## Modo de uso

Lo primero que debes crear es el objeto de requerimiento para el SDK el cual se arma de la siguiente forma:

```javascript
let transaction = {  
    occ:1808696602719171,
    ott:60361166,
    externalUniqueNumber:"cf734d22-550c-449b-aa68-a57d64831b41",
    qrCodeAsBase64:"iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAADkklEQVR42u3dQW7CQBBE0bn/peEEWUSy6aqe96XsEDJ4HouO7TkfSX92fAUSIBIgEiASIBIgEiASIBIgEiCSAJEAkQCRAJEAkQCRAJEAkQCRAJEEiASIBIgEiHQLkHNOxd9/j7/l9bedL0AAAQQQQAABBBBAAAEEEEAAAQSQZ7/wsdHdQ8fTsjDSADatH0AAAQQQQAABBBBAAAEEEEAAAQSQ8/rCazmeKchbzxcggAACCCCAAAIIIIAAAggggAACCCC/PJ609wEEEEAAAQQQQAABBBBAAAEEEEAAAaQRyFPfw9axMCCAAAIIIIAAAggggAACCCCAAALIbiDtx9MCwfkCBBDnCxBAAAEEEEAAAQQQQAABBJA3xoC2P5h9ve0PAAEEEEAseEAAAQQQQAABBBBAANkN5LbaN/EUIIAIEEAECCCAAAIIIIAAAsidQG7b1LJlvJm2mWniDwIggAACCCCAAAIIIIAAAggggAACSN6D19LGvGlAbhwvAwIIIIAAAggggAACCCCAAAIIIIDMAWm5pbRlQbYfPyCAAAIIIIAAAggggAACCCCAAALIb+Ckvf/UwmgZd7tYERBAAAEEEEAAAQQQQAABBBBAANkBZOs496kF0PK9bRgLAwIIIIAAAggggAACCCCAAAIIIIDMwdk69mx5EFwTHEAAAQQQQAABBBBAAAEEEEAAAQSQ/m0Ftm7WmTam9n8QQAABBBBAAAEEEEAAAQQQQAABxPYHyT8ILXDaPxcggAACCCCAAAIIIIAAAggggAACSObCa7kFNe34Wz4vIIAAAggggAACCCCAAAIIIIAAAsidtW8rkLbNBCCAAAIIIIAAIkAAESCAAAIIIJlA0rYhaLm4rn2MPPV5AQEEEEAAAQQQQAABBBBAAAEEEEB2j0lbFnbamHTzrbiAAAIIIIAAAggggAACCCCAAAIIID23uN4GLW2cPhkggAACCCCAAAIIIIAAAggggAACSP+D2raOr9sfTAcIIIAAAggggAACCCCAAAIIIIAAAkjCiUsbL7dcVAkIIIAAAggggAACCCCAAAIIIIAAMntCt44xty7IposYAQEEEEAAAQQQQAABBBBAAAEEEED2LqSWzTTfPo9TY3xAAAEEEEAAAQQQQAABBBBAAAEEEOmuAJEAkQCRAJEAkQCRAJEAkQCRAJEEiASIBIgEiASIBIgEiASIBIgEiCRAJEAkQCRApIS+jaaPZv11nXQAAAAASUVORK5CYII\u003d",
   
    paymentStatusHandler: {
        ottAssigned: function () {
            // callback transacción asinada
            console.log("Transacción asignada.");
            
        },
        authorized: function (occ, externalUniqueNumber) {
            // callback transacción autorizada
            console.log("occ : " + occ);
            console.log("externalUniqueNumber : " + externalUniqueNumber);

            let params = {
                occ: occ,
                externalUniqueNumber: externalUniqueNumber
            };

            let httpUtil = new HttpUtil();
            httpUtil.sendPostRedirect("./transaction-commit.html", params);
        },
        canceled: function () {
            // callback rejected by user
            console.log("transacción cancelada por el usuario");
            
        },
        authorizationError: function () {
            // cacllback authorization error
            console.log("error de autorizacion");

        },
        unknown: function () {
            // callback to any unknown status recived
            console.log("estado desconocido");

        }
    }
};
```

Los valores de `occ`, `ott`, `externalUniqueNumber` y `qrCodeAsBase64` deben ser obtenidas en tu backend al crear una transacción Onepay y transmitidas a tu frontend.

El objeto `paymentStatusHandler` debe implementar los diferentes callbacks que serán invocados por la librería
Javascript según vayan ocurriendo los eventos de pago, los cuales son:

1. `ottAssigned`: Este evento se gatilla una vez que el usuario ha escaneado el código QR desde su aplicacion movil.

2. `authorized`: Si el pago se completa correctamente desde el app se gatilla este evento. Una vez que este evento  es gatillado dispones de solo 30 segundos para poder confirmar la transacción, de lo contrario esta se reversa en forma automática de la tarjeta del cliente. Por esta razón, en este callback debes invocar a tu backend para confirmar rápidamente la transacción.

3. `canceled`: Se gatilla si el usuario presiona "Cancelar" desde su aplicación móvil antes de completar el pago.

4. `authorizationError`: Se gatilla en caso de que un error ocurra al momento de autorizar el pago.

5. `unknown`: Cualquier evento desconocido que se gatille durante el pago invocara este callback.

Pon especial atención en que el callback `authorized` recibirá 2 parámetros de entrada que te servirán para poder invocar luego la confirmación de la transacción.

```javascript
authorized: function (occ, externalUniqueNumber) {}
```

Para invocar a tu backend enviando estos dos parametros puedes hacer un redirect vía POST o usando XHR.

Si prefieres hacer el redirect vía POST, puedes usar la librería `HttpUtil` que se incluye en este SDK. Por ejemplo:

```javascript
let params = {
    occ: occ,
    externalUniqueNumber: externalUniqueNumber
};

let httpUtil = new HttpUtil();
httpUtil.sendPostRedirect("./transaction-commit", params);
```

### Instanciar librería y dibujar QR

Una vez que tenemos construido el request de nuestra librería siguiendo los pasos de la sección anterior podemos 
crear una nueva instancia del SDK de Javascript y dibujar el QR. Para esto deberas tener algún tag HTML preparado
para recibir la imagen del QR. Ejemplo:

```html
<div id="qr-image"></div>
```

Lo anterior es importante ya que debemos indicarle luego al SDK o librería el ID del tag donde queremos que nos
pinte la imagen. Ejemplo:

```javascript
let onepay = new Onepay(transaction);
onepay.drawQrImage("qr-image");
```

Pon especial atención a que Onepay recibe como parámetro el objeto request que hemos preparado anteriormente.

## Ahora le toca al usuario

De aquí en mas es el propio usuario quien comenzara a interactuar con la aplicación móvil, de la cual nuestra pagina
se ira enterando de sus estados mediante el SDK e invocando a los diferentes callbacks que has implementado para
poder personalizar la experiencia de tus clientes.

## Proyectos de ejemplo

Si lo deseas puedes revisar algunos proyectos de ejemplo con integración completa (backend y frontend) para los
distintos lenguajes soportados por los SDK de backend.

1. [Ejemplo Java][java_example]
2. [Ejemplo PHP][php_example]

[java_example]: https://github.com/TransbankDevelopers/transbank-sdk-java-example
[php_example]: https://github.com/TransbankDevelopers/transbank-sdk-php-example

