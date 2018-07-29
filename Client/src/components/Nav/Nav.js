import React from "react";
import AuthService from '../Auth/AuthService';
import './Nav.css'


const Nav = (props) => {

  let Auth = new AuthService();
  let handleLogout = () => {
      Auth.logout()
      props.history.replace('/login')
  }

  return(
  <nav>
    <div className="nav-wrapper">
    <a href="http://www.armonia-fitness.com/wp-content/uploads/2015/03/icon-personal-traning-1200x511.png" class="brand-logo">FitFinder</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/">Home</a></li>
        <li><a href="/signup">Signup</a></li>
        <li><a href="/view">View</a></li>
        <li><a href="/goals">Goals</a></li>
        <li><a href="/matching">Matching</a></li>
        <li><a href="/exercise">Exercise</a></li>
        <li onClick={handleLogout}> <a href="/"> Logout </a> </li>
     
      </ul>
    </div>
  </nav>
  );

}


export default Nav;
