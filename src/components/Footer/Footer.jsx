import React, {Component} from 'react';
import styles from './footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.title}>netflixroulette</div>
        </div>
      </footer>
    );
  }
}

export default Footer;
