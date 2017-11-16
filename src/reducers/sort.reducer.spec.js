import sortReducer from './sort';
import constants from '../constants';

describe('[ Reducers ] Sort', () => {
  const state = constants.NO_SORT;

  it('[INITIAL] should return same state', () => {
    const action = { type: '@@INIT' };
    expect(sortReducer(state, action)).toBe(state);
  });

  it('[SORT_BY_RATE] should return same state for the action', () => {
    const action = { payload: constants.SORT_BY_RATE };
    expect(sortReducer(state, action)).toBe(constants.SORT_BY_RATE);
  });

  it('[SORT_BY_RELEASE] should throw for the action', () => {
    const action = { payload: constants.SORT_BY_RELEASE };
    expect(sortReducer(state, action)).toBe(constants.SORT_BY_RELEASE);
  });

  it('[NO_SORT] should return correct state for the action', () => {
    const action = { payload: constants.NO_SORT };
    expect(sortReducer(state, action)).toBe(constants.NO_SORT);
  });
});

