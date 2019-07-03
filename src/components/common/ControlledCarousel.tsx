import Carousel from 'react-bootstrap/Carousel'
import React from 'react';

interface PassedProps {
    images: string;
}

type Props = PassedProps;

class ControlledCarousel extends React.Component {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100 carousel-item active"
                    src="https://www.atomix.com.au/media/2017/07/StockPhotoBanner.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 carousel-item"
                    src="https://www.atomix.com.au/media/2017/07/Stock_Photo_Mistake_1.jpg"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default ControlledCarousel;
