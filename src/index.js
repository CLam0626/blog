import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './About';
import Blog from './Blog';
import Contact from './Contact';

import { BrowserRouter, Route } from 'react-router-dom'

import * as serviceWorker from './serviceWorker';


ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route path="/" component={App}/>
            <Route path="/about" component={About}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/contact" component={Contact}/>
        </div>   
    </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();