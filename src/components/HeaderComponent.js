'use strict';

import React from 'react';
import AppBar from 'material-ui/lib/app-bar';

class HeaderComponent extends React.Component {
  render() {
    return (
      <div className="header-component">
        <AppBar title="Antate" />
      </div>
    );
  }
}

HeaderComponent.displayName = 'HeaderComponent';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default HeaderComponent;
