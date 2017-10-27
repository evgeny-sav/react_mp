import constants from '../constants';

const initialState = {
  genres: [],
  overview: '',
  release_date: '',
  runtime: 0,
};

const actions = {
  [constants.FETCH_MOVIE_BY_ID_STARTED]: state => state,
  [constants.FETCH_MOVIE_BY_ID_ERROR]: (state, action) => { throw Error(action.payload); },
  [constants.FETCH_MOVIE_BY_ID_COMPLETED]: (state, action) => action.payload,
};

const singleMovieReducer = (state = initialState, action) => (actions[action.type] ? actions[action.type](state, action) : state);

export default singleMovieReducer;
