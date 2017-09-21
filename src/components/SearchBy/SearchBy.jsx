import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SearchBy.scss';

const cx = classNames.bind(styles);

class SearchBy extends Component {
  constructor() {
    super();
    this.state = {
      searchBy: 'title',
    };
  }

  handelSearch(e, val) {
    e.preventDefault();
    this.props.onHandleSearch(val);
  }

  render() {
    const { activeFilter } = this.props;
    return (
      <div className={styles.searchBy}>
        <p className={styles.title}>Search by</p>
        <ul className={styles.list}>
          <li className={cx('item', { [styles.active]: activeFilter === 'director' })}>
            <a href="" onClick={e => this.handelSearch(e, 'director')}>Director</a>
          </li>
          <li className={cx('item', { [styles.active]: activeFilter === 'title' })}>
            <a href="" onClick={e => this.handelSearch(e, 'title')}>Title</a>
          </li>
        </ul>
      </div>
    );
  }
}

SearchBy.propTypes = {
  onHandleSearch: PropTypes.func.isRequired,
  activeFilter: PropTypes.string.isRequired,
};

export default SearchBy;
