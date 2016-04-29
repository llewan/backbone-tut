// File 2

module.exports =  App.module("user", function(user, App, Backbone, Marionette, $, _, customArg1, customArg2){
    // Private Data And Functions
    var privateData = "this is private data";

    var privateFunction = function(){
        console.log(privateData);
    }

    this.someFunction = function(){
        privateFunction();
        console.log(this.someData);
    }
    console.log('module user' + customArg1);
});

