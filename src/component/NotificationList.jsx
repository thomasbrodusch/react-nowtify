/**
 * React-Nowtify 
 * Notification List (Notifications list)
 */

import NotificationItem from './NotificationItem';

function NotificationList({ data }) {
    var notificationNodes = data.map(function(notification, index){
        return (
          <NotificationItem key={index} data={notification} position={index} displayTimeout={5000} />
        );
    });

    return (
        <div className="notif-info">
          {notificationNodes}
        </div>
    );
};

module.exports = NotificationList;