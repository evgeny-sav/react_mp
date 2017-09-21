import React, { Component } from 'react';
import classNames from 'classnames';
import API from '../../api';
import MovieItem from '../MovieItem/MovieItem';
import styles from './movie-list.scss';

const cx = classNames.bind(styles);

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    API.getMovies().then((movies) => {
      this.setState({
        movies: movies.data.map(movie => (
          <MovieItem
            key={movie.id}
            title={movie.title}
            description={movie.description}
            imageUrl={movie.image_url}
          />
        )),
      });
    });
  }

  render() {
    return (
      <div className={cx(styles.container, styles.clearfix)}>
        {this.state.movies.length > 0 ? (
          this.state.movies
        ) : (
          <div className={styles.noMovies}>
            <h1 className={styles.text}>No movies found</h1>
          </div>
        )}
      </div>
    );
  }
}

export default MovieList;
