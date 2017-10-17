import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import API from '../../api';
import styles from './MovieDetails.scss';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {
        genres: [],
        overview: '',
        release_date: '',
        runtime: 0,
      },
    };
  }
  componentDidMount() {
    const { match } = this.props;
    const id = match.params.id;
    return API.getMovie(id, 'genres').then((res) => {
      this.setState({
        movie: res,
      });
    });
  }

  render() {
    const { movie } = this.state;
    return (
      <div className={styles.movieDetails}>
        <div className={styles.backBtn}>
          <Link to="/" className={styles.btn}>Back to Search</Link>
        </div>
        <div className={styles.movieAvatar}>
          <img
            src={(movie.poster_path) ? `https://image.tmdb.org/t/p/w1000${movie.poster_path}` : 'http://via.placeholder.com/400x500.png/fff/ccc?text=No image'}
            alt={movie.title}
          />
        </div>
        <div className={styles.movieDescription}>
          <div className={styles.title}>
            {movie.title} <span className={styles.rated}>{movie.vote_average}</span>
          </div>
          <p>{movie.genres.map(genre => <span key={genre.id}> {genre.name} </span>)}</p>
          <p>
            <span className={styles.year}>{movie.release_date.substring(0, 4)}</span>
            <span className={styles.duration}>{movie.runtime}</span>
          </p>
          <p className={styles.descriptionText}>{movie.overview}</p>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  movie: PropTypes.object, // eslint-disable-line
  match: PropTypes.object.isRequired, // eslint-disable-line
};

export default MovieDetails;
