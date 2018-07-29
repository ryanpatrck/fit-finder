import React from 'react';
import AuthService from './AuthService';

export default function withAuth(AuthComponent){
    const Auth = new AuthService();
    return class AuthWrapped extends React.Component{
        constructor(){
            super();
            this.state = {
                user:null
            }
        }
        componentWillMount() {
            console.log("In the auth!!");
            if (!Auth.loggedIn()) {
                console.log("Not Loggged in")
                this.props.history.replace('/login')
            }
            else {
                console.log("Loggged in")
                try {
                    const profile = Auth.getProfile()
                    this.setState({
                        user: profile
                    })
                }
                catch(err){
                    Auth.logout()
                    this.props.history.replace('/login')
                }
            }
        }
        render(){
            if(this.state.user){
                console.log("User exists!");
                return(
                   <AuthComponent history={this.props.history} user={this.state.user} />
                )

            }
            else{
                return null;
                
            }
        }
    }
}
