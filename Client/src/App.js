import React, { Component } from 'react';
import AuthService from './components/Auth/AuthService';
import withAuth from './components/Auth/withAuth';




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
       <div className="main-page">
          <div className="top-section">
            <h1>FitFinder</h1>
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
