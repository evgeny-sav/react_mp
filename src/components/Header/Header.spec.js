import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header/Header';


describe('< Header />', () => {
  const wrapper = shallow(<Header />); // TODO: props.children

  // TODO: test router

  // Header
  it('should be rendered', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
