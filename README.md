# Backbone inception

Ejercicio para practicar el uso de [Backbone](http://backbonejs.org/) y [Backbone.Marionette](http://marionettejs.com/).

## Documentación

* [Oficial de Backbone](http://backbonejs.org/)
* [Oficial de Marionette](http://marionettejs.com/)

## Ejercicio

1. Forkear y clonar el repositorio localmente.
2. Crear un **branch** desde ``master``. El nombre podría ser el id del ticket de JIRA.
3. Instalar dependencias con ``npm install``.
4. El ejercicio consiste en armar una mini app que interactue con la API de Preguntados y se muestren 2 pantallas:
  a. Pantalla de Registro de usuario.
  b. Pantalla de Dashboard
5. Realizar un **pull request** a ``master`` con la resolución.

### Funcionamiento

* La pantalla del registro de usuario debe crear un usuario usando este [recurso de API](http://confluence.etermax.com/confluence/pages/viewpage.action?pageId=12059865). Usar un formulario en el que pida usuario, email y contraseña.
* Dado el registro exitoso exitoso se debe mostrar la pantalla de Dashboard usando este [recurso de API](http://confluence.etermax.com/confluence/pages/viewpage.action?pageId=18090247). Se debe mostrar la lista de juegos, vidas, monedas, tiros extra, mensajes.
* Se deben crear los modelos y las vistas y/o layouts necesarios.

