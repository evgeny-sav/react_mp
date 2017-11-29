import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MovieDetails from '../MovieDetails/MovieDetails';
import SearchBar from '../SearchBar/SearchBar';
import InfoBar from '../InfoBar/InfoBar';
import SortBy from '../SortBy/SortBy';
import Main from '../Main/Main';
import styles from './App.scss';

const App = () => (
  <div className={styles.outer}>
    <div className={styles.wrapper}>
      <Header>
        <Switch>
          <Route path="/film/:id" component={MovieDetails} />
          <Route path="*" component={SearchBar} />
        </Switch>
      </Header>
      <InfoBar>
        <Route path="/" component={SortBy} />
      </InfoBar>
      <Main />
      {/* <div className={styles.push}>&nbsp;</div> */}
    </div>
    <Footer />
  </div>
);

export default App;
