/**
 * Config for WebPack
 */
var webpack = require("webpack");
var libraryName = "react-nowtify";

module.exports = {

	entry: './src/entry.js',
	output: {
    path        : __dirname + '/dist',
    filename    : libraryName + '.js',
    library     : 'Nowtify',
    libraryTarget : 'umd',
    umdNamedDefine : true
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
        test: /(\.jsx|\.js)$/,
        loaders: ['babel', 'eslint'],
        exclude: /(node_modules|dist)/
      }
    ],
    loaders: [
        {
            test: /(\.jsx|\.js)$/,
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
