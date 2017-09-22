import React, { Component } from 'react';
import classNames from 'classnames';
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

  componentDidMount() {
    API.getMovies().then((movies) => {
      this.setState({
        movies: [...movies.data],
      });
    });
  }

  render() {
    const { movies } = this.state;
    return (
      <div className={cx(styles.container, styles.clearfix)}>
        { movies.length > 0 ? (
          movies.map(movie => (
            <MovieItem
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

export default MovieList;
