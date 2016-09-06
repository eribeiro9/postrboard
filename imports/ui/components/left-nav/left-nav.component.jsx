import React from 'react';
import Drawer from 'material-ui/Drawer';

import { AppNavContainer } from '../../containers';

export class LeftNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      windowWidth: window.innerWidth,
    };

    this.handleResize = this.handleResize.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.setState({ windowWidth: window.innerWidth });
  }

  toggleDrawer() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    if (this.state.windowWidth > 800) {
      return (
        <Drawer>
          <AppNavContainer />
        </Drawer>
      );
    }

    return (
      <Drawer
        open={ this.state.isOpen }
        docked={ false }
        onRequestChange={(open) => this.setState({ isOpen: open })}
      >
        <AppNavContainer />
      </Drawer>
    );
  }
}
