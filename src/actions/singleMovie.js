import API from '../api';
import * as constants from '../constants.json';

function fetchMovieStarted() {
  return {
    type: constants.FETCH_MOVIE_BY_ID_STARTED,
  };
}

function fetchMovieError(e) {
  return {
    type: constants.FETCH_MOVIE_BY_ID_ERROR,
    payload: e,
  };
}

function fetchMovieCompleted(payload) {
  return {
    type: constants.FETCH_MOVIE_BY_ID_COMPLETED,
    payload,
  };
}

function fetchMovie(id) {
  return (dispatch) => {
    dispatch(fetchMovieStarted());
    API.getMovie(id).then((payload) => {
      dispatch(fetchMovieCompleted(payload));
    }).catch((e) => {
      dispatch(fetchMovieError(e));
    });
  };
}

export default fetchMovie;
