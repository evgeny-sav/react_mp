import React from 'react';
import classNames from 'classnames';
import styles from './searchby.scss';

const cx = classNames.bind(styles);

const SearchBy = () => (
  <div className={styles.searchBy}>
    <p className={styles.title}>Search by</p>
    <ul className={styles.list}>
      <li className={cx(styles.item, styles.active)}>
        <a href="#bydirector">Director</a>
      </li>
      <li className={styles.item}>
        <a href="#bytitle">Title</a>
      </li>
    </ul>
  </div>
);

export default SearchBy;
