import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import EnidPhoto from '../assets/images/esoto_profilepic_bw.jpg'

class AboutSection extends Component {
    render() {
        return (
            <Container fluid id="about" className="bgrd_shaded">
                <Container>
                    <Row>
                        <Col sm={8}>
                            <h2 className="title-font mt-5 mb-5">about me</h2>
                            <p>I was born September 10, 1983 in Venezuela. I always loved to draw since I was a kid, and I thought I was very good at it. Growing up I got more crafty; I learned about art history, drawing and painting techniques, and even a little bit of woodworking.</p>

                            <p>I decided I should take advantage of these creative traits, so I went to school and obtained a Bachelors in Graphic Design. This is what I currently do for a living and it has been going very well for many years. I also obtained a A.S. degree in web development in 2012, and I completed a very comprehensive programming bootcamp in 2020. I wanted to expand my skillset to keep up with market demand and to make myself more able to be creative in the digital world.</p>

                            <p className="pb-5">Today, my work focused in both graphic design and front-end development, which turns me into a well-rounded profesional and an asset for any company. This website showcases a few samples of my programming work.</p>
                        </Col>
                        <Col sm={2}>
                        <img src={EnidPhoto} alt="Enid's pic" width="100%" className="rounded-circle mt-5" />
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}

export default AboutSection;