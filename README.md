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
    })(false, document, "https://cdn.rawgit.com/TransbankDevelopers/transbank-sdk-js-onepay/v1.5.9/lib/merchant.onepay.min.js",
        "script",window, function () {
            console.log("Onepay JS library successfully loaded.");
        });
</script>
```
## Documentación 

Puedes encontrar toda la documentación de cómo usar este SDK en el sitio https://www.transbankdevelopers.cl.

La documentación relevante para usar este SDK es:

- Documentación general sobre el producto
  [Onepay](https://www.transbankdevelopers.cl/producto/onepay).
- Documentación sobre [ambientes, deberes del comercio, puesta en producción,
  etc](https://www.transbankdevelopers.cl/documentacion/como_empezar#ambientes).
- Primeros pasos con [Onepay](https://www.transbankdevelopers.cl/documentacion/onepay).
- Referencia detallada sobre [Onepay](https://www.transbankdevelopers.cl/referencia/onepay).

## Información para contribuir y desarrollar este SDK

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
3. Actualizar la versión declarada en `package.json` y `src/onepay-lib-version.js` para que tenga el valor `X.Y.Z` y ejecutar `npm run build`.

Luego de obtener aprobación del pull request, debe mezclarse a master e inmediatamente generar un release en GitHub con el tag `vX.Y.Z`. En la descripción del release debes poner lo mismo que agregaste al changelog.

Finalmente, debe crearse un nuevo PR (con título "Next release probably will be X.Y.{Z+1}") para incrementar el valor de Z en los archivos `package.json` y `src/onepay-lib-version.js` (y ejecutar `npm run build` para que también modifique los archivos en `lib/`) .

Es buena práctica luego actualizar [los proyectos de ejemplo](#proyectos-de-ejemplo) para que usen la nueva versión liberada.
