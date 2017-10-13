import * as constants from '../constants.json';

const movieReducers = (state = [], action) => {
  switch (action.type) {
    case constants.FETCH_MOVIES_STARTED: {
      console.log('Fetching movies...');
      return state;
    }
    case constants.FETCH_MOVIES_ERROR: {
      throw new Error(action.payload);
    }
    case constants.FETCH_MOVIES_COMPLETED: {
      return action.payload;
    }
    default: return state;
  }
};

export default movieReducers;
