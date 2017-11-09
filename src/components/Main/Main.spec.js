import React from 'react';
import { shallow } from 'enzyme';
import Main from '../Main/Main';

describe('< Main />', () => {
  it('Should be rendered', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper).toMatchSnapshot();
  });
});
