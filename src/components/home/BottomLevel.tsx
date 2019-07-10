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
                        <Col xs={2}>
                            {/* <div className="home-button button-learn-more"> */}
                                <Button variant="outline-danger">Learn more</Button>
                            {/* </div> */}
                        </Col>
                        <Col xs={8}>
                            <div id="carousel">
                                <ControlledCarousel/>
                            </div>
                        </Col>
                        <Col xs={2}>
                            {/* <div className="home-button button-schedule"> */}
                                <Button variant="outline-danger">Schedule a Shoot</Button>
                            {/* </div> */}

                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default BottomLevel;
