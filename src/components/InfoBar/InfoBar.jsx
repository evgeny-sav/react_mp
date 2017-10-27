import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import styles from './InfoBar.scss';

const cx = classNames.bind(styles);

const InfoBar = (props) => {
  const { movies, children } = props;
  return (
    <div className={styles.infobar}>
      <div className={cx(styles.container, styles.clearfix)}>
        <p className={styles.mfound}>{(movies.length) ? `${movies.length} movies found` : 'No results'}</p>
        <div className={styles.filters}>
          { children }
        </div>
      </div>
    </div>
  );
};

InfoBar.propTypes = {
  children: PropTypes.element.isRequired,
  movies: PropTypes.array.isRequired,
};

const mapStateToProps = ({ movies }) => ({
  movies,
});

export default connect(mapStateToProps)(InfoBar);
