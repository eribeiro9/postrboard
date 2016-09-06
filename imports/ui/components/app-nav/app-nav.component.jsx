import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Person from 'material-ui/svg-icons/social/person';
import Home from 'material-ui/svg-icons/action/home';
import ViewList from 'material-ui/svg-icons/action/view-list';
import Flag from 'material-ui/svg-icons/content/flag';
import Settings from 'material-ui/svg-icons/action/settings';

export const AppNav = ({ user }) => (
  <List>
    <ListItem disabled
      leftAvatar={ <Avatar icon={<Person />} /> }
    >
      { user.name }
    </ListItem>

    <Divider />
    <Subheader>Navigation</Subheader>

    <ListItem
      primaryText="Home"
      leftIcon={ <Home /> }
      onTouchTap={ () => FlowRouter.go('landing') }
    />
    <ListItem
      primaryText="Boards"
      leftIcon={ <ViewList /> }
      onTouchTap={ () => FlowRouter.go('boards') }
    />
    <ListItem
      primaryText="Notifications"
      leftIcon={ <Flag /> }
      onTouchTap={ () => FlowRouter.go('notifications') }
    />
    <ListItem
      primaryText="Settings"
      leftIcon={ <Settings /> }
      onTouchTap={ () => FlowRouter.go('settings') }
    />

    <Divider />
  </List>
);

AppNav.propTypes = {
  user: React.PropTypes.object,
};
