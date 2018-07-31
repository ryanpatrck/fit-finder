import React, { Component } from 'react';
import AuthService from './components/AuthService';
import withAuth from './components/withAuth';




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

  //Render the protected component
  render() {

    let name = this.props.confirm.name;

    return (
      <div className="App">
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

//In order for this component to be protected, we must wrap it with what we call a 'Higher Order Compoenent' or HOC.
export default withAuth(App);

