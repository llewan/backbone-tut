// src/javascripts/user/user.view.js

var Marionette = require('backbone.marionette');
var UserView = Marionette.ItemView.extend({
    
    template: require('../templates/create_user'),
    
    events: {
      'click #save-user': 'saveUser'
    },
    
    saveUser: function(evt) {
      console.log(evt);
      //this.model.save();
      //this.trigger('create:user', this.model);
    }
    
});

module.exports = UserView;