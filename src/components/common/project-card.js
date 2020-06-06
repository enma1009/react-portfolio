import React from "react";
import Col from 'react-bootstrap/Col';

function ProjectCard(props) {
    return (
      <Col xs={6} md={3}>
        <img alt={props.title} src={props.image} />
      </Col>
    );
  }
  
  export default ProjectCard;
  