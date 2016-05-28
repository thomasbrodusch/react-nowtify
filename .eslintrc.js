var OFF = 0, WARN = 1, ERROR = 2;
 
module.exports = exports = {
  env: {
    'es6': true,        // We are writing ES6 code
    'browser': true,    // for the browser
    'commonjs': true    // and use require() for stylesheets
  },
  ecmaFeatures: {
    'jsx': true,
    'modules': true
  },
  plugins: [
    'react'
  ],
  //"extends": "airbnb",
  rules: {
    "strict" : OFF,
    "no-console": OFF,
    "new-cap": OFF,
    "strict": OFF,
    "no-underscore-dangle": OFF,
    "no-use-before-define": OFF,
    "eol-last": OFF,
    "quotes": [ERROR, "single"],
    "jsx-quotes": WARN,
    "react/jsx-no-undef": WARN,
    "react/jsx-uses-react": WARN,
    "react/jsx-uses-vars": WARN
  },
  parser: "babel-eslint",
  parserOptions: {
      "sourceType": "module",
  }
}