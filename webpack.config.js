var webpack = require('webpack');
 
module.exports = {
  context: './src/javascripts', 
  entry: ['./main.js'],
  output: {
    filename: './dist/bundle.js'       
  },
  module: {
    loaders: [
      { test: /\.less$/, loader: 'style!css!less' },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.png$/, loader: "url-loader?mimetype=image/png" },
    ]
  },
  plugins : [ new webpack.ProvidePlugin({
      $ : "jquery",
      jquery : "jquery",
      Backbone : "backbone",
      _ : "underscore",
      'Marionette': 'backbone.marionette'
  }) ]
};