import React, { Component } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { Row, Col, Card, Parallax,Icon } from 'react-materialize';
import './Home.css'
import Gym from "../../Images/Gym.jpg";

class Home extends Component {

  componentDidMount() {
    console.log("At the home!!!")
  }

  render() {

    return (
      <div className="Wrapper">
        <Nav history={this.props.history} />
        <Row>
        <h1 className="Fitfinder"> FitFinder </h1>
        </Row>
        <Parallax imageSrc={Gym} />
        <Col m={6} s={12}>
          <Card className='blue-blak darken-1 center-align' textClassName='white-text' title='About FitFinder' >
            <p className='User'><Row>FitFinder is a web-based application that pairs users with personal fitness trainers for live exercise sessions.</Row>
              <Row>Users will be able to choose their trainer that matches with their personal training goals. Once the users are paired, users and trainers&nbsp;will&nbsp;be&nbsp;able&nbsp;to&nbsp;do&nbsp;live&nbsp;exercise&nbsp;sessions.</Row> </p>
          </Card>
        </Col>
        <Parallax imageSrc={Gym} />
        <Col m={6} s={12}>
          <Card className='' textClassName='white-text' title='User Benefits' actions={[<a href='/goals'>Start Making Goals!</a>]}>
            <p>
              <Row><Icon>brightness_1</Icon> Pairs with trainers that match their goals</Row>
              <Row><Icon>brightness_1</Icon> Lists exercises on page to help with live session</Row>
              <Row><Icon>brightness_1</Icon> Set goal expectations for your health</Row>
              <Row><Icon>brightness_1</Icon> Able to exercise from the comfort of your home </Row>
            </p>
          </Card>
        </Col>
        <Parallax imageSrc={Gym}/>
          <Col m={6} s={12}>
          <Card className='' textClassName='white-text' title='Trainer Benefits' actions={[<a href='/exercise'>Start Training Session!</a>]}>
            <p>
              <Row><Icon>brightness_1</Icon> Makes finding clients easy by pairing with clients</Row>
              <Row><Icon>brightness_1</Icon> Open communication with clients that are matched </Row>
              <Row><Icon>brightness_1</Icon> Lists exercises on page to help with live session for clients</Row>
              <Row><Icon>brightness_1</Icon> Find clients that better suits your training style </Row>
              <Row><Icon>brightness_1</Icon> Able to train from the comfort of your home </Row>
            </p>
          </Card>
        </Col>
        <Parallax imageSrc={Gym} />
        <Col m={6} s={12}>
          <Card className='blue-black darken-1 center-align' textClassName='white-text' title='What are you waiting for?' actions={[<a href='/signup'>Sign up Now!</a>]}>
          </Card>
        </Col>
        <Row >
          <Footer />
        </Row>
      </div>
    )

  }

}

export default Home;