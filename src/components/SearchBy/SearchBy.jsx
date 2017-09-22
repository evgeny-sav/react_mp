import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SearchBy.scss';

const cx = classNames.bind(styles);

const SearchBy = ({ onHandleSearch, activeFilter }) => {
  const handelSearch = (e, val) => {
    e.preventDefault();
    onHandleSearch(val);
  };

  return (
    <div className={styles.searchBy}>
      <p className={styles.title}>Search by</p>
      <ul className={styles.list}>
        <li className={cx('item', { active: activeFilter === 'director' })}>
          <a href="" onClick={e => handelSearch(e, 'director')}>Director</a>
        </li>
        <li className={cx('item', { active: activeFilter === 'title' })}>
          <a href="" onClick={e => handelSearch(e, 'title')}>Title</a>
        </li>
      </ul>
    </div>
  );
};

SearchBy.propTypes = {
  onHandleSearch: PropTypes.func.isRequired,
  activeFilter: PropTypes.string.isRequired,
};

export default SearchBy;
