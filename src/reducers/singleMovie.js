import * as constants from '../constants.json';

const initialState = {
  genres: [],
  overview: '',
  release_date: '',
  runtime: 0,
};

const singleMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.FETCH_MOVIE_BY_ID_STARTED: {
      return state;
    }
    case constants.FETCH_MOVIE_BY_ID_ERROR: {
      throw new Error(action.payload);
    }
    case constants.FETCH_MOVIE_BY_ID_COMPLETED: {
      return action.payload;
    }
    default: return state;
  }
};

export default singleMovieReducer;
