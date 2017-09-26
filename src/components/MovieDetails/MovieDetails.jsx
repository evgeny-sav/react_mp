import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MovieDetails.scss';

const MovieDetails = () => (
  <div className={styles.movieDetails}>
    <div className={styles.backBtn}>
      <Link to="/" className={styles.btn}>Back to Search</Link>
    </div>
    <div className={styles.movieAvatar}>
      <img
        src="http://media.comicbook.com/2017/06/the-batman-movie-fan-poster-ben-affleck-1000887.png"
        alt="Batman movie poster"
      />
    </div>
    <div className={styles.movieDescription}>
      <div className={styles.title}>
        The Batman <span className={styles.rated}>9.9</span>
      </div>
      <p>Oscar-winning Movies</p>
      <p>
        <span className={styles.year}>2018</span>
        <span className={styles.duration}>154min</span>
      </p>
      <p className={styles.descriptionText}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid doloremque dolores eum id
        impedit in magni minima molestias nobis nullaobcaecati perspiciatis quam quas quibusdam,
        repellat tempora velit, veniam! A dolores eius est minima nobis.
      </p>

      <p className={styles.director}>Director: Matt Reeves</p>
      <p className={styles.cast}>Cast: Ben Affleck, Joe Manganiello, Jeremy Irons</p>
    </div>
  </div>
);

export default MovieDetails;
