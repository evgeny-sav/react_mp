import React from 'react';
import styles from './sortby.scss';

const SortBy = () => (
  <div className={styles.filters}>
    <p className={styles.title}>Sort by: </p>
    <ul className={styles.filtersList}>
      <li>
        <a href="#byrelease" className="text-danger">
          release date
        </a>
      </li>
      <li className={styles.active}>
        <a href="#byrate" className="text-muted">
          rating
        </a>
      </li>
    </ul>
  </div>
);

export default SortBy;
