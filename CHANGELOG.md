# Changelog
Todos los cambios notables a este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
y este proyecto adhiere a [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [1.5.7] - 2018-10-23
### Fixed
- Corrige versión

## [1.5.6] - 2018-10-23
### Fixed
- Corrige sincronización (websocket) con el avance del pago en la app Onepay

## [1.5.5] - 2018-10-02
### Fixed
- Chrome ahora ejecuta sin problemas la aplicación de onepay desde Android.

## [1.5.4] - 2018-10-02
### Changed
- Se actualiza URL de aplicación móvil Android de Onepay.

## [1.5.3] - 2018-09-26
### Changed
- Se actualiza URL de origen de imágenes para Checkout.

## [1.5.2] - 2018-09-14
### Fixed
- Cambio de contexto a aplicación móvil ahora funciona nuevamente.

## [1.5.1] - 2018-09-12
### Changed
- Se cambia los textos de ejemplo del modal a los textos oficiales.

### Fixed
- Botón `Entendido` cierra el modal cuando ningún callback es necesario.

## [1.5.0] - 2018-09-06
### Added
- Ahora se invoca el callback entregado en modalidad checkout incluso en caso de error
en la transacción.
 
### Changed
- La librería siempre se exporta como window.Onepay en el navegador aunque exista requirejs u otro sistema de módulos 
presentes

## [1.4.2] - 2018-09-04
### Changed
- Corrige URL de iframe que se invoca desde el javascript

## [1.4.2] - 2018-09-03
### Changed
- Modalidad checkout ahora se carga en iframe para evitar problemas de CSS

## [1.4.1] - 2018-08-31
### Added
- Puedes usar `Onepay.version` para saber la versión de esta librería que estás usando.

## [1.4.0] - Release fallido, no usar.

## [1.3.2] - 2018-08-21
### Fixed
- Bug [cuando los parámetros del callback son nulos](https://github.com/TransbankDevelopers/transbank-sdk-js-onepay/pull/23). 

## [1.3.1] - Release fallido, no usar.

## [1.3.0] - 2018-08-16
### Added
- Soporte para pagos móviles (canal MOBILE)

## [1.2.0] - 2018-08-13
### Added
- Modo de integración Checkout ("modal")

## [1.0.2] - 2018-08-06
### Added
- Archivo minificado incluye número de versión.
- Este changelog :)


