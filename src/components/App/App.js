import React, { Component } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Infobar from '../Infobar/Infobar';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="outer">
        <div className="wrapper">
          <Header />
          <Infobar/>
          <Main />
          <div className="push">&nbsp;</div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
