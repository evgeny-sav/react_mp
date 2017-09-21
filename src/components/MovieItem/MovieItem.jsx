import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './MovieItem.scss';

const cx = classNames.bind(styles);

const MovieItem = ({ title, imageUrl }) => (
  <div className={styles.movieItem}>
    <div className={styles.movieImage}>
      <img src={imageUrl} alt="" />
    </div>
    <div className={styles.movieInfo}>
      <p className={cx(styles.title, styles.clearfix)}>
        {title} <span className={styles.year}>2017</span>
      </p>
      <p className={styles.genre}>Fiction</p>
    </div>
  </div>
);

MovieItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};
export default MovieItem;
