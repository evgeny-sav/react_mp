import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './MovieItem.scss';

const cx = classNames.bind(styles);

const MovieItem = ({ movieObj }) => (
  <div className={styles.movieItem}>
    <Link to={`/film/${movieObj.id}`}>
      <div className={styles.movieImage}>
        <img src={(movieObj.poster_path) ? `https://image.tmdb.org/t/p/w1000${movieObj.poster_path}` : 'http://via.placeholder.com/400x500.png/fff/ccc?text=No image'} alt={movieObj.title} />
      </div>
    </Link>
    <div className={styles.movieInfo}>
      <p className={cx('title', 'clearfix')}>
        {movieObj.title} <span className={styles.year}>{movieObj.release_date.slice(0, 4)}</span>
      </p>
    </div>
  </div>
);

MovieItem.propTypes = {
  movieObj: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
  }).isRequired,
};

export default MovieItem;
