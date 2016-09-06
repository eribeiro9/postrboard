import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';

import { LeftNav } from '../../components';

export const AppLayout = (props) => (
  <MuiThemeProvider>
    <div>
      <LeftNav />
      <div className="app-content">
        { props.children }
      </div>
    </div>
  </MuiThemeProvider>
);

AppLayout.propTypes = {
  children: React.PropTypes.element,
};
