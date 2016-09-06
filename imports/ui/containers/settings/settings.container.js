import { createContainer } from 'meteor/react-meteor-data';

import { Settings } from '../../components';
import { MOCK_SETTINGS } from './settings.mock.js';

export const SettingsContainer = createContainer(() => {
  // subscribe to my boards

  const isLoading = false; // subscribes not ready
  const settings = MOCK_SETTINGS;

  return {
    isLoading,
    settings,
  };
}, Settings);
