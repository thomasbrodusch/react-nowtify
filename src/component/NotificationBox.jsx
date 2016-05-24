/**
 * React-Nowtify 
 * Notification Box (Notifications container)
 */

import NotificationList from './NotificationList';

class NotificationBox extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        notifications : []
      };
    }

    handleNewNotification(notification){
      if(this.props.isArray){
          this.multipleNotification(notification);
      }else{
        this.singleNotification(notification);
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
      this.handleNewNotification(this.props.data);
      return (
        <div id="notification-box">                    
          <NotificationList data={this.state.notifications}/>
        </div>

      );
    }

};

module.exports = NotificationBox;
