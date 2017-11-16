import React from 'react';
import sinon from 'sinon';
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

  it('should have active filter by rating', () => {
    wrapper.setProps({
      sortBy: constants.SORT_BY_RATE,
    });
    expect(wrapper).toMatchSnapshot();
  });

  describe('[handleSort]', () => {
    let handleSortSpy;
    let dispatchSpy;
    beforeEach(() => {
      handleSortSpy = sinon.spy(SortBy.prototype, 'handleSort');
      dispatchSpy = sinon.spy();

      wrapper.setProps({
        dispatch: dispatchSpy,
      });
    });

    afterEach(() => {
      handleSortSpy.restore();
    });

    it('should have filter by release active', () => {
      wrapper.find('button').at(0).simulate('click');
      expect(handleSortSpy.called).toBeTruthy();
      expect(dispatchSpy.calledWith({ type: constants.SORT, payload: constants.SORT_BY_RELEASE })).toBeTruthy();
      handleSortSpy.reset();
      dispatchSpy.reset();
    });

    it('should have filter by rate active', () => {
      wrapper.find('button').at(1).simulate('click');
      expect(handleSortSpy.called).toBeTruthy();
      expect(dispatchSpy.calledWith({ type: constants.SORT, payload: constants.SORT_BY_RATE })).toBeTruthy();
      handleSortSpy.reset();
      dispatchSpy.reset();
    });
  });
});
