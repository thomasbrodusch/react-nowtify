/**
 * React-Nowtify 
 * Notification Item 
 */
import React from 'react';

class NowtifyItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        convertClass: {
            'success' : 'check',
            'danger' : 'times',
            'warning' : 'warning',
            'info' : 'bell',
            'default': 'rebel'
        },
        cssClass: new Array(
            'nowtify-box__notification-item',
            'nowtify-box__notification-item_growl',
            'nowtify-box__notification-item_slideRight'
        )
    };
  }

  componentWillMount(){
    this.show(this.props.data.displayTimeout ?  this.props.data.displayTimeout : this.props.displayTimeout);
  }

  /**
   * Display notification during a timeout
   * @param  int displayTimeout during of display
   */
  show(displayTimeout){
    this.props.playSound();  
    
    return setTimeout(function(){
      let newItemClass = this.state.cssClass;
       if (!this.props.data.hideOnClose) {
        newItemClass.splice(newItemClass.indexOf('nowtify-box__notification-item_slideRight'), 1, 'nowtify-box__notification-item_slideLeft');
        this.hide();
      }
      this.setState({
          cssClass: newItemClass
      });
    }.bind(this), displayTimeout);
  }
  
  /**
   * Hide notification
   * @param boolean noTimeout timeout to hide
   */
  hide(noTimeout = false){
    if(noTimeout){
      this.setState({
        cssClass: this.state.cssClass.concat(['nowtify-box__notification-item_hide'])
      });
    } else {
      setTimeout(function(){
        this.setState({
          cssClass: this.state.cssClass.concat(['nowtify-box__notification-item_hide'])
        });
      }.bind(this), 400);
    }
    this.props.onRemove(this.props.position);

  }

  /**
   * Dynamically update the notification's css properties
   */
  itemCssClass(){
    let cssClass = {
      itemClass: this.state.cssClass.join(' ') 
        + ' ' + this.props.data.className
        + ' ' + this.props.data.dismissible ? 'nowtify-box__notification-item_dismissible' : '',
      iconClass: 'nowtify-box__notification-item__icon_' + this.props.data.type,
      fontAwesomeIcon: this.iconCssClass(this.props.data.icon)
    };
    cssClass.itemClass = this.state.cssClass.join(' ');
    cssClass.itemClass += ' ' + this.props.data.class;
    cssClass.itemClass += ' ' + this.props.data.dismissible === true ? 'nowtify-box__notification-item_dismissible' : '';
    return cssClass;
  }

  /**
   * Convert a type/icon to a Font-Awesome icon
   * @param  string icon 
   * @return string      Font-Awesome formated icon
   */
  iconCssClass(icon){
    if( icon === undefined ) {
      icon = this.state.convertClass[this.props.data.type] != undefined ? this.state.convertClass[this.props.data.type] : this.props.data.type;
    }
    return 'fa fa-' + icon;
  }


  /**
   * Hide notification on click 
   */
  handleCloseClick(){
    return this.hide();
  }

  render() {
    let closeButton = this.props.data.dismissible ? <div className="nowtify-box__notification-item__close" 
                            aria-label="Close"
                            onClick={() => this.hide(true)}>
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

export default NowtifyItem;