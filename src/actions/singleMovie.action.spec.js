import sinon from 'sinon';
import { fetchMovieStarted, fetchMovieError, fetchMovieCompleted, fetchMovie } from './singleMovie';
import API from '../api';
import constants from '../constants';
import movies from '../../testData/movies.mock.json';

describe('[ Actions ] Single Movie', () => {
  it('[fetchMovieStarted] should return correct object for the action', () => {
    expect(fetchMovieStarted()).toEqual({ type: constants.FETCH_MOVIE_BY_ID_STARTED });
  });

  it('[fetchMovieError] should return correct object for the action', () => {
    expect(fetchMovieError()).toEqual({ type: constants.FETCH_MOVIE_BY_ID_ERROR });
  });

  it('[fetchMovieCompleted] should return correct object for the action', () => {
    expect(fetchMovieCompleted()).toEqual({ type: constants.FETCH_MOVIE_BY_ID_COMPLETED });
  });

  describe('[fetchMovie]', () => {
    let APIgetMoviesStub;
    beforeEach(() => {
      APIgetMoviesStub = sinon.stub(API, 'getMovie');
    });

    afterEach(() => {
      APIgetMoviesStub.restore();
    });

    it('should call API to get movie by id and dispatch the fetchMovieCompleted action', async () => {
      const dispatchSpy = sinon.spy();
      APIgetMoviesStub.returns(Promise.resolve(movies[0]));

      await fetchMovie(268)(dispatchSpy);
      expect(dispatchSpy.calledTwice).toBeTruthy();
      expect(dispatchSpy.firstCall.args[0]).toEqual({ type: constants.FETCH_MOVIE_BY_ID_STARTED });
      expect(dispatchSpy.secondCall.args[0]).toEqual({ type: constants.FETCH_MOVIE_BY_ID_COMPLETED, payload: movies[0] });
    });
  });
});
