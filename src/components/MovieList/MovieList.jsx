import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import fetchMovies from '../../actions/movies';
import MovieItem from '../MovieItem/MovieItem';
import styles from './MovieList.scss';

const cx = classNames.bind(styles);

class MovieList extends Component {
  componentWillReceiveProps({ location }) {
    if (/search/.test(location.pathname)) {
      if (location.pathname === this.props.location.pathname &&
          location.search === this.props.location.search) {
        return;
      }
      const searchParams = new URLSearchParams(location.search);
      const searchFor = searchParams.get('searchFor');
      const searchBy = searchParams.get('searchBy');

      this.getFilteredData(searchBy, searchFor);
    }
  }

  getFilteredData(searchBy, searchFor) {
    this.props.dispatch(fetchMovies(searchBy, searchFor));
  }

  render() {
    const { movies } = this.props;
    return (
      <div className={cx(styles.container, styles.clearfix)}>
        { movies.length > 0 ? (
          movies.map(movie => (
            <MovieItem
              movieObj={movie}
              key={movie.id}
            />
          ))
        ) : (
          <div className={styles.noMovies}>
            <h1 className={styles.text}>No movies found</h1>
          </div>
        )}
      </div>
    );
  }
}

MovieList.propTypes = {
  location: PropTypes.object.isRequired, // eslint-disable-line
  movies: PropTypes.array.isRequired, // eslint-disable-line
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  movies: store.movies,
  sortBy: store.sortBy,
});

export default withRouter(connect(mapStateToProps)(MovieList));
