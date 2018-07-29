import React, { Component } from "react";
import { Carousel, Parallax, Row } from 'react-materialize';
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import './Matching.css';
import Gym from "../../Images/Gym.jpg";
import Ross from "../../Images/Ross.jpeg";
import Sean from "../../Images/Sean.jpg"
import Dustin from "../../Images/Dustin.jpg"
class Matching extends Component {
  render() {
    return (
      <div className="Wrapper">
        <Nav history={this.props.history} />
        <h1 className="Available"> Trainers Available Now! </h1>
        <Parallax imageSrc={Gym} />
        <div className='container'>
          <div className='pick'>
            <h1 className='pick'> Pick A Trainer! </h1>
          </div>
          <Row className="carousel">
            <a href='/view'><Carousel images={[
              Ross,
              Sean,
              Dustin,
            ]} />
            </a>
          </Row>
        </div>
        <Parallax imageSrc={Gym} />
        <Footer />
      </div>
    )
  }
}

export default Matching;