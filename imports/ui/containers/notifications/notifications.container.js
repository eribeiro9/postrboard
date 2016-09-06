import { createContainer } from 'meteor/react-meteor-data';

import { Notifications } from '../../components';
import { MOCK_NOTIFICATIONS } from './notifications.mock.js';

export const NotificationsContainer = createContainer(() => {
  // subscribe to my notifications

  const isLoading = false; // subscribes not ready
  const notifications = MOCK_NOTIFICATIONS;

  return {
    isLoading,
    notifications,
  };
}, Notifications);
