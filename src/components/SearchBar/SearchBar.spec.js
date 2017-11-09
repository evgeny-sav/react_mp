import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import SearchBy from '../SearchBy/SearchBy';

describe('< SearchBar />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SearchBar />);
  });

  it('should be rendered', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have correct state', () => {
    expect(wrapper.state().searchBy).toEqual('title');
    wrapper.setState({ searchBy: 'director' });
    expect(wrapper.state().searchBy).toEqual('director');
  });

  it('should have correct input', () => {
    expect(wrapper.find('input')).toHaveLength(1);
    const inputVal = wrapper.find('input').render()['0'].attribs.value;
    expect(inputVal).toEqual(wrapper.state().searchFor);

    wrapper.setState({ searchFor: 'Superman' });

    const newInputVal = wrapper.find('input').render()['0'].attribs.value;
    expect(newInputVal).toEqual(wrapper.state().searchFor);
  });

  it('should have Link', () => {
    expect(wrapper.find(Link)).toHaveLength(1);
  });

  it('should have SearchBy', () => {
    expect(wrapper.find(SearchBy)).toHaveLength(1);
  });
});
