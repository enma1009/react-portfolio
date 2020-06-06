import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Image imports
import ServicesGraphic from "../assets/images/services-graphic.svg";
import PrintIcon from "../assets/images/print-icon.svg";
import IllustrationIcon from "../assets/images/illustration-icon.svg";
import MarketingIcon from "../assets/images/marketing-icon.svg";
import BrandingIcon from "../assets/images/branding-icon.svg";
import WebIcon from "../assets/images/web-icon.svg";

class ServicesSection extends Component {
    render() {
        return (
            <Container fluid className="yellow_bgrd" id="services">
                <Container>
                    <Row>
                        <Col></Col>
                        <Col xs={{ span: 3, offset: 4 }}>
                            <img className="header-graphic-01 img-fluid" height="100%" src={ServicesGraphic} alt="decorative circle" />
                        </Col>
                    </Row>
                    
                    <h2 className="title-font mx-auto mt-5 mb-5">services</h2>
                    <p className="text-center">These are a few of the things I can do. <br />
                    If you need anything else, get in touch! I have many hidden talents.</p>

                    <Row className="text-center mb-5">
                        <Col xs={6} sm={4} md={{ span: 2, offset: 1 }}>
                            <img width="100%" src={PrintIcon} alt="print icon" />
                            <p className="bold-font">PRINT</p>
                            <p>Brochures, booklets, flyers, posters, print ads, billboards &amp; more</p>
                        </Col>
                        <Col xs={6} sm={4} md={2}>
                            <img width="100%" src={IllustrationIcon} alt="illustration icon" />
                            <p className="bold-font">ILLUSTRATION</p>
                            <p>Custom graphics, icons &amp; illustrations for your needs</p>
                        </Col>
                        <Col xs={6} sm={4} md={2}>
                            <img width="100%" src={MarketingIcon} alt="marketing icon" />
                            <p className="bold-font">MARKETING</p>
                            <p>Creative assets for your social media presence &amp; e-blasts</p>
                        </Col>
                        <Col xs={6} sm={4} md={2}>
                            <img width="100%" src={BrandingIcon} alt="branding icon" />
                            <p className="bold-font">BRANDING</p>
                            <p>Carefully crafted logos &amp; visual elements</p>
                        </Col>
                        <Col xs={6} sm={4} md={2}>
                            <img width="100%" src={WebIcon} alt="web icon" />
                            <p className="bold-font">WEB DESIGN</p>
                            <p>UI Design &amp; programming of fresh websites</p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default ServicesSection;