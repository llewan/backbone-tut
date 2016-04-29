var Marionette = require('backbone.marionette');
var User = require('./user/user.model');
var View = require('./user/user.view');
var Router = require('./router');

module.exports = Marionette.Object.extend({
  initialize: function(options) {
    //this.container = options.container;
    this.container = $('#content');
    this.router = new Router({ controller: this });
  },

  customize: function() {
    this.model = new User();
    this.render();
  },

  render: function() {
    this.view = new View({ model: this.model });
    this.container.show(this.view);
  }
});