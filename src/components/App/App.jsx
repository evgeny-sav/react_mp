import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer/Footer';
import styles from './App.scss';

const App = props => (
  <div className={styles.outer}>
    <div className={styles.wrapper}>
      {console.log(props)}
      { props.children }
      <div className={styles.push}>&nbsp;</div>
    </div>
    <Footer />
  </div>
);

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;
