import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './pages/Login';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'

import './style/semantic.min.css'

ReactDOM.render(
    <BrowserRouter> 
        <Routes />
    </BrowserRouter>, 
    document.getElementById('root')
);
registerServiceWorker();