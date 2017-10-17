import API from '../api';
import * as constants from '../constants.json';

function fetchMoviesStarted() {
  return {
    type: constants.FETCH_MOVIES_STARTED,
  };
}

function fetchMoviesError(e) {
  return {
    type: constants.FETCH_MOVIES_ERROR,
    payload: e,
  };
}

function fetchMoviesCompleted(payload) {
  return {
    type: constants.FETCH_MOVIES_COMPLETED,
    payload,
  };
}

function fetchMovies(searchBy, searchFor, sortBy = constants.SORT_BY_RELEASE) {
  return (dispatch) => {
    dispatch(fetchMoviesStarted());
    API.getMovies(searchBy, searchFor).then((payload) => {
      let p = null;
      switch (sortBy) {
        case constants.SORT_BY_RATE: {
          p = payload.results.sort((curr, next) => curr.vote_average - next.vote_average).reverse();
          break;
        }
        case constants.SORT_BY_RELEASE: {
          p = payload.results.sort((curr, next) => parseInt(curr.release_date.substring(0, 4), 10) - parseInt(next.release_date.substring(0, 4), 10)).reverse();
          break;
        }
        default: p = payload.results;
      }
      dispatch(fetchMoviesCompleted(p)); // TODO: pagination
    }).catch((e) => {
      dispatch(fetchMoviesError(e));
    });
  };
}

export default fetchMovies;
