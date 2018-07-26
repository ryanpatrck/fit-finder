import React, { Component } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { Row, Input, Modal, Button, Parallax, Col, Card, Icon } from 'react-materialize';
import Publisher from "../../components/Publisher"
import Subscriber from "../../components/Subscriber"
import './Exercise.css'
import Gym from "../../Images/Gym.jpg";
class Exercise extends Component {
  render() {
    return (
      <div>
        <Nav history={this.props.history} />
        <Parallax imageSrc={Gym} />
        <h1 className="exercise"> Exercise Session </h1>

        <div className="container">
          <Row>
            <Col s={6}>
              <Subscriber />
              <Publisher />

            </Col>
            <Col m={6} s={6}>
              <Card className='exercises' textClassName='grey-text'  >
                <p>
                  <Row>
                    <h2> Exercises </h2>
                    </Row>
                  <Row className='one'>
                    <Input className='group2' name='group1' type='checkbox' value='red' label='20 Pushups' />
                  </Row>
                  <Row>
                    <Input className='group2' name='group2' type='checkbox' value='red' label='20 Situps' />
                  </Row>
                  <Row>
                    <Input className='group2' name='group2' type='checkbox' value='red' label='30 Squats' />
                  </Row>
                  <Row>
                    <Input className='group2' name='group2' type='checkbox' value='red' label='10 Burpees' />
                  </Row>
                  <Row>
                    <Input className='group2' name='group2' type='checkbox' value='red' label='25 Leg Raises' />
                  </Row>
                  <Row>
                    <Input className='group2' name='group2' type='checkbox' value='red' label='10 Bench Press' />
                  </Row>
                  <Row>
                    <Modal
                      header='Session has ended!'
                      bottomSheet
                      trigger={<Button>End Session</Button>}>
                      Thank you for using FitFinder. To return to the home page press <a href='/home'> Here </a>
                    </Modal>
                  </Row>
                </p>
              </Card>

            </Col>
          </Row>
          <Footer />
        </div>
      </div>
    )
  }
}
export default Exercise;