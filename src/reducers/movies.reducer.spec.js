import movieReducers from './movies';
import constants from '../constants';
import movies from '../../testData/movies.mock.json';

describe('[ Reducers ] Movies', () => {
  let state = {
    movies: [],
    sortBy: 'NO_SORT',
  };

  it('[INITIAL] should return same state', () => {
    const action = { type: '@@INIT' };
    expect(movieReducers(state, action)).toEqual(state);
  });

  it('[FETCH_MOVIES_STARTED] should return same state for the action', () => {
    const action = { type: constants.FETCH_MOVIES_STARTED };
    expect(movieReducers(state, action)).toEqual(state);
  });

  it('[FETCH_MOVIES_ERROR] should throw for the action', () => {
    const action = {
      type: constants.FETCH_MOVIES_ERROR,
      payload: { message: 'Cannot read property \'data\' of null' },
    };
    expect(() => movieReducers(state, action)).toThrow('Cannot read property \'data\' of null');
  });

  it('[FETCH_MOVIES_COMPLETED] should return correct state for the action', () => {
    const action = {
      type: constants.FETCH_MOVIES_COMPLETED,
      payload: {
        results: movies,
      },
    };
    expect(movieReducers(state, action)).toEqual(movies);
  });

  describe('[SORT]', () => {
    state = movies;

    it('[SORT_BY_RATE] should return correct state for the action', () => {
      const action = { type: constants.SORT, payload: constants.SORT_BY_RATE };
      expect(movieReducers(state, action)).toEqual(movies.sort((cur, next) => next.vote_average - cur.vote_average));
    });

    it('[SORT_BY_RELEASE] should return correct state for the action', () => {
      const action = { type: constants.SORT, payload: constants.SORT_BY_RELEASE };
      expect(movieReducers(state, action)).toEqual(movies.sort((cur, next) => Date.parse(next.release_date) - Date.parse(cur.release_date)));
    });

    it('[NO_SORT] should return correct state for the action', () => {
      const action = { type: constants.SORT, payload: constants.NO_SORT };
      expect(movieReducers(state, action)).toEqual(state);
    });
  });
});
