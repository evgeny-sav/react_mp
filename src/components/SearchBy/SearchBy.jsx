import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SearchBy.scss';

const cx = classNames.bind(styles);

const SearchBy = ({ onHandleSearchBy, activeFilter }) => {
  const handelSearchBy = val => () => onHandleSearchBy(val);

  return (
    <div className={styles.searchBy}>
      <p className={styles.title}>Search by</p>
      <ul className={styles.list}>
        <li className={cx('item', { active: activeFilter === 'director' })}>
          <button onClick={handelSearchBy('director')}>Director</button>
        </li>
        <li className={cx('item', { active: activeFilter === 'title' })}>
          <button onClick={handelSearchBy('title')}>Title</button>
        </li>
      </ul>
    </div>
  );
};

SearchBy.propTypes = {
  onHandleSearchBy: PropTypes.func.isRequired,
  activeFilter: PropTypes.string.isRequired,
};

export default SearchBy;
