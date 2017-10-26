import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './SortBy.scss';
import * as constants from '../../constants.json';
import sort from '../../actions/sort';

const cx = classNames.bind(styles);

class SortBy extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    sortBy: PropTypes.string,
  };

  handleSort(e) {
    e.preventDefault();
    return cb => cb;
  }

  render() {
    const { dispatch, sortBy } = this.props;
    return (
      <div className={styles.filters}>
        <p className={styles.title}>Sort by: </p>
        <ul className={styles.filtersList}>
          <li className={cx({ active: sortBy === constants.SORT_BY_RELEASE })}>
            <button className={styles.button} onClick={e => this.handleSort(e)(dispatch(sort(constants.SORT_BY_RELEASE)))}>
              release date
            </button>
          </li>
          <li className={cx({ active: sortBy === constants.SORT_BY_RATE })}>
            <button className={styles.button} onClick={e => this.handleSort(e)(dispatch(sort(constants.SORT_BY_RATE)))}>
              rating
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ movies, sortBy }) => ({
  movies,
  sortBy,
});

export default connect(mapStateToProps)(SortBy);
