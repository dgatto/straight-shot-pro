import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../home/Home'
import { About } from '../about/About';
import { Contact } from '../contact/Contact';
import { Gallery } from '../gallery/Gallery';
import { Testimonials } from '../testimonials/Testimonials';

interface PassedProps {
  width: number;
  height: number;
}

type Props = PassedProps;

export class Main extends React.Component<Props> {
  render() {
    return (
        <Switch>
            <Route 
              exact path='/home'
              render={(props) => <Home {...props} height={this.props.height} width={this.props.width} />}
            />
            <Route exact path='/about' component={About}></Route>
            <Route exact path='/contact' component={Contact}></Route>
            <Route exact path='/gallery' component={Gallery}></Route>
            <Route exact path='/contact' component={Contact}></Route>
            <Route exact path='/testimonials' component={Testimonials}></Route>
        </Switch>
    );
  }


  componentWillUpdate(nextProps: Props) {
    return this.props !== nextProps;
  }


}

export default Main;
