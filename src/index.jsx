import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App/App';
import movieReducers from './reducers/movies';
// import searchMovies from './actions/movies'; store.dispatch(searchMovies());
import './index.scss';

const logger = createLogger();
const reducers = combineReducers({
  movies: movieReducers,
});
const middleware = applyMiddleware(logger, thunk);
const store = createStore(reducers, middleware);

const renderRoutes = () => <Provider store={store}><Router><App /></Router></Provider>;

ReactDOM.render(renderRoutes(), document.getElementById('root'));
