var path = require('path'),
    webpack = require('webpack');

module.exports = {
  context: './src/javascripts/',

  entry: {
    app: 'initialize'
  },

  output: {
    path: './dist/app.js'
  },

  devtool: '#eval',

  resolve: {
    root: [
      path.resolve('./src/javascripts/'),
      path.resolve('./src/styles/')
    ],
    extensions: ['', '.js']
  },

  module: {
    loaders: [
      { test: /\.less$/, loader: 'style!css!less' }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      jquery: 'jquery',
      'window.jQuery': 'jquery',
      _: 'underscore',
      'Marionette': 'backbone.marionette'
    })
  ]
};
