/**
 * Config for WebPack
 */
var webpack = require("webpack");

module.exports = {

	entry: {
    App         : ['./src/react-notify.js'],
  },

	output: {
    path        : __dirname + '/dist',
    filename    : "[name].js"
  },
    
  devtool: 'source-map',

  resolve: {

    alias: {
      "babel-polyfill"        : __dirname + '/node_modules/babel-polyfill/dist/polyfill.min.js',
      react                   : __dirname + '/node_modules/react/react.js',
      "react-dom"             : __dirname + '/node_modules/react-dom/dist/react-dom.js',
    },

    extensions: [
      '', 
      '.min.js', 
      '.js', 
      '.jsx',
    ]

  },

  plugins: [
    new webpack.ProvidePlugin({
      React           : "react",
      ReactDOM        : "react-dom",
    })
  ],

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
        }
    ]
  },
}
