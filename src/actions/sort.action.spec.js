import { sort } from './sort';
import constants from '../constants';
import movies from '../../testData/movies.mock.json';

describe('[ Actions ] Sort', () => {
  it('[sort] should return correct object for the action', () => {
    const payload = movies;
    expect(sort(payload)).toEqual({ type: constants.SORT, payload });
  });
});
