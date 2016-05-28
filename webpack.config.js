/**
 * Config for WebPack
 */
var webpack = require("webpack");

module.exports = {

	entry: {
    'react-nowtify' : './entry.js',
    'examples'       : './examples.js'
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
      react                   : __dirname + '/node_modules/react/dist/react.min.js',
      "react-dom"             : __dirname + '/node_modules/react-dom/dist/react-dom.min.js',
      assets                  : __dirname + '/assets'
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
        exclude: [/node_modules/, /dist/]
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
