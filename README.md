
![Nowtify logo](https://github.com/tom4dev/react-nowtify/blob/develop/logo.png?raw=true)
# React-Nowtify
###### Version 0.1.0

![Nowtify Demo](https://github.com/tom4dev/react-nowtify/blob/develop/nowtify-demo.gif?raw=true)

A tiny React component who displays lovely notifications.
author: Thomas Brodusch

### Tech
___

Nowtify uses a number of open source projects to work properly:

* [ReactJS](https://facebook.github.io/react/) - A JavaScript library for building User Interfaces.
* [Font-Awesome](http://fontawesome.io/) - The iconic font & css toolkit !
* [NotificationSounds](https://notificationsounds.com/) — Sound under Creative Common license

 
### Installation
___

Nowtify requires [React](https://facebook.github.io/react/) and [Font-Awesome](http://fontawesome.io/) to run.

> Install it with [NPM](https://www.npmjs.com/package/react-nowtify)
```sh
$ npm i react-nowtify --save
```


 > Initialize Nowtify
```javascript
import Nowtify from 'react-nowtify'

Nowtify.init({
  containerID     : 'ID_CONTAINER',
  displayTimeout  : 6000,         // Default 5000ms
  dismissible     :  false        // Default false
  sound           : true          // Default: false
});
```

> Format your notifications and pass it to Nowtify
```javascript
var notifications = [
    {
      message     : 'The message of your first notification',
      type        : 'success', // 'succes','info','warning', 'danger'
      icon        : 'rebel',  // Default: false (You can specify a specific font-awesome icon !)
      dismissible : true,     // Default: false
      hideOnClose : true,     // Default: false
      sound       : true      // Default: false
    }
];
Nowtify.show( notifications );
```
### et voilà !
Have a look on 'examples.js' ;)




### Development
___
Want to contribute? Great!

Nowtify uses [Webpack](https://webpack.github.io/docs/) for fast developing.
Make a change in your file and instantanously see your updates!

Open your favorite Terminal and run these commands.

```sh
$ git clone https://github.com/tom4dev/react-nowtify nowtify
$ cd nowtify
$ npm install
$ npm start
```

Developpment mode watcher (Webpack):
```sh
$ npm run watch
```

... And you're ready to code !

### Todos
 - proptype ... 
 - Add transition/animation options
 - Add skin
 - Enable skin customisation

License
----

MIT


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


 
