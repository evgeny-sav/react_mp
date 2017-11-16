import React from 'react';
import { shallow } from 'enzyme';
import { InfoBar } from '../InfoBar/InfoBar';
import SortBy from '../SortBy/SortBy';
import movies from '../../../testData/movies.mock.json';

describe('< InfoBar />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<InfoBar movies={[]}><SortBy /></InfoBar>);
  });

  it('should be rendered', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should show "20 movies found"', () => {
    wrapper.setProps({
      movies: [...movies],
    });
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.mfound').text()).toEqual('20 movies found');
  });

  it('should show "No results"', () => {
    wrapper.setProps({
      movies: [],
    });
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.mfound').text()).toEqual('No results');
  });
});
