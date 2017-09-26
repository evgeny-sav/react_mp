import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App/App';
import './index.scss';

const renderRoutes = () => <Router><App /></Router>;

ReactDOM.render(renderRoutes(), document.getElementById('root'));
