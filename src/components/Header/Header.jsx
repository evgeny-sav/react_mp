import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.scss';

const Header = props => (
  <div className={styles.header}>
    <div className={styles.container}>
      <div className={styles.title}>netflixroulette</div>
      { props.children }
    </div>
  </div>
);

Header.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Header;
