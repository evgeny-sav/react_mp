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
        <img src={movieObj.image_url} alt="" />
      </div>
    </Link>
    <div className={styles.movieInfo}>
      <p className={cx('title', 'clearfix')}>
        {movieObj.title} <span className={styles.year}>2017</span>
      </p>
      <p className={styles.genre}>Fiction</p>
    </div>
  </div>
);

MovieItem.propTypes = {
  movieObj: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
  }).isRequired,
};
export default MovieItem;
