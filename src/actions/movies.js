import Axios from 'axios';

function fetchMoviesStarted() {
  return {
    type: 'FETCH_MOVIES_STARTED',
  };
}

function fetchMoviesError(e) {
  return {
    type: 'FETCH_MOVIES_ERROR',
    payload: e,
  };
}

function fetchMoviesCompleted(payload) {
  return {
    type: 'FETCH_MOVIES_COMPLETED',
    payload,
  };
}

function fetchMovies() {
  return (dispatch) => {
    dispatch(fetchMoviesStarted());
    Axios.get('http://localhost:3000/api/v1/movies').then((payload) => {
      dispatch(fetchMoviesCompleted(payload.data));
    }).catch((e) => {
      dispatch(fetchMoviesError(e));
    });
  };
}

export default fetchMovies;
