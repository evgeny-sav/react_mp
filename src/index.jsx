import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App/App';
import movieReducers from './reducers/movies';
import singleMovieReducer from './reducers/singleMovie';
import sortReducer from './reducers/sort';
import './index.scss';

const composeEnhancers = composeWithDevTools({});
const logger = createLogger();
const reducers = combineReducers({
  movie: singleMovieReducer,
  movies: movieReducers,
  sortBy: sortReducer,
});
const middleware = applyMiddleware(logger, thunk);
const store = createStore(reducers, composeEnhancers(middleware));

const renderRoutes = () => <Provider store={store}><Router><App /></Router></Provider>;

ReactDOM.render(renderRoutes(), document.getElementById('root'));
