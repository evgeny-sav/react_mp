import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import API from '../../api';
import MovieItem from '../MovieItem/MovieItem';
import styles from './MovieList.scss';

const cx = classNames.bind(styles);

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };
  }

  componentWillReceiveProps({ location }) {
    if (/search/.test(location.pathname)) {
      if (location.pathname === this.props.location.pathname &&
          location.search === this.props.location.search) {
        return;
      }
      // get searchBy and searchFor from params
      const searchParams = new URLSearchParams(location.search);
      const searchFor = searchParams.get('searchFor');
      const searchBy = searchParams.get('searchBy');

      this.getFilteredData(searchBy, searchFor);
    }
  }

  async getFilteredData(searchBy, searchFor) {
    try {
      const movies = await API.getData(searchBy, searchFor);
      const movie = movies.data.filter(m => m[searchBy] === searchFor);
      this.setState({
        movies: movie,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { movies } = this.state;
    return (
      <div className={cx(styles.container, styles.clearfix)}>
        { movies.length > 0 ? (
          movies.map(movie => (
            <MovieItem
              movieObj={movie}
              key={movie.id}
              title={movie.title}
              description={movie.description}
              imageUrl={movie.image_url}
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
};

export default withRouter(MovieList);
