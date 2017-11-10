import React from 'react';
import { shallow } from 'enzyme';
import MovieItem from '../MovieItem/MovieItem';


describe('< MovieItem />', () => {
  const props = {
    movieObj: {
      id: 1,
      title: 'title',
      poster_path: 'http://localhost:8000',
      release_date: '2017-11-9',
    },
  };
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MovieItem {...props} />);
  });

  it('should be rendered', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
