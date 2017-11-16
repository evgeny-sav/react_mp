import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header/Header';
import MovieDetails from '../MovieDetails/MovieDetails';
import SearchBar from '../SearchBar/SearchBar';


describe('< Header />', () => {
  it('should be rendered with < SearchBar />', () => {
    const wrapper = shallow(<Header><SearchBar /></Header>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should be rendered < MovieDetails />', () => {
    const wrapper = shallow(<Header><MovieDetails /></Header>);
    expect(wrapper).toMatchSnapshot();
  });
});
