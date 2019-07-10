import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { Content } from "../../assets/ParagraphContent";

export class GalleryChunk extends Component {
  render() {
    return (
      <div className="about">
        <Container>
          <Row>
            <Col>{Content.AboutPersonalDesc}</Col>
          </Row>
          <Row>
            <Col>{Content.AboutExperienceDesc}</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default GalleryChunk;
