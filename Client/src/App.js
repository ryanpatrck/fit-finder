import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import AuthService from './components/Auth/AuthService';
import withAuth from './components/Auth/withAuth';
import Home from './Pages/Home'



class App extends Component {

  render() {
    console.log('I was triggered during render')
    return (
     
      <div>
      <div className="main-page">
          <div className="top-section">
            <h1>Welcome, {name}</h1>
          </div>
          <div className="bottom-section">
            <button onClick={this._handleLogout}>LOGOUT</button>
          </div>
        </div>
      </div>

    );
  }

}


export default withAuth(App);
