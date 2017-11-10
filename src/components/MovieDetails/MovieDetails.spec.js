import React from 'react';
import { shallow } from 'enzyme';
import { MovieDetails } from '../MovieDetails/MovieDetails';
import * as movies from '../../../__mocks__/movies.mock.json';


describe('< MovieDetails />', () => {
  const props = {
    movie: movies[0],
    match: {
      isExact: true,
      params: {
        id: '268',
        path: '/film/:id',
        url: '/film/268',
      },
    },
    dispatch: () => {},
    location: {
      key: 'n9zr5m',
      pathname: '/search',
      search: '?searchFor=Batman&searchBy=title',
    },
  };
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MovieDetails {...props} />);
  });

  it('should be rendered', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
