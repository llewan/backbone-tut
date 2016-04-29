// src/javascripts/user/user.model.js

var User = Backbone.Model.extend({
  
  defaults: {
    name: '',
    email: '',
    password: '',
  },
  
  initialize: function () {
    console.log("initialize client");
  }
});

module.exports = User;
