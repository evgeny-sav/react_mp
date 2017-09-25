import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import API from '../../api';
import MovieItem from '../MovieItem/MovieItem';
import styles from './MovieList.scss';

const cx = classNames.bind(styles);

class MovieList extends Component {
  static async getData() {
    const searchFor = 'Batman';
    const searchBy = 'title';
    return await API.getData(searchFor, searchBy); // eslint-disable-line
  }

  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };
  }

  componentWillReceiveProps({ location }) {
    if (/search/.test(location.pathname)) {
      const nextSearchParams = new URLSearchParams(location.search);
      const prevSearchParams = new URLSearchParams(this.props.location.search);
      if (location.pathname === this.props.location.pathname &&
        nextSearchParams.get('searchBy') === prevSearchParams.get('searchBy') &&
        nextSearchParams.get('searchFor') === prevSearchParams.get('searchFor')) {
        console.log('no update');
        return false;
      }

      MovieList.getData().then((res) => {
        console.log('update ...');
        this.setState({
          movies: [...res],
        });
      });
    }
    return true;
  }

  render() {
    const { movies } = this.state;
    return (
      <div className={cx(styles.container, styles.clearfix)}>
        { movies.length > 0 ? (
          movies.map(movie => (
            <MovieItem
              movieObj={movie}
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

MovieList.propTypes = {
  location: PropTypes.object.isRequired, // eslint-disable-line
};

export default withRouter(MovieList);
