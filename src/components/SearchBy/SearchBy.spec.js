import React from 'react';
import { shallow } from 'enzyme';
import SearchBy from '../SearchBy/SearchBy';


describe('< SearchBy />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SearchBy onHandleSearchBy={() => ({})} activeFilter="director" />);
  });

  it('should be rendered', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
