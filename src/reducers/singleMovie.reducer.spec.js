import singleMovieReducer from './singleMovie';
import constants from '../constants';
import movies from '../../testData/movies.mock.json';

describe('[ Reducers ] Single Movie', () => {
  let state;
  beforeEach(() => {
    state = {
      genres: [],
      overview: '',
      release_date: '',
      runtime: 0,
    };
  });

  it('[INITIAL] should return same state', () => {
    const action = { type: '@@INIT' };
    expect(singleMovieReducer(state, action)).toEqual(state);
  });

  it('[FETCH_MOVIE_BY_ID_STARTED] should return same state for the action', () => {
    const action = { type: constants.FETCH_MOVIE_BY_ID_STARTED };
    expect(singleMovieReducer(state, action)).toEqual(state);
  });

  it('[FETCH_MOVIE_BY_ID_ERROR] should throw for the action', () => {
    const action = {
      type: constants.FETCH_MOVIE_BY_ID_ERROR,
      payload: 'Cannot read property \'data\' of null',
    };
    expect(() => singleMovieReducer(state, action)).toThrow('Cannot read property \'data\' of null');
  });

  it('[FETCH_MOVIE_BY_ID_COMPLETED] should return correct state for the action', () => {
    const action = {
      type: constants.FETCH_MOVIE_BY_ID_COMPLETED,
      payload: movies[0],
    };
    expect(singleMovieReducer(state, action)).toEqual(movies[0]);
  });
});

