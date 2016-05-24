var html-webpack-plugin = require('html-webpack-plugin')
var html-webpack-plugin-config = new html-webpack-plugin({
  template: __dirname + '/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: [
    './index.js'
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  },
  output: {
    filename: "",
    path: __dirname + '/dist'
  },
  plugins: [HTMLWebpackPluginConfig]
}
