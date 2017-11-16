import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { MovieList } from '../MovieList/MovieList';
import MovieItem from '../MovieItem/MovieItem';
import movies from '../../../testData/movies.mock.json';


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

  it('should render "No movies found" if no movies in this.props.movies', () => {
    wrapper.setProps({
      movies: [],
    });
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.noMovies .text').text()).toEqual('No movies found');
  });

  it('should render movies from this.props.movies', () => {
    expect(wrapper.find(MovieItem)).toHaveLength(20);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call getFilteredData and dispatch', () => {
    const dispatchSpy = sinon.spy();
    wrapper.setProps({
      dispatch: dispatchSpy,
    });

    wrapper.instance().getFilteredData();

    expect(dispatchSpy.called).toBeTruthy();
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
      URLSearchParamsStub.withArgs('searchFor').returns('Scorsese');
      URLSearchParamsStub.withArgs('searchBy').returns('director');
      wrapper.setProps({
        location: {
          key: 'n9zr5m',
          pathname: '/search',
          search: '?searchFor=Scorsese&searchBy=director',
        },
      });
      expect(getFilteredDataSpy.calledWith('director', 'Scorsese')).toBeTruthy();

      getFilteredDataSpy.reset();

      URLSearchParamsStub.withArgs('searchFor').returns('Superman');
      URLSearchParamsStub.withArgs('searchBy').returns('title');

      wrapper.setProps({
        location: {
          key: 'n9zr5m',
          pathname: '/search',
          search: '?searchFor=Superman&searchBy=title',
        },
      });
      expect(getFilteredDataSpy.calledWith('title', 'Superman')).toBeTruthy();
    });
  });
});
