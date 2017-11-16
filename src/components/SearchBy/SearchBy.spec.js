import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import SearchBy from '../SearchBy/SearchBy';


describe('< SearchBy />', () => {
  let wrapper;
  let onHandleSearchBySpy;

  beforeEach(() => {
    wrapper = shallow(<SearchBy onHandleSearchBy={() => ({})} activeFilter="title" />);
  });

  it('should be rendered', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call onHandleSearchBy', () => {
    onHandleSearchBySpy = sinon.spy();
    wrapper.setProps({
      onHandleSearchBy: onHandleSearchBySpy,
    });

    wrapper.find('button').at(0).simulate('click');
    expect(onHandleSearchBySpy.calledWith('director')).toBeTruthy();
    onHandleSearchBySpy.reset();

    wrapper.find('button').at(1).simulate('click');
    expect(onHandleSearchBySpy.calledWith('title')).toBeTruthy();
    onHandleSearchBySpy.reset();
  });
});
