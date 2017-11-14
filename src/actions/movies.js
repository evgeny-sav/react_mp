import API from '../api';
import sort from './sort';
import constants from '../constants';

export const fetchMoviesStarted = () => ({
  type: constants.FETCH_MOVIES_STARTED,
});

export const fetchMoviesError = e => ({
  type: constants.FETCH_MOVIES_ERROR,
  payload: e,
});

export const fetchMoviesCompleted = payload => ({
  type: constants.FETCH_MOVIES_COMPLETED,
  payload,
});

export const fetchMovies = (searchBy, searchFor) => async (dispatch) => {
  dispatch(fetchMoviesStarted());
  dispatch(sort(constants.NO_SORT));
  try {
    const payload = await API.getMovies(searchBy, searchFor);
    dispatch(fetchMoviesCompleted(payload)); // TODO: infinite loading
  } catch (e) {
    dispatch(fetchMoviesError(e));
  }
};

export default fetchMovies;
