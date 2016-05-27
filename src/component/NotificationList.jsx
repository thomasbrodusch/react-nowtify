/**
 * React-Nowtify 
 * Notification List (Notifications list)
 */
import NotificationItem from './NotificationItem';

const NotificationList = ({data, config}) => {
    let notificationNodes = data.map(function(notification, index){
        return (
          <NotificationItem 
            key={index} 
            data={notification} 
            position={index} 
            displayTimeout={config.displayTimeout} 
          />
        );
    }.bind(this));

    return (
        <div className="nowtify__notification-list">
          {notificationNodes}
        </div>
    );
};

export default NotificationList;