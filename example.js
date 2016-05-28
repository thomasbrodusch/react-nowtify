import { Nowtify } from './dist/react-nowtify';

console.log(Nowtify);

var NOTIFICATIONS_EXAMPLES =[ 
    {
        message     : 'Welcome on Nowtify',
        type       : 'success',
    },
    {
        message     : 'An error ? No problem !',
        type       : 'danger',
        displayTimeout : 3000

    },
    {
        message     : 'May the force be with you...',
        type       : 'default',
        displayTimeout : 1000
    },
    {
        message     : '... and Feel free to fork this repo !',
        type        : 'info',
        icon        : 'code-fork'
    }
];

var notification = [
    {
      message     : 'Ooops !',
      type       : 'warning',
      dismissible : true,
      hideOnClose: true
  }];

   var notificationWithSound = [
    {
      message     : 'Woooot Wooot ! I\'m a notification with sound !',
      type       : 'success',
      icon        : 'rebel',
      dismissible : true,
      sound: true
  }];

  var notifications =[ 
    {
        message     : 'This a cute success message, sexy isn\'t it ?',
        type       : 'success',
    },
    {
        message     : 'This an error message, be careful !',
        type       : 'danger',
        displayTimeout : 3000

    },
    {
        message     : 'Information: you\'re using a great component',
        type       : 'info',
    }
];

// 1 — Init Nowtify
Nowtify.init({
  containerID     : 'nowtify-wrapper', // Default: 'nowtify-wrapper'
  displayTimeout  : 6000,     // Default: 5000 (ms)
  dismissible     : false,    // Default: false
  keepHistory     : false,    // Default: true
  sound           : false     // Default: true
});

// 2 — You can get the config
console.info('Nowtify configuration : ', Nowtify.getConfig());

// 3 - You can set/edit when you want config
let newConfig = {
  displayTimeout  : 3000, 
  dismissible     : true,
  sound           : false
};

console.info('Nowtify new configuration set : ', Nowtify.setConfig(newConfig))

// 4 — Show some notifications !
/**
* Multiple notification
*/
setTimeout(function(){
  Nowtify.show( NOTIFICATIONS_EXAMPLES);
}, 1000);

/**
 * Unique notification hide on close
 */
$(document).ready(function(){
  
  console.log("CONFIG >", Nowtify.getConfig() );
   

    // Actions on button click.
    $('button').click(function(){
      switch( $(this).data('action')) {
          case 'unique':
              

                Nowtify.show( notification );

              break;
          case 'multiple':
              Nowtify.show( NOTIFICATIONS_EXAMPLES );
              break;
           case 'withSound':
              

                Nowtify.show( notificationWithSound );

              break;
      }
    });
 // });
});

