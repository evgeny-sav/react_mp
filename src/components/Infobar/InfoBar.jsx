import React from 'react';
import classNames from 'classnames';
import SortBy from '../SortBy/SortBy';
import styles from './InfoBar.scss';

const cx = classNames.bind(styles);

const Infobar = () => (
  <div className={styles.infobar}>
    <div className={cx(styles.container, styles.clearfix)}>
      <p className={styles.mfound}>7 movies found</p>
      <div className={styles.filters}>
        <SortBy />
      </div>
    </div>
  </div>
);

export default Infobar;
