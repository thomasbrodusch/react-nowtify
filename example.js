import { Nowtify } from './src/component/NotificationBox';

var NOTIFICATIONS_EXAMPLES =[ 
    {
        message     : 'This a cute success message, sexy isn\'t it ?',
        class       : 'success',
        dismissible : 1
    },
    {
        message     : 'This an error message, be careful !',
        class       : 'danger',
        dismissible : 0,
        displayTimeout : 3000

    },
    {
        message     : 'Ooops !',
        class       : 'warning',
        dismissible : 1
    },
    {
        message     : 'May the force be with you...',
        class       : 'default',
        dismissible : 0,
        displayTimeout : 1000
    },
    {
        message     : 'Information: you\'re using a great component',
        class       : 'info',
        dismissible : 0
    }
];

Nowtify.show( NOTIFICATIONS_EXAMPLES, {
  containerID: 'nowtify-container',
  transition: 'growl',
  displayTimeout: 6000, // Defaut 5000ms
  dismissible: false
});

