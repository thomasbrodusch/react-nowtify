import React from 'react';
import ReactDOM from 'react-dom';
var Nowtify = require('react-nowtify');


Nowtify.init({
  containerID     : 'nowtify-wrapper', // Default: 'nowtify-wrapper'
  displayTimeout  : 6000,              // Default: 5000 (ms)
  dismissible     : true,            // Default: false
  keepHistory     : false,            // Default: true
  hideOnClose   : true, 
  sound           : true             // Default: true
});


Nowtify.show([{
  message:'Test with ES6 import ! ',
  type:'success',
  dismissible: true,
  hideOnClose: true,
}]);