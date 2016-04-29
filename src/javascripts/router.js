/*
var AppRouter = Backbone.Router.extend({
  routes: {
    "dashboard": "dashboard",
    "*actions": "register"
  }
});

module.exports = new AppRouter;
*/

// customize_magnet/router.js
var Marionette = require('backbone.marionette');

module.exports = Marionette.AppRouter.extend({
  appRoutes: {
    'customize_magnet': 'customize'
  }
});