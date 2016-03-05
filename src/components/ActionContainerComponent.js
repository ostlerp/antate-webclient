'use strict';

import React from 'react';
import FontIcon from 'material-ui/lib/font-icon';

require('styles//ActionContainer.scss');

const iconStyles = {
  fontSize: '3em',
  color: 'white'
};


class ActionContainerComponent extends React.Component {
  render() {
    return (
      <div className="actioncontainer-component">
        <FontIcon className="material-icons action" style={iconStyles}>add_a_photo</FontIcon>
        <FontIcon className="material-icons action" style={iconStyles}>restore</FontIcon>
        <FontIcon className="material-icons action" style={iconStyles}>share</FontIcon>

        <div className="action-spacer"></div>

        <FontIcon className="material-icons action" style={iconStyles}>bug_report</FontIcon>
        <FontIcon className="material-icons action" style={iconStyles}>thumb_up</FontIcon>
      </div>
    );
  }
}

ActionContainerComponent.displayName = 'ActionContainerComponent';

// Uncomment properties you need
// ActionContainerComponent.propTypes = {};
// ActionContainerComponent.defaultProps = {};

export default ActionContainerComponent;
