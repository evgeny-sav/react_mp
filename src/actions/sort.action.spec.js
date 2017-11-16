import { sort } from './sort';
import constants from '../constants';

describe('[ Actions ] Sort', () => {
  it('[sort] should return correct object for the action', () => {
    const payload = constants.NO_SORT;
    expect(sort(payload)).toEqual({ type: constants.SORT, payload });
  });
});
