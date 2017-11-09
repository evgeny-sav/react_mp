import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header/Header';


describe('< Header />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />); // TODO: Failed prop type: The prop `children` is marked as required in `Header`, but its value is `undefined`.
  });


  it('should be rendered', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
