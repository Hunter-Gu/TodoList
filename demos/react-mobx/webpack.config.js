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
      url: 'http://localhost:3500'
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
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    compress: true,
    port: 3500
  }
}