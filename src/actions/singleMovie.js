import API from '../api';
import * as constants from '../constants.json';

const fetchMovieStarted = () => ({
  type: constants.FETCH_MOVIE_BY_ID_STARTED,
});

const fetchMovieError = e => ({
  type: constants.FETCH_MOVIE_BY_ID_ERROR,
  payload: e,
});

const fetchMovieCompleted = payload => ({
  type: constants.FETCH_MOVIE_BY_ID_COMPLETED,
  payload,
});

const fetchMovie = id => async (dispatch) => {
  dispatch(fetchMovieStarted());
  try {
    const payload = await API.getMovie(id);
    dispatch(fetchMovieCompleted(payload));
  } catch (e) {
    dispatch(fetchMovieError(e));
  }
};

export default fetchMovie;
