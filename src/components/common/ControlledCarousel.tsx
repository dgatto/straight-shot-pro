import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
class ControlledCarousel extends React.Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="https://i.imgur.com/KdCwyHD.jpg" />
                </div>
                <div>
                    <img src="https://i.imgur.com/gl1YgXi.jpg" />
                </div>
                <div>
                    <img src="https://i.redd.it/2h95qrwwjay01.jpg" />
                </div>
            </Carousel>
        );
    }
};

export default ControlledCarousel;