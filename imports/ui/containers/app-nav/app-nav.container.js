import { createContainer } from 'meteor/react-meteor-data';

import { AppNav } from '../../components';
import { MOCK_USER } from './user.mock.js';

export const AppNavContainer = createContainer(() => {
  // subscribe to my boards

  const isLoading = false; // subscribes not ready
  const user = MOCK_USER;

  return {
    isLoading,
    user,
  };
}, AppNav);
