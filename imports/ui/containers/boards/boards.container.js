import { createContainer } from 'meteor/react-meteor-data';

import { Boards } from '../../components';
import { MOCK_BOARDS } from './boards.mock.js';

export const BoardsContainer = createContainer(() => {
  // subscribe to my boards

  const isLoading = false; // subscribes not ready
  const boards = MOCK_BOARDS;

  return {
    isLoading,
    boards,
  };
}, Boards);
