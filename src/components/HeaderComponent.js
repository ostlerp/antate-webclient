'use strict';

import React from 'react';
import AppBar from 'material-ui/lib/app-bar';

class HeaderComponent extends React.Component {
  render() {
    return (
      <AppBar
        title="Antate" />
    );
  }
}

HeaderComponent.displayName = 'HeaderComponent';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default HeaderComponent;
