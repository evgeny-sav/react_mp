import * as constants from '../constants.json';

const movieReducers = (state = [], action) => {
  switch (action.type) {
    case constants.FETCH_MOVIES_STARTED: {
      return state;
    }
    case constants.FETCH_MOVIES_ERROR: {
      throw new Error(action.payload);
    }
    case constants.FETCH_MOVIES_COMPLETED: {
      return action.payload.results;
    }
    case constants.SORT_BY_RATE: {
      const sortedState = [...state].sort((cur, next) => cur.vote_average - next.vote_average).reverse();
      return [...sortedState];
    }
    case constants.SORT_BY_RELEASE: {
      const sortedState = [...state].sort((cur, next) => Date.parse(cur.release_date) - Date.parse(next.release_date)).reverse();
      return [...sortedState];
    }
    case constants.NO_SORT: {
      return [...state];
    }
    default: return state;
  }
};

export default movieReducers;
