import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './SortBy.scss';
import * as constants from '../../constants.json';
import fetchMovies from '../../actions/movies';

const cx = classNames.bind(styles);

class SortBy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: '',
    };
  }

  handelSort(e, val = constants.SORT_BY_RATE) {
    e.preventDefault();
    const { location, dispatch } = this.props;
    this.setState({ sortBy: val });
    const searchParams = new URLSearchParams(location.search);
    const searchFor = searchParams.get('searchFor');
    const searchBy = searchParams.get('searchBy');
    dispatch(fetchMovies(searchBy, searchFor, val));
  }

  render() {
    const { sortBy } = this.state;
    return (
      <div className={styles.filters}>
        <p className={styles.title}>Sort by: </p>
        <ul className={styles.filtersList}>
          <li className={cx({ active: sortBy === constants.SORT_BY_RELEASE })}>
            <a href="" onClick={e => this.handelSort(e, constants.SORT_BY_RELEASE)}>
              release date
            </a>
          </li>
          <li className={cx({ active: sortBy === constants.SORT_BY_RATE })}>
            <a href="" onClick={e => this.handelSort(e, constants.SORT_BY_RATE)}>
              rating
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

SortBy.propTypes = {
  location: PropTypes.object.isRequired, // eslint-disable-line
  dispatch: PropTypes.func.isRequired, // eslint-disable-line
};

const mapStateToProps = store => ({
  movies: store.movies,
});

export default connect(mapStateToProps)(SortBy);
