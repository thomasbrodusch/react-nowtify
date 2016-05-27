/**
 * React-Nowtify 
 * Notification Box (Notifications container)
 */
import NotificationList from './NotificationList';
const style = require('../style.css');


class NotificationBox extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        notifications : [],
        defaultConfig: {
          displayTimeout: props.config.displayTimeout ? props.config.displayTimeout : 5000,
          transition: props.config.transition ? props.config.transisiton :'growl',
          dismissible: props.config.dismissible ? props.config.dismissible :false
        }
      };
    }

    handleNewNotification(notifications){
      if(notifications.length > 1){
          this.multipleNotification(notifications);
      }else{
        this.singleNotification(notifications[0]);
      }
    }

    singleNotification(notification, fix){
      this.state.notifications.push(notification);
    }

    multipleNotification(notificationArray){
      notificationArray.map(function(notification){
        this.singleNotification(notification)
      }.bind(this));
    }

    render() {
      this.handleNewNotification(this.props.notifications);
      return (
        <div className="nowtify-box">                    
          <NotificationList data={this.state.notifications} config={this.state.defaultConfig}/>
        </div>

      );
    }

};

/**
 * Show an array of notifications
 * @param  [] notifications Array of formated notifications.
 * @return {[type]}               [description]
 */
function show(notifications, params){
  ReactDOM.render(
    <NotificationBox notifications={notifications} config={params}/>,
    document.getElementById(params.containerID)
  );
};

export let Nowtify = {
  show
};
