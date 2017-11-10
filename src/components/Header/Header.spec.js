import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';


describe('< Header />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header><SearchBar /></Header>);
  });


  it('should be rendered', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
