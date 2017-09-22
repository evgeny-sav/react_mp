import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Infobar from '../Infobar/InfoBar';
import styles from './App.scss';

const App = props => (
  <div className={styles.outer}>
    {
      props.children // eslint-disable-line
    }
    <div className={styles.wrapper}>
      <Header />
      <Infobar />
      <Main />
      <div className={styles.push}>&nbsp;</div>
    </div>
    <Footer />
  </div>
);

export default App;
