import React from 'react';
import { shallow } from 'enzyme';
import { SortBy } from '../SortBy/SortBy';
import constants from '../../constants';

describe('< SortBy />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SortBy sortBy={constants.SORT_BY_RATE} dispatch={() => {}} />);
  });

  it('should be rendered', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
