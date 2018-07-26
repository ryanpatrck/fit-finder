import React, { Component } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { Row, Card, CardTitle, Col, Parallax } from 'react-materialize';
import './View.css'
import Ross from "../../Images/Ross.jpeg";
import Gym from "../../Images/Gym.jpg";
class View extends Component {
  render() {
    return (
      <div className="Wrapper">
        <Nav history={this.props.history} />
        <Row>
          <Col m={12} s={12}>
            <Card horizontal header={<CardTitle image={Ross} > </CardTitle>} actions={[<a href='/exercise'>Match</a>]}>
              <p><Row>Name: Ross</Row>
                <Row>Credentials: CPT: Certified Personal Trainer</Row>
                <Row>Years of Service: Five Years</Row>
                <Row>Email Address: <a href="mailto:R0sspatrick6@gmail.com"> R0sspatrick6@gmail.com </a></Row>
                <Row>Phone Number: 813-391-5705 </Row>
                <Row>Price Per Month: $200 per month</Row>
              </p>
            </Card>
          </Col>
        </Row >
        <Parallax imageSrc={Gym} />
        <Footer />
      </div>
    )

  }

}

export default View;