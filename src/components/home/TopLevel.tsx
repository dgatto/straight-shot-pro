import React, { Component, PureComponent } from "react";
import { Col, Container, Row } from "react-bootstrap";

interface PassedProps {}

type Props = PassedProps;

export class TopLevel extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.onClick.bind(this);
  }

  componentWillUpdate(nextProps: Props) {
    return this.props !== nextProps;
  }

  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col>
            <div id="section-one" className='home section-one' onClick={this.onClick.bind(this)}>
              <div className="title"><p>Straight Shot Productions</p></div>
            </div>
          </Col>
        </Row>
      </Container>

    );
  }

  private onClick() {
    const sectionTwoElement = document.getElementById("section-two");
    if (!!sectionTwoElement) {
      sectionTwoElement.scrollIntoView({behavior: "smooth"});
    }
  }
}

export default TopLevel;
