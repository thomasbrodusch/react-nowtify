import { Nowtify } from './src/component/NotificationBox';

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

// Multiple notification
setTimeout(function(){
  Nowtify.show( NOTIFICATIONS_EXAMPLES, {
    containerID: 'nowtify-container',
    displayTimeout: 6000, // Defaut 5000ms
    dismissible: false
  });
}, 1000);


// Unique notification hide on close
$(document).ready(function(){
  let notification = [
    {
      message     : 'Ooops !',
      type       : 'warning',
      dismissible : true,
      hideOnClose: true
  }];

  let notifications =[ 
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

  $('button').click(function(){
    switch( $(this).data('action')) {
        case 'unique':
            

              Nowtify.show( notification, {
                  containerID: 'nowtify-container',
                  skin: 'growl',
                  displayTimeout: 3000, // Defaut 5000ms
                  dismissible: false
              });

            break;
        case 'multiple':
            Nowtify.show( notifications, {
              containerID: 'nowtify-container',
              displayTimeout: 6000, // Defaut 5000ms
              dismissible: false
            });
            break;
    }
  });
});

