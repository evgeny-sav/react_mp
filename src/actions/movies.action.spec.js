import sinon from 'sinon';
import API from '../api';
import { fetchMoviesStarted, fetchMoviesError, fetchMoviesCompleted, fetchMovies } from './movies';
import constants from '../constants';
import movies from '../../testData/movies.mock.json';

describe('[ Actions ] Movies', () => {
  it('[fetchMoviesStarted] should return correct object for the action', () => {
    expect(fetchMoviesStarted()).toEqual({
      type: constants.FETCH_MOVIES_STARTED,
    });
  });
  it('[fetchMoviesError] should return correct object for the action', () => {
    expect(fetchMoviesError({ error: 'Error' })).toEqual({
      type: constants.FETCH_MOVIES_ERROR,
      payload: { error: 'Error' },
    });
  });
  it('[fetchMoviesCompleted] should return correct object for the action', () => {
    expect(fetchMoviesCompleted(movies)).toEqual({
      type: constants.FETCH_MOVIES_COMPLETED,
      payload: movies,
    });
  });

  describe('[fetchMovies]', () => {
    const props = {
      searchBy: 'title',
      searchFor: 'Batman',
    };


    let APIgetMoviesStub;
    beforeEach(() => {
      APIgetMoviesStub = sinon.stub(API, 'getMovies');
    });

    afterEach(() => {
      APIgetMoviesStub.restore();
    });

    it('should call API to get movies and dispatch the fetchMoviesCompleted action', async () => {
      const { searchBy, searchFor } = props;
      const dispatchSpy = sinon.spy();
      APIgetMoviesStub.returns(Promise.resolve(movies));

      await fetchMovies(searchBy, searchFor)(dispatchSpy);
      expect(dispatchSpy.calledThrice).toBeTruthy();
      expect(dispatchSpy.firstCall.args[0]).toEqual({ type: constants.FETCH_MOVIES_STARTED });
      expect(dispatchSpy.secondCall.args[0]).toEqual({ type: constants.SORT, payload: constants.NO_SORT });
      expect(dispatchSpy.thirdCall.args[0]).toEqual({ type: constants.FETCH_MOVIES_COMPLETED, payload: movies });
    });
  });
});
