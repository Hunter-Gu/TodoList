const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const ASSET_PATH = process.env.ASSET_PATH || './src'

module.exports = {
	entry: './src/index.js',
  output: {
    path: path.join(__dirname, './src'),
    filename: './src/bundle.js',
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html'
    }),
    new OpenBrowserPlugin({
      url: 'http://localhost:4300'
    }),
    new webpack.DefinePlugin({
      'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loaders: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  devServer: {
    compress: true,
    port: 4300
  }
}