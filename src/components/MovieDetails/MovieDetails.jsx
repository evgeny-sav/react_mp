import React from 'react';
import styles from './MovieDetails.scss';

const MovieDetails = () => (
  <div className={styles.movieDetails}>
    <div className={styles.movieAvatar}>
      <img
        src="http://www.gstatic.com/tv/thumb/movieposters/15684/p15684_p_v8_ac.jpg"
        alt="Pulp Fiction movie poster"
      />
    </div>
    <div className={styles.movieDescription}>
      <div className={styles.title}>
        Pulp Fiction <span className={styles.rated}>4.1</span>
      </div>
      <p>Oscar-winning Movies</p>
      <p>
        <span className={styles.year}>1994</span>
        <span className={styles.duration}>154min</span>
      </p>
      <p className={styles.descriptionText}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid doloremque dolores eum id
        impedit in magni minima molestias nobis nullaobcaecati perspiciatis quam quas quibusdam,
        repellat tempora velit, veniam! A dolores eius est minima nobis.
      </p>

      <p className={styles.director}>Director: Quentin Tarantino</p>
      <p className={styles.cast}>
        Cast: John Travolta, Samuel L. Jackson, Uma Thurman, Bruce Willis, Harvey Keitel, Tom Roth,
        Amanda Plummer, Ving Rhames, Eric Stolts, Maria de Madeiros
      </p>
    </div>
  </div>
);

export default MovieDetails;
