import * as constants from '../constants.json';

function byRate() {
  return {
    type: constants.SORT_BY_RATE,
  };
}

function byRelease() {
  return {
    type: constants.SORT_BY_RELEASE,
  };
}

function noSort() {
  return {
    type: constants.NO_SORT,
  };
}

function sort(type) {
  return (dispatch) => {
    switch (type) {
      case constants.SORT_BY_RATE: {
        dispatch(byRate());
        break;
      }
      case constants.SORT_BY_RELEASE: {
        dispatch(byRelease());
        break;
      }
      case constants.NO_SORT: {
        dispatch(noSort());
        break;
      }
      default: dispatch(noSort(null));
    }
  };
}

export default sort;
