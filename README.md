# Backbone inception

Ejercicio para practicar el uso de [Backbone](http://backbonejs.org/) y [Backbone.Marionette](http://marionettejs.com/).

## Documentación

* [Oficial de Backbone](http://backbonejs.org/)
* [Overview general de Gulp](https://www.smashingmagazine.com/2014/06/building-with-gulp/)
* [Documentación oficial de Gulp﻿](https://github.com/gulpjs/gulp)
    * [Getting Started with Gulp﻿](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
    * [Gulp API﻿﻿﻿](https://github.com/gulpjs/gulp/blob/master/docs/API.md)

## Ejercicio

1. Instalar dependencias con ``npm install``.
2. Copiar el archivo src/index.html a dist/index.html.
3. Compilar SASS. Implementar una tarea que tome el archivo src/styles/custom-bootstrap.scss y lo compile a CSS dejándolo en dist/styles/styles.css
4. Concat, lint y uglify del JS. Concatenar los archivos JS de ``bootstrap-sass`` (bootstrap-sass/assets/javascript/bootstrap) junto con el archivo src/javascripts/app.js, ejecutarle el JSHint (instalar dependencia), pasarle un uglify y finalmente alojarlo en dist/javascripts/app.min.js