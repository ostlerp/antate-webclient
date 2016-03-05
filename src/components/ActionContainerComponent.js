'use strict';

import React from 'react';
import FontIcon from 'material-ui/lib/font-icon';
import IconButton from 'material-ui/lib/icon-button';

require('styles//ActionContainer.scss');

const iconStyles = {
  fontSize: '6vw',
  margin: '0 15px',
  color: 'white'
};

const buttonStyles = {
  width: '100%',
  height: '100%'
};


class ActionContainerComponent extends React.Component {
  render() {
    return (
      <div className="actioncontainer-component">

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
