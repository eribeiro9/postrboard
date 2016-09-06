import React from 'react';
import { List, ListItem } from 'material-ui/List';
import PriorityHigh from 'material-ui/svg-icons/notification/priority-high';

import { Loading } from '../../components';

export const Notifications = ({ isLoading, notifications }) => (
  isLoading ? <Loading /> : (
    <List
      style={{
        paddingTop: '0px',
      }}
    >
      { notifications.map((n, i) => (
        <ListItem
          key={ i }
          leftIcon={ n.isNew ? <PriorityHigh /> : <div /> }
        >
          <div className="notification-message-container">
            { n.message }
          </div>
        </ListItem>
      )) }
    </List>
  )
);

Notifications.propTypes = {
  isLoading: React.PropTypes.bool,
  notifications: React.PropTypes.array,
};
