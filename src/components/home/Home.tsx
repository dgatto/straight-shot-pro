import React, { Component, PureComponent } from 'react';
import { TopLevel } from '../home/TopLevel';
import { BottomLevel } from '../home/BottomLevel';

interface HomeProps {
  width: number;
  height: number;
};

type Props = HomeProps;

export class Home extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    
    return (
      <div>
        <TopLevel height={this.props.height} width={this.props.width}/>
        <BottomLevel height={this.props.height} width={this.props.width}/>
      </div>
    );
  }
}

export default Home;
