import constants from '../constants';

const sortActions = {
  [constants.SORT_BY_RATE]: (state) => {
    const sortedState = [...state].sort((cur, next) => next.vote_average - cur.vote_average);
    return [...sortedState];
  },
  [constants.SORT_BY_RELEASE]: (state) => {
    const sortedState = [...state].sort((cur, next) => Date.parse(next.release_date) - Date.parse(cur.release_date));
    return [...sortedState];
  },
  [constants.NO_SORT]: state => [...state],
};

const actions = {
  [constants.FETCH_MOVIES_STARTED]: state => state,
  [constants.FETCH_MOVIES_ERROR]: (state, action) => { throw Error(action.payload.message); },
  [constants.FETCH_MOVIES_COMPLETED]: (state, action) => action.payload.results,
  [constants.SORT]: (state, action) => (sortActions[action.payload] ? sortActions[action.payload](state) : state),
};

const movieReducers = (state = [], action) => (actions[action.type] ? actions[action.type](state, action) : state);

export default movieReducers;
