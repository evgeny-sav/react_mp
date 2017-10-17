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

function fetchMovies(searchBy, searchFor) {
  return (dispatch) => {
    dispatch(fetchMoviesStarted());
    API.getMovies(searchBy, searchFor).then((payload) => {
      dispatch(fetchMoviesCompleted(payload)); // TODO: pagination
    }).catch((e) => {
      dispatch(fetchMoviesError(e));
    });
  };
}

export default fetchMovies;
