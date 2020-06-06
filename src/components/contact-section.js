import React, { Component } from "react";
import Container from 'react-bootstrap/Container';

class ContactSection extends Component {
    render() {
        return (
            <Container fluid id="contact" className="bgrd_dark text-light">
                <Container className="pb-5">
                    <h2 className="title-font mx-auto pt-5 mb-5 yellow-title">contact me</h2>
                    <p className="text-center">Send me an email at enid.soto@gmail.com</p>
                </Container>
            </Container>
        )
    }
}

export default ContactSection;