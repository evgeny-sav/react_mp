import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { MovieList } from '../MovieList/MovieList';
import * as movies from '../../../testData/movies.mock.json';


describe('< MovieList />', () => {
  const props = {
    movies: [...movies],
    location: {
      key: 'n9zr5m',
      pathname: '/search',
      search: '?searchFor=Batman&searchBy=title',
    },
    dispatch: () => {},
  };

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MovieList {...props} />);
  });

  it('should be rendered', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call getFilteredData and dispatch', () => {
    const dispatchSpy = sinon.spy();
    wrapper.setProps({
      dispatch: dispatchSpy,
    });

    wrapper.instance().getFilteredData();
    console.log(dispatchSpy.args);
    expect(dispatchSpy.called).toBeTruthy();
    // expect(dispatchSpy.calledWith(/*function fetchMovies(searchBy, searchFor)*/)).toBeTruthy();
  });

  describe('getFilteredData', () => {
    let getFilteredDataSpy;
    let URLSearchParamsStub;

    beforeEach(() => {
      URLSearchParamsStub = sinon.stub(global.URLSearchParams.prototype, 'get');
      getFilteredDataSpy = sinon.spy(MovieList.prototype, 'getFilteredData');
    });

    afterEach(() => {
      getFilteredDataSpy.restore();
      URLSearchParamsStub.restore();
    });

    it('should do nothing when location stays the same', () => {
      URLSearchParamsStub.withArgs('searchFor').returns('Batman');
      URLSearchParamsStub.withArgs('searchBy').returns('director');
      wrapper.setProps({
        location: {
          key: 'n9zr5m',
          pathname: '/search',
          search: '?searchFor=Batman&searchBy=director',
        },
      });

      expect(getFilteredDataSpy.called).toBeTruthy();

      getFilteredDataSpy.reset();

      wrapper.setProps({
        location: {
          key: 'n9zr5m',
          pathname: '/search',
          search: '?searchFor=Batman&searchBy=director',
        },
      });
      expect(getFilteredDataSpy.called).toBeFalsy();
    });

    it('should call getFilteredDataSpy when location have been changed to /search', () => {
      URLSearchParamsStub.withArgs('searchFor').returns('Batman');
      URLSearchParamsStub.withArgs('searchBy').returns('director');
      wrapper.setProps({
        location: {
          key: 'n9zr5m',
          pathname: '/search',
          search: '?searchFor=Batman&searchBy=director',
        },
      });
      expect(getFilteredDataSpy.calledWith('director', 'Batman')).toBeTruthy();
    });
  });
});
