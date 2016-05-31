
![Nowtify logo](https://github.com/tom4dev/react-nowtify/blob/develop/logo.png?raw=true)
# React-Nowtify
###### Version 0.3.0

![Nowtify Demo](https://github.com/tom4dev/react-nowtify/blob/develop/nowtify-demo.gif?raw=true)

A tiny library (~20K) to display lovely notifications based on React.
author: Thomas Brodusch

### Tech
___

Nowtify uses a number of open source projects to work properly:

* [ReactJS](https://facebook.github.io/react/) - A JavaScript library for building User Interfaces.
* [Font-Awesome](http://fontawesome.io/) - The iconic font & css toolkit !
* [NotificationSounds](https://notificationsounds.com/) — Sound under Creative Common license

 
### Usage
___

Nowtify requires [React](https://facebook.github.io/react/) and [Font-Awesome](http://fontawesome.io/) to run.


### Script tag
Add the following code towards the head section on your page. (To get Font-Awesome Icon)

```html   
<!-- Font-Awesome Css Lib for icons. -->
<link rel="stylesheet" type="text/css" href="node_modules/font-awesome/css/font-awesome.min.css">
```

Add the following code towards the end of the body section on your page. Placing it at the end allows the rest of the page to load first.

```html
<!-- React-Nowtify -->
<script src="node_modules/react-nowtify/dist/react-nowtify.js"></script>
```

Define the wrapper in your HTML

```html 
  <div id="nowtify-wrapper"></div>
```

Initialize the plugin using this code snippet

```html 
 <script>
  Nowtify.init({
    localPath       : '/node_modules/react-nowtify/' // Local path of Nowtify folder, Default: '/node_modules/react-nowtify'
    containerID     : 'ID_CONTAINER', // Default: 'nowtify-wrapper'
    displayTimeout  : 6000,         // Default 5000ms
    dismissible     :  false        // Default false
    sound           : true          // Default: false
  });
 </script>
```

### Browserify and Webpack

Install from [NPM](https://www.npmjs.com/package/react-nowtify)
```sh
$ npm i react-nowtify --save
```

Require and init
```javascript
import React from 'react';
import ReacDOM from 'react-dom';

var Nowtify =  require('react-nowtify');
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


Tip: You can try React-Nowtify by open 'index.html' and see some examples in ['examples/'](https://github.com/tom4dev/react-nowtify/tree/master/examples) folder.



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