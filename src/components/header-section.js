import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import headerGraphic01 from "../assets/images/header-graphic-01.svg";
import headerGraphic02 from "../assets/images/header-graphic-02.svg";
import headerGraphic03 from "../assets/images/header-graphic-03.svg";

class HeaderSection extends Component {
    render() {
        return (
            <Container style={{border:'1px solid black'}}>
                <Row>
                    <Col xs={8}>
                        <img className="header-graphic-01 img-fluid" height="100%" src={headerGraphic01} alt="decorative circles" />
                    </Col>
                    <Col xs={{ span: 2, offset: 2 }}>
                        <ul className="menu mr-1">
                            <li><a href="#services">Services</a></li>
                            <li><a href="#work">Work Samples</a></li>
                            <li><a href="#about">About Me</a></li>
                            <li><a href="#contact">Contact Me</a></li>
                        </ul>
                    </Col>
                </Row>
                <Row className="mt-5 pb-5">
                    <Col xs={{ span: 8, offset: 1 }} style={{border:'1px solid black'}}>
                        <h1 className="light-font align-bottom">Hello, <br />
                            my name is <br />
                            <span className="title-font name">Enid</span>
                        </h1>
                    </Col>
                    <Col xs={2} style={{border:'1px solid black'}}>
                    <img className="header-graphic-02 img-fluid" height="100%" src={headerGraphic02} alt="decorative circle" />
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col xs={{ span: 4, offset: 1 }} className="intro-border" style={{border:'1px solid black'}}>
                        <p>I am an experienced graphic designer, illustrator and aspiring UX/UI designer.</p>
                    </Col>
                    <Col xs={{ span: 3, offset: 4 }} style={{border:'1px solid black'}}>
                    <img className="header-graphic-02 img-fluid" height="100%" src={headerGraphic03} alt="decorative circle" />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default HeaderSection;

