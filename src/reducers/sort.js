import * as constants from '../constants.json';

const actions = {
  [constants.SORT_BY_RATE]: (state, action) => action.payload,
  [constants.SORT_BY_RELEASE]: (state, action) => action.payload,
  [constants.NO_SORT]: (state, action) => action.payload,
};

const sortReducer = (state = null, action) => (actions[action.payload] ? actions[action.payload](state, action) : state);

export default sortReducer;
