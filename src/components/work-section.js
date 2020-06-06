import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Image import
import ProjectImages from '../assets/project-images';

class WorkSection extends Component {

    render() {
        return (
            <Container id="work">
                <h2 className="title-font mt-5 mb-2">work samples</h2>
                <p className="mb-5">To see some of my graphic design &amp; illustration projects, visit my <a href="https://www.behance.net/enidsoto" target="_blank" rel="noopener noreferrer">behance profile.</a></p>
                <Row>
                {ProjectImages.map(item => (
                    <Col key={item.id} xs={6} md={3}>
                        <a href={item.linkUrl} target="_blank" rel="noopener noreferrer">
                            <img src={item.src} alt={item.title} width="100%" className="rounded-circle shadow mb-4" />
                        </a>
                    </Col>
                ))}
                </Row>
            </Container>
        );
    }
}

export default WorkSection;