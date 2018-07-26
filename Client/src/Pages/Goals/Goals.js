import React, { Component } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { Row, Col, Input, Parallax, Button, Card } from 'react-materialize';
import './Goals.css'
import Gym from "../../Images/Gym.jpg";
import API from "../../Utils/API";



class Home extends Component {

    state = {
        name: "",
        age: "",
        weight: "",
        height: ""
      };
    componentDidMount() {
        console.log("At the home!!!")
    }
    loadUsers = () => {
        API.getUser()
          .then(res =>
            this.setState({ Users: res.data, name: "", age: "", weight: "", height: "" 
        }))
          .catch(err => console.log(err));
      };
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
      handleFormSubmit = event => {
        event.preventDefault();
        // Use this Function to save database
        if (this.state.name && this.state.age) {
          API.saveUser({
            name: this.state.name,
            age: this.state.age,
            weight: this.state.weight,
            height: this.state.height
          })
            .then(res => this.loadUsers())
            .catch(err => console.log(err));
        }
      };

    render() {

        return (
            <div className="Wrapper">
                <Nav history={this.props.history} />
                <Row>
                    <form className="Goals">
                        <Card className="Goals black-text">
                            <Row>
                                <h4 className="Info"> Setting Your Training Goals </h4>
                            </Row>
                            <Row className='Name'>
                                <Input s={6} name='name' value={this.state.name} onChange={this.handleInputChange} label="Full Name" />
                            </Row>
                            <Row className='Age'>
                                <Col s={4}>
                                    <Input s={4} name='age' value={this.state.age} onChange={this.handleInputChange} label="Age" />
                                </Col>
                                <Col s={4}>
                                    <Input s={6} name='height' value={this.state.height} onChange={this.handleInputChange}  label="Height" />
                                </Col>
                                <Col s={4}>
                                    <Input s={4} name='weight' value={this.state.weight} onChange={this.handleInputChange} label="Weight" />
                                </Col>
                            </Row>
                            <Row className='Help'>
                                <Col>
                                    <h5> How can a personal trainer help you?</h5>
                                </Col>
                                <Row>
                                    <Col>
                                        <h5>Check all that applies. </h5>
                                    </Col>
                                </Row>
                                <div className="Check">
                                    <Row>
                                        <Col s={6}>
                                            <Input s={12} name='group1' type='checkbox' value='red' label='Lose Body Fat' />
                                        </Col>
                                        <Col s={6}>
                                            <Input s={12} name='group1' type='checkbox' value='red' label='Develop Body Tone' />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col s={6} >
                                            <Input s={12} name='group1' type='checkbox' value='red' label='Increase Muscle Size' />
                                        </Col>
                                        <Col s={6} >
                                            <Input s={12} name='group1' type='checkbox' value='red' label='Rehabilitate an Injury' />
                                        </Col>
                                    </Row>
                                </div>
                            </Row>
                            <Row>
                                <Input type='textarea' label='Other' s={4} />
                            </Row>
                            <Row className='Lifestyle'>
                                <Col>
                                    <h5> Where do you rate health in your life? </h5>
                                </Col>
                                <Col s={4}>
                                    <Input s={12} name='group2' type='checkbox' value='red' label='Low Priority' />
                                </Col>
                                <Col s={4}>
                                    <Input s={12} name='group2' type='checkbox' value='red' label='Medium Priority' />
                                </Col>
                                <Col s={4}>
                                    <Input name='group2' type='checkbox' value='red' label='High Priority' />
                                </Col>
                            </Row>
                            <Row className='Fitness'>
                                <Col>
                                    <h5> How committed are you to your fitness goals? </h5>
                                </Col>
                                <Col s={4}>
                                    <Input name='group1' type='checkbox' value='red' label='Very' />
                                </Col>
                                <Col s={4}>
                                    <Input name='group1' type='checkbox' value='red' label='Seriously' />
                                </Col>
                                <Col s={4}>
                                    <Input name='group1' type='checkbox' value='red' label='Not Very' />
                                </Col>
                            </Row>
                            <div className="submit">
                                <Button waves='light' node='a' href='/matching'> Go to Matching </Button>
                                <Col>
                                    <Button className="goals" waves='light' name="action" onClick={this.handleFormSubmit} >Submit</Button>
                                </Col>
                            </div>
                        </Card>
                    </form>

                    <Parallax imageSrc={Gym} />
                </Row>
                <Row >
                    <Footer />
                </Row>
            </div>
        )

    }
 
    

}

export default Home;