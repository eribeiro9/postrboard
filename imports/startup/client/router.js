import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import {
  BoardsPage,
  LandingPage,
  NotificationsPage,
  SettingsPage,
} from '../../ui/pages';

FlowRouter.route('/', {
  name: 'landing',
  action() {
    mount(LandingPage);
  },
});

FlowRouter.route('/boards', {
  name: 'boards',
  action() {
    mount(BoardsPage);
  },
});

FlowRouter.route('/notifications', {
  name: 'notifications',
  action() {
    mount(NotificationsPage);
  },
});

FlowRouter.route('/settings', {
  name: 'settings',
  action() {
    mount(SettingsPage);
  },
});
