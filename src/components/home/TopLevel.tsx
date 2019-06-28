import React, { Component, PureComponent } from 'react';

interface PassedProps {
  height: number,
  width: number,
}

type Props = PassedProps;

export class TopLevel extends React.Component<Props> {
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
      <div style={divStyle} className='home section-one'>
        
      </div>
    );
  }
}

export default TopLevel;
