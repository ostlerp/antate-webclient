import React from 'react';
require('styles//App.scss');

import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
import MyTheme from '../theme/material-theme';
import HeaderComponent from './HeaderComponent';
import ActionContainerComponent from './ActionContainerComponent';

class AppComponent extends React.Component {

  render() {

    console.log(this.props);

    return (
      <MuiThemeProvider className="index" muiTheme={MyTheme}>
        <div className="index">
          <HeaderComponent />

          <div className="content">
            <ActionContainerComponent />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

AppComponent.displayName = 'AppComponent';

AppComponent.defaultProps = {
};

export default AppComponent;
