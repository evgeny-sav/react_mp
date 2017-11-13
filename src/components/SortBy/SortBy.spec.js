import React from 'react';
import { shallow } from 'enzyme';
import { SortBy } from '../SortBy/SortBy';
import constants from '../../constants';

describe('< SortBy />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SortBy sortBy={constants.NO_SORT} dispatch={() => {}} />);
  });

  it('should be rendered', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have active filter by release', () => {
    wrapper.setProps({
      sortBy: constants.SORT_BY_RELEASE,
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should have active filter by rating', () => {
    wrapper.setProps({
      sortBy: constants.SORT_BY_RATE,
    });
    expect(wrapper).toMatchSnapshot();
  });
});
