import React from 'react';
import './Signup.css';
import AuthService from '../../components/Auth/AuthService';
import { Row, Input, Button, Card, Col } from 'react-materialize'

class Signup extends React.Component {
    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.Auth = new AuthService();
    }
    componentWillMount() {
        if (this.Auth.loggedIn())
            this.props.history.replace('/');
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleFormSubmit(e) {
        e.preventDefault();
        this.Auth.login(this.state.username, this.state.password)
            .then(res => {
                this.props.history.replace('/');
            })
            .catch(err => {
                alert(err);
            })
    }
    render() {
        return (
            <div className="center">
                <Card className="signup black-text">
                    <Row className="form-header">
                        <Col s={12}>
                            <h5> Sign-Up </h5>
                        </Col>
                    </Row>
                    {/* User Trainer Selection */}
                    <Row>
                        <Col>
                            <Input name='group1' type='radio' value='red' label='User' />
                            <Input name='group1' type='radio' value='yellow' label='Trainer' />
                        </Col>
                    </Row>
                    {/* First Name and Last Name */}
                    <Row>
                        <Col>
                            <Input s={6} label="First Name" />
                            <Input s={6} label="Last Name" />
                        </Col>
                    </Row>
                    <Row>
                        <Col s={12}>
                            <Input type="email" label="Email" s={12} />
                        </Col>
                    </Row>
                    <Row>
                        <Col s={12}>
                            <Input label="Phone Number" s={12} />
                        </Col>
                    </Row>
                    <form onSubmit={this.handleFormSubmit}>
                        <Row>
                            <Col s={12}>
                                <Input
                                    s={12}
                                    className="form-item"
                                    type="text"
                                    label="Username"
                                    name="username"
                                    onChange={this.handleChange}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col s={12}>
                                <Input
                                    s={12}
                                    className="form-item"
                                    type="password"
                                    label="Password"
                                    name="password"
                                    onChange={this.handleChange}
                                />
                            </Col>
                        </Row>
                        <input
                            className="form-submit1"
                            type="submit"
                            value="Create Account"
                        />
                    </form>
                </Card >
            </div>
        )
    }
}


export default Signup;