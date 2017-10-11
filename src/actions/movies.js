import Axios from 'axios';

function searchMoviesStarted() {
  return {
    type: 'FETCH_MOVIES_STARTED',
  };
}

function searchMoviesError(e) {
  return {
    type: 'FETCH_MOVIES_ERROR',
    payload: e,
  };
}

function searchMoviesCompleted(payload) {
  return {
    type: 'FETCH_MOVIES_COMPLETED',
    payload,
  };
}

function searchMovies() {
  return (dispatch) => {
    dispatch(searchMoviesStarted());
    Axios.get('http://localhost:3000/api/v1/movies').then((payload) => {
      dispatch(searchMoviesCompleted(payload.data));
    }).catch((e) => {
      dispatch(searchMoviesError(e));
    });
  };
}

export default searchMovies;
