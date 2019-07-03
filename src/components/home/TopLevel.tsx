import React, { Component, PureComponent } from 'react';

interface PassedProps {
  height: number,
  width: number,
}

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
    const divStyle={
      height: this.props.height,
      width: this.props.width,
    }
    return (
      <div style={divStyle} id="section-one" className='home section-one' onClick={this.onClick.bind(this)}>
        <div className="title"><p>Straight Shot Productions</p></div>
      </div>
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
