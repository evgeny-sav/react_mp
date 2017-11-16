import API from '../api';
import constants from '../constants';

export const fetchMovieStarted = () => ({
  type: constants.FETCH_MOVIE_BY_ID_STARTED,
});

export const fetchMovieError = e => ({
  type: constants.FETCH_MOVIE_BY_ID_ERROR,
  payload: e,
});

export const fetchMovieCompleted = payload => ({
  type: constants.FETCH_MOVIE_BY_ID_COMPLETED,
  payload,
});

export const fetchMovie = id => async (dispatch) => {
  dispatch(fetchMovieStarted());
  try {
    const payload = await API.getMovie(id);
    dispatch(fetchMovieCompleted(payload));
  } catch (e) {
    dispatch(fetchMovieError(e));
  }
};

export default fetchMovie;
