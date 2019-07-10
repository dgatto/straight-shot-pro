import React from 'react';
import ControlledCarousel from '../common/ControlledCarousel';
import { Button, Row, Container, Col } from 'react-bootstrap';

interface PassedProps {
  height: number,
  width: number,
}

type Props = PassedProps;

export class BottomLevel extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    componentWillUpdate(nextProps: Props) {    
        return this.props !== nextProps;
    }

    render() {
        const divStyle={
            height: this.props.height,
            width: this.props.width,
        }
        return (
            <div id="section-two" style={divStyle} className='home section-two'>
                <Container>
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
