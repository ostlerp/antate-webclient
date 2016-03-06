'use strict';

import React from 'react';
import FontIcon from 'material-ui/lib/font-icon';
import IconButton from 'material-ui/lib/icon-button';
import LeftNav from 'material-ui/lib/left-nav';

require('styles//ActionContainer.scss');

const iconStyles = {
  fontSize: '6vw',
  color: 'white',
  margin: '0 20px',
};

const buttonStyles = {
  width: '100%',
  margin: '1.75vw 0'
};


class ActionContainerComponent extends React.Component {
  render() {

    let componentClass = 'actioncontainer-component';

    componentClass += this.props.isOpen ? ' open' : ' collapsed';

    return (
      <div className={componentClass}>

        <IconButton style={buttonStyles} iconStyle={iconStyles} >
          <FontIcon className="material-icons action-icon">add_a_photo</FontIcon>
        </IconButton>

        <IconButton style={buttonStyles} iconStyle={iconStyles} >
          <FontIcon className="material-icons action-icon" style={iconStyles}>restore</FontIcon>
        </IconButton>

        <IconButton style={buttonStyles} iconStyle={iconStyles} >
          <FontIcon className="material-icons action-icon" style={iconStyles}>share</FontIcon>
        </IconButton>

        <div className="action-spacer"></div>

        <IconButton style={buttonStyles} iconStyle={iconStyles} >
          <FontIcon className="material-icons action-icon" style={iconStyles}>lightbulb_outline</FontIcon>
        </IconButton>

        <IconButton style={buttonStyles} iconStyle={iconStyles} >
          <FontIcon className="material-icons action-icon" style={iconStyles}>local_cafe</FontIcon>
        </IconButton>
      </div>
    );
  }
}

ActionContainerComponent.displayName = 'ActionContainerComponent';

// Uncomment properties you need
// ActionContainerComponent.propTypes = {};
// ActionContainerComponent.defaultProps = {};

export default ActionContainerComponent;
