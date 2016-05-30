
![Nowtify logo](https://github.com/tom4dev/react-nowtify/blob/develop/logo.png?raw=true)
# React-Nowtify
###### Version 0.2.2

![Nowtify Demo](https://github.com/tom4dev/react-nowtify/blob/develop/nowtify-demo.gif?raw=true)

A tiny library (~20K) to display lovely notifications based on React.
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

### Install it with [NPM](https://www.npmjs.com/package/react-nowtify)
```sh
$ npm i react-nowtify --save
```


### Import React / ReactDOM / React-Nowtify 
### Script tag

```html   
<!-- Font-Awesome Css Lib for icons. -->
<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">
.
.
.
<!-- React & React DOM -->
<script src="https://fb.me/react-15.1.0.min.js"></script>
<script src="https://fb.me/react-dom-15.1.0.min.js"></script>

<!-- React-Nowtify -->
<script src="node_modules/react-nowtify/dist/react-nowtify.js"></script>
```

### or ES6 import in your project

```javascript
import React from 'react';
import ReacDOM from 'react-dom';
import Nowtify from 'react-nowtify';
```

# Init Nowtify 

```javascript
Nowtify.init({
  containerID     : 'ID_CONTAINER',
  displayTimeout  : 6000,         // Default 5000ms
  dismissible     :  false        // Default false
  sound           : true          // Default: false
});
```

# Format your notifications and pass it to Nowtify

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

Tip: You can try React-Nowtify by open 'index.html' and see some example by open ['Examples.js'](https://github.com/tom4dev/react-nowtify/blob/master/examples.js) in his root folder (node_modules/react-nowtify/).



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
 - css >>> Sass 
 - Add transition/animation options
 - Add skin
 - Enable skin customisation

License
----

MIT


**Free Software, Hell Yeah!**



 
