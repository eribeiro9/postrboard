import React from 'react';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';

import { Loading } from '../../components';

export const Settings = ({ isLoading, settings }) => (
  isLoading ? <Loading /> : (
    <div>
      <Toggle
        label="Toggle 1"
        defaultToggled={ settings.setting1 }
      />
      <Toggle
        label="Toggle 2"
        defaultToggled={ settings.setting2 }
      />
      <TextField
        id="text-field-default"
        defaultValue={ settings.setting3 }
      />
    </div>
  )
);

Settings.propTypes = {
  isLoading: React.PropTypes.bool,
  settings: React.PropTypes.object,
};
