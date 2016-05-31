/**
 * React-Nowtify 
 * Notification Box (Notifications container) 
*/
import React from 'react';
import ReactDOM from 'react-dom';
import NowtifyItem from './NowtifyItem';
import { defaultConfig, defaultNotificationSound } from '../const';
import 'assets/style.css';


let _notifications = [];
let _config = defaultConfig;


class NowtifyBox extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        notificationSound: new Audio(_config.localPath + 'dist/' + defaultNotificationSound)
      };
    }
    
    componentWillMount(){
      this.handleNewNotifications(this.props.notifications);
    }

    componentWillUpdate(props){
      this.handleNewNotifications(props.notifications);
    }
    
    /**
     * Dispatch notifications
     * @param  [] notifications Array of formatted notifications (JSON)
     * @return {[type]}               [description]
     */
    handleNewNotifications(notifications){
      notifications.map(function(notification){
        this.addNotification(notification)
      }.bind(this));
    }

    /**
     * Display a notification
     * @param  {} notification JSON formatted notification
     * @return  inject new notification to the component notifications pool.
     */
    addNotification(notification){
      return _notifications.push(notification);
    }

    /**
     * TODO
     * Remove a notification
     * @param  {} notification JSON formatted notification
     * @return  inject new notification to the component notifications pool.
     */
    removeNotification(id){
      // TODO
      // HINT: ajouter les notifications avec un systeme key:value ou (key est un timestamp)
      /*
      
       if(!this.state.keepHistory){
        console.log('Remove ', _notification[id]);      
      }*/
      return true;
    }

    /**
     * Play soung on new notification
     * @return {[type]} [description]
     */
    playNotificationSound(notificationSound){
      if (notificationSound || this.props.config.sound ){
        return this.state.notificationSound.play();
      }
      return false;
    }

    render() {
      let notificationNodes = _notifications.map(function(notification, index){
        return (
          <NowtifyItem 
            key={index} 
            data={notification} 
            position={index} 
            displayTimeout={this.props.config.displayTimeout}
            onRemove={(id) => this.removeNotification(id)}
            playSound={() => this.playNotificationSound(notification.sound)} 
          />
      );
    }.bind(this));
      return (
        <div className="nowtify-box">       
          <div className="nowtify-box__notification-list">
            {notificationNodes}
          </div>             
        </div>
      );
    }
};


/**
 * Init Nowtify
 * @param  {} config configuration JSON formatted
 * @return {[type]}        [description]
 */
function init(config){
  return setConfig(config);
}

/**
 * Show an array of notifications
 * @param  [] notifications Array of formated notifications.
 * @return {[type]}               [description]
 */
function show(notifications){
  ReactDOM.render(
    <NowtifyBox config={_config} notifications={notifications}/>,
    document.getElementById(_config.containerID)
  );
};


/**
 * Set Nowtify configuration
 * @param {} config JSON object
 */
function setConfig(config){
  _config =  {
    localPath: config.localPath ? config.localPath : _config.localPath,
    containerID: config.containerID ? config.containerID : _config.containerID,
    displayTimeout: config.displayTimeout ? config.displayTimeout : _config.displayTimeout,
    transition: config.transition ? config.transisiton :_config.transition,
    sound: config.sound ? config.sound : _config.sound,
    dismissible: config.dismissible ? config.dismissible : _config.dismissible,
    keepHistory: config.dismissible ? config.dismissible : _config.keepHistory,
  };
  return _config;
}

/**
 * Get Nowtify configuration
 * @return {} config JSON object
 */
function getConfig(){
  return _config;
}

export { 
  init, 
  getConfig, 
  setConfig,
  show 
};