import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../Footer/Footer';

describe('< Footer />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });

  it('should be rendered', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
