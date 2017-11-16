import React from 'react';
import { shallow } from 'enzyme';
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

  it('should change state properly', () => {
    wrapper.find('#searchBar').simulate('change', { target: { value: 'Hello World' } });
    expect(wrapper.state().searchFor).toBe('Hello World');

    wrapper.find(SearchBy).prop('onHandleSearchBy')('director');
    expect(wrapper.state().searchBy).toBe('director');
  });
});
