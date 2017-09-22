import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './components/App/App';
import NotFound from './components/NotFound/NotFound';
import './index.scss';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
  , document.getElementById('root'));
