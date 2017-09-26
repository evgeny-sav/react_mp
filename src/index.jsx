import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './components/App/App';
import Header from './components/Header/Header';
import MovieDetails from './components/MovieDetails/MovieDetails';
import SearchBar from './components/SearchBar/SearchBar';
import InfoBar from './components/InfoBar/InfoBar';
import SortBy from './components/SortBy/SortBy';
import Main from './components/Main/Main';
import NotFound from './components/NotFound/NotFound';
import './index.scss';

function renderRoutes() {
  return (
    <Router>
      <App>
        <Switch>
          <Route path="/">
            <div>
              <Header>
                <Switch>
                  <Route path="/" component={SearchBar} exact />
                  <Route path="/search" component={SearchBar} />
                  <Route path="/film/:id" component={MovieDetails} />
                </Switch>
              </Header>
              <InfoBar>
                <Route path="/" component={SortBy} />
              </InfoBar>
              <Main />
            </div>
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
      </App>
    </Router>
  );
}

ReactDOM.render(renderRoutes(), document.getElementById('root'));
