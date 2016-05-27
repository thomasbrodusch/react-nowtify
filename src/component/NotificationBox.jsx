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
        defaultConfig: {}
      };
    }
    
    componentWillMount(){
      this.setConfig();
      this.handleNewNotifications(this.props.notifications);
    }

    componentWillUpdate(props){
      this.handleNewNotifications(props.notifications);
    }

    setConfig(){
      this.setState({
        defaultConfig: {
          displayTimeout: this.props.config.displayTimeout ? this.props.config.displayTimeout : 5000,
          transition: this.props.config.transition ? this.props.config.transisiton :'growl',
          dismissible: this.props.config.dismissible ? this.props.config.dismissible :false,
          sound: this.props.config.sound ? this.props.config.sound :false,
        }
      })
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
     * Display one notification
     * @param  {} notification JSON formatted notification
     * @return  inject new notification to the component notifications pool.
     */
    addNotification(notification){
      return this.state.notifications.push(notification);
    }

    render() {
      return (
        <div className="nowtify-box">                    
          <NotificationList 
            data={this.state.notifications} 
            config={this.state.defaultConfig}
          />
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
    <NotificationBox notifications={notifications} config={params} />,
    document.getElementById(params.containerID)
  );
};


export let Nowtify = { show };