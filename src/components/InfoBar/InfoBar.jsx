import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './InfoBar.scss';

const cx = classNames.bind(styles);

const InfoBar = props => (
  <div className={styles.infobar}>
    <div className={cx(styles.container, styles.clearfix)}>
      <p className={styles.mfound}>7 movies found</p>
      <div className={styles.filters}>
        { props.children }
      </div>
    </div>
  </div>
);

InfoBar.propTypes = {
  children: PropTypes.element.isRequired,
};

export default InfoBar;
