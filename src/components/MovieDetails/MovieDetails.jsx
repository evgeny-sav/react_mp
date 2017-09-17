import React, {Component} from 'react';
import classNames from 'classnames';
import styles from './movie-details.scss';
const cx = classNames.bind(styles);

class MovieDetails extends Component {
  render() {
    return (
      <div className={styles.movieDetails}>
        <div className={styles.movieAvatar}>
          <img
            src="http://www.gstatic.com/tv/thumb/movieposters/15684/p15684_p_v8_ac.jpg"
            alt="Pulp Fiction movie poster"
          />
        </div>
        <div className={styles.movieDescription}>
          <p className={cx(styles.movieDescription, styles.title)}>
            Pulp Fiction{' '}
            <span className={cx(styles.movieDescription, styles.rated)}>
              4.1
            </span>
          </p>
          <p>Oscar-winning Movies</p>
          <p>
            <span className={styles.year}>1994</span>
            <span className={styles.duration}>154min</span>
          </p>
          <p className={cx(styles.movieDescription, styles.descriptionText)}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            doloremque dolores eum id impedit in magni minima molestias nobis
            nulla obcaecati perspiciatis quam quas quibusdam, repellat tempora
            velit, veniam! A dolores eius est minima nobis.
          </p>

          <p className={styles.director}>Director: Quentin Tarantino</p>
          <p className={styles.cast}>
            Cast: John Travolta, Samuel L. Jackson, Uma Thurman, Bruce Willis,
            Harvey Keitel, Tom Roth, Amanda Plummer, Ving Rhames, Eric Stolts,
            Maria de Madeiros
          </p>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
