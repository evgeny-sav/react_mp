import * as constants from '../constants.json';

const sortReducer = (state = null, action) => {
  switch (action.type) {
    case constants.SORT_BY_RATE: {
      return action.type;
    }
    case constants.SORT_BY_RELEASE: {
      return action.type;
    }
    case constants.NO_SORT: {
      return action.type;
    }
    default: return state;
  }
};

export default sortReducer;
