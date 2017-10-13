import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App/App';
import movieReducers from './reducers/movies';
import './index.scss';

const logger = createLogger();
const reducers = combineReducers({
  movies: movieReducers,
});
const middleware = applyMiddleware(logger, thunk);
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), middleware); // eslint-disable-line

const renderRoutes = () => <Provider store={store}><Router><App /></Router></Provider>;

ReactDOM.render(renderRoutes(), document.getElementById('root'));
