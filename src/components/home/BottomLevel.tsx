import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import ControlledCarousel from "../common/ControlledCarousel";

interface PassedProps {}

type Props = PassedProps;

export class BottomLevel extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    componentWillUpdate(nextProps: Props) {
        return this.props !== nextProps;
    }

    render() {
        return (
            <div id="section-two" className='home section-two'>
                <Container fluid={true}>
                    <Row>
                        <Col>
                            <div id="carousel">
                                <ControlledCarousel/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant="outline-danger">Learn more</Button>
                        </Col>
                        <Col>
                            <p>|</p>
                        </Col>
                        <Col>
                            <Button variant="outline-danger">Schedule a Shoot</Button>
                        </Col>
                    </Row>
                </Container>


            </div>
        );
    }
}

export default BottomLevel;
