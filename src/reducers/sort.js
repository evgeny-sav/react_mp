import constants from '../constants';

const handleSort = (state, action) => action.payload;

const actions = {
  [constants.SORT_BY_RATE]: handleSort,
  [constants.SORT_BY_RELEASE]: handleSort,
  [constants.NO_SORT]: handleSort,
};

const sortReducer = (state = constants.NO_SORT, action) => (actions[action.payload] ? actions[action.payload](state, action) : state);

export default sortReducer;
