import React from 'react';
import { shallow } from 'enzyme';
import { InfoBar } from '../InfoBar/InfoBar';
import SortBy from '../SortBy/SortBy';

describe('< InfoBar />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<InfoBar movies={[]}><SortBy /></InfoBar>);
  });

  it('should be rendered', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
