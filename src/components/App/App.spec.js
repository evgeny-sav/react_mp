import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from '../Header/Header';
import InfoBar from '../InfoBar/InfoBar';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';


describe('< App />', () => {
  const wrapper = shallow(<App />);

  // Header
  it('should have one < Header /> component', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  // InfoBar
  it('should have one < InfoBar /> component', () => {
    expect(wrapper.find(InfoBar)).toHaveLength(1);
  });


  // Main
  it('should have one < Main /> component', () => {
    expect(wrapper.find(Main)).toHaveLength(1);
  });


  // Footer
  it('should have one < Footer /> component', () => {
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
});
