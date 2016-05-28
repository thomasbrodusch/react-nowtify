/**
 * Config for WebPack
 */
var webpack = require("webpack");

module.exports = {

	entry: {
    'react-nowtify' : './src/entry.js',
    'example'       : './example.js'
  },

	output: {
    path        : __dirname + '/dist',
    filename    : "[name].js",
    library     : "Nowtify",
    libraryTarget : "umd"
  },
    
  devtool: 'source-map',

  resolve: {

    alias: {
      "babel-polyfill"        : __dirname + '/node_modules/babel-polyfill/dist/polyfill.min.js',
      react                   : __dirname + '/node_modules/react/react.js',
      "react-dom"             : __dirname + '/node_modules/react-dom/dist/react-dom.min.js',
    },

    extensions: [
      '', 
      '.min.js', 
      '.js', 
      '.jsx',
    ]

  },

  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel', 'eslint'],
        exclude: /node_modules/
      }
    ],
    loaders: [
        {
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel'
        },
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader?sourceMap'
        }
    ]
  },
}
