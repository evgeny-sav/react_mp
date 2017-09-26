import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import API from '../../api';
import MovieItem from '../MovieItem/MovieItem';
import styles from './MovieList.scss';

const cx = classNames.bind(styles);

class MovieList extends Component {
  static async getData() {
    const searchFor = 'Batman';
    const searchBy = 'title';
    return await API.getData(searchFor, searchBy); // eslint-disable-line
  }

  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };
  }

  componentWillReceiveProps({ location }) {
    const [searchBy, searchFor] = ['title', 'Batman'];
    if (/search/.test(location.pathname)) {
      if (location.pathname === this.props.location.pathname &&
          location.search === this.props.location.search) {
        return;
      }

      MovieList.getData().then((movies) => {
        const movie = movies.data.filter(m => m[searchBy] === searchFor);
        this.setState({
          movies: movie,
        });
      });
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
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
  }).isRequired,
};

export default withRouter(MovieList);
