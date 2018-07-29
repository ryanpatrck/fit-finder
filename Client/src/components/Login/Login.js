import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import AuthService from '../Auth/AuthService';

class Login extends React.Component{
    constructor(){
        super()
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.Auth = new AuthService();
    }
    componentWillMount(){
        if(this.Auth.loggedIn())
            this.props.history.replace('/');
    }
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleFormSubmit(e){
        e.preventDefault();
        this.Auth.login(this.state.username, this.state.password)
        .then(res => {
            this.props.history.replace('/');
        })
        .catch(err => {
            alert(err);
        })
    }

    render(){
        return(
            <div className="center">
                <div className="login-card">
                    <h1>Login</h1>
                    <form onSubmit={this.handleFormSubmit}>
                        <input 
                        className="form-item"
                        type="text" 
                        placeholder="Username" 
                        name="username" 
                        onChange={this.handleChange} 
                        />
                        <input 
                        className="form-item"
                        type="password" 
                        placeholder="Password" 
                        name="password" 
                        onChange={this.handleChange} 
                        />
                        <input 
                        className="form-submit"
                        type="submit" 
                        value="SUBMIT"
                        />
                      <p className="Account">Don't have an account? {" "} <Link className="form-link" to="/signup">Sign Up! </Link> </p> 
                    </form>
                 
                </div>
            </div>
        )
    }
   
}


export default Login;