import React, { RefObject } from 'react';
import ControlledCarousel from '../common/ControlledCarousel';

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
                <div id="carousel">
                    <ControlledCarousel/>
                </div>
            </div>
        );
    }
}

export default BottomLevel;
