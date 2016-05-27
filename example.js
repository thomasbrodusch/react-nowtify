import { Nowtify } from './src/component/NotificationBox';

var MSG_EXAMPLE =[ 
    {
        message     : 'This a cute success message, sexy isn\'t it ?',
        class       : 'success',
        dismissible : 1
    },
    {
        message     : 'This an error message, be careful !',
        class       : 'danger',
        dismissible : 0
    },
    {
        message     : 'Ooops !',
        class       : 'warning',
        dismissible : 1
    },
    {
        message     : 'May the force be with you...',
        class       : 'default',
        dismissible : 0
    }
];

Nowtify.show('nowtify-container', MSG_EXAMPLE, 'nowtify-container');


setTimeout(function(){
  Nowtify.show('nowtify-container', [MSG_EXAMPLE[1]], 'nowtify-container');
}, 1000);