/**
 * React-Nowtify 
 * Notification Item 
 */
require('../style.css');

class NotificationItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        convertClass: {
            'success' : 'check',
            'danger' : 'times',
            'warning' : 'warning',
            'info' : 'info',
            'default': 'rebel'
        },
        cssClass: new Array(
            'nowtify-box__notification-item',
            'nowtify-box__notification-item_growl',
            'nowtify-box__notification-item_slideRight'
        )
    };
  }

  componentDidMount(){
    this.showNotification(this.props.data.displayTimeout ?  this.props.data.displayTimeout : this.props.displayTimeout);
  }

  /**
   * Display the notification during a timeout
   * @param  int displayTimeout during of display
   */
  showNotification(displayTimeout){
    return setTimeout(function(){
        let newItemClass = this.state.cssClass;
        newItemClass.splice(newItemClass.indexOf('nowtify-box__notification-item_slideRight'), 1, 'nowtify-box__notification-item_slideLeft');
        this.setState({
            cssClass: newItemClass
        });
        this.hideNotification();
    }.bind(this), displayTimeout);
  }
  
  /**
   * Hide the notification
   */
  hideNotification(noTimeout = false){
    let hide;
    if(noTimeout){
        hide = this.setState({
          cssClass: this.state.cssClass.concat(['nowtify-box__notification-item_hide'])
        });
    } else {
      hide = setTimeout(function(){
              this.setState({
              cssClass: this.state.cssClass.concat(['nowtify-box__notification-item_hide'])
             });
      }.bind(this), 400);
    }
    return hide;
  }

  /**
   * Dynamically update the notification's css properties
   */
  itemCssClass(){
    let cssClass = {
      itemClass: this.state.cssClass.join(' ') 
                + ' ' + this.props.data.className
                + ' ' + this.props.data.dismissible ? 'nowtify-box__notification-item_dismissible' : '',
      iconClass: 'nowtify-box__notification-item__icon_' + this.props.data.class,
      fontAwesomeIcon: 'fa fa-' + this.state.convertClass[this.props.data.class]
    };
    cssClass.itemClass = this.state.cssClass.join(' ');
    cssClass.itemClass += ' ' + this.props.data.class;
    cssClass.itemClass += ' ' + this.props.data.dismissible ? 'nowtify-box__notification-item_dismissible' : '';
    return cssClass;
  }

  /**
   * Hide notification on click 
   */
  handleCloseClick(){
    return this.hideNotification();
  }

  render() {
    let closeButton = this.props.data.dismissible ? <div className="nowtify-box__notification-item__close" 
                            aria-label="Close"
                            onClick={() => this.hideNotification(true)}>
                            <i className="fa fa-times" aria-hidden="true"></i>
                        </div> : false ;
    let css = this.itemCssClass();
    return (
      <div className={css.itemClass}
          data-nowtify-notification-id={this.props.position}>

        <div className={'nowtify-box__notification-item__icon ' + css.iconClass}>
            <i className={css.fontAwesomeIcon} aria-hidden="true"></i>
        </div>
          <div className="nowtify-box__notification-item__message">
              <p>{this.props.data.message}</p>
          </div>

          {closeButton}

      </div>
    );
  }
};

export default NotificationItem;