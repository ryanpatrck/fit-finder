import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//Our components
import Home from './Pages/Home/Home'
import Login from './components/Login/Login'
import Matching from './Pages/Matching/Matching'
import View from './Pages/View/View'
import Exercise from './Pages/Exercise/Exercise'
import Signup from './Pages/Signup/Signup'
import Goals from './Pages/Goals/Goals'
import {BrowserRouter as Router, Route} from 'react-router-dom'


ReactDOM.render(<Router>
    <div className='app'>
        <Route path='/'  component={App} />
        <Route exact path='/home'  component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path="/api/users" component={Goals} />
        <Route path='/matching' component={Matching} />
        <Route path='/goals' component={Goals} />
        <Route path="/view" component={View} />
        <Route path="/exercise" component={Exercise} />
    </div>
    </Router>, document.getElementById('root'));
registerServiceWorker();

