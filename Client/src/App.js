import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import AuthService from './components/Auth/AuthService';
import withAuth from './components/Auth/withAuth';
import Home from './Pages/Home'



class App extends Component {
 /* Create a new instance of the 'Authservice' compoenent*/
 Auth = new AuthService();

  state = {
    username: "",
    password: ""
}

/* Here will want to add a method to log the user out upon clicking 'Logout' */
  _handleLogout = () => {
    //include the logout() method from our AuthService helper class here.
    this.Auth.logout();
    this.props.history.replace('/login');
  }

  render() {

    return (
      <div>
       <Switch>
       <Route exact path="/"  component={Home}/>

        </Switch>
      </div>

    );
  }

}


export default withAuth(App);
