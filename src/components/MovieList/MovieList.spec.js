import React from 'react';
import { shallow } from 'enzyme';
import { MovieList } from '../MovieList/MovieList';
import * as movies from '../../../__mocks__/movies.mock.json';


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
});
