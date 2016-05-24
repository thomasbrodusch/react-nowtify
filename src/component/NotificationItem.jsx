/**
 * React-Nowtify 
 * Notification Item (Unique notification)
 */

class NotificationItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            convertClass: {
                'success' : 'check',
                'danger' : 'times',
                'warning' : 'warning',
                'info' : 'info'
            }
        };
    }

    componentDidMount(){
        this.showNotification(this.props.position, this.props.displayTimeout);
    }

    // Display Notification with a timeout.
    showNotification(id, timeout){
        setTimeout(function(){
            $('#notification-' + id).find('.ns-box')
                .removeClass('ns-show')
                .addClass('ns-hide')
            setTimeout(function(){
                $('#notification-' + id).hide();
            }, 500);
        }, timeout);
    }

    render() {

        var button;
        var alertClass = 'alert ns-box ns-growl ns-effect-slide ns-type-notice ns-show ' + this.props.data.class;
        var icon = 'fa fa-' + this.state.convertClass[this.props.data.class];

        if(this.props.data.dismissible){
            button = <button 
                        type="button" 
                        className="close" 
                        data-dismiss="alert" 
                        aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                    </button>;
        }

        return (
            <div id={'notification-' +this.props.position}>

                <div className={alertClass}>
                    <div className="alert-state">
                        <i className={icon}></i>
                    </div>

                    <div className={this.props.data.dismissible ? 'alert-dismissible' : 'alert'} role="flash">
                        {button}
                        <p>{this.props.data.message}</p>
                    </div>
                </div>
            </div>
        );

    }

};

module.exports = NotificationItem;
