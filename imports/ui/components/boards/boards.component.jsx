import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Star from 'material-ui/svg-icons/toggle/star';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { yellow600 } from 'material-ui/styles/colors';

import { Loading } from '../../components';

export const Boards = ({ isLoading, boards }) => (
  isLoading ? <Loading /> : (
    <List
      style={{
        paddingTop: '0px',
      }}
    >
      { boards.map((b, i) => (
        <ListItem
          key={ i }
          rightIcon={ b.isFavorite ? <Star color={ yellow600 } /> : <StarBorder /> }
          style={{
            lineHeight: 'normal',
          }}
          innerDivStyle={{
            paddingLeft: '0px',
          }}
        >
          <div
            className="board-name-container"
            style={{
              backgroundColor: b.color,
            }}
          >
            { b.name }
          </div>
          <div className="board-latestAction-container">
            { b.latestAction }
          </div>
        </ListItem>
      )) }
    </List>
  )
);

Boards.propTypes = {
  isLoading: React.PropTypes.bool,
  boards: React.PropTypes.array,
};
