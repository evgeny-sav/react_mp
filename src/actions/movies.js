import API from '../api';
import * as constants from '../constants.json';

const fetchMoviesStarted = () => ({
  type: constants.FETCH_MOVIES_STARTED,
});

const fetchMoviesError = e => ({
  type: constants.FETCH_MOVIES_ERROR,
  payload: e,
});

const fetchMoviesCompleted = payload => ({
  type: constants.FETCH_MOVIES_COMPLETED,
  payload,
});

const fetchMovies = (searchBy, searchFor) => async (dispatch) => {
  dispatch(fetchMoviesStarted());
  try {
    const payload = await API.getMovies(searchBy, searchFor);
    dispatch(fetchMoviesCompleted(payload)); // TODO: infinite loading
  } catch (e) {
    dispatch(fetchMoviesError(e));
  }
};

export default fetchMovies;
