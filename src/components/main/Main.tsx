import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../home/Home'
import { About } from '../about/About';
import { Contact } from '../contact/Contact';
import { Gallery } from '../gallery/Gallery';
import { Testimonials } from '../testimonials/Testimonials';

export class Main extends Component {
  render() {
    return (
        <Switch>
            <Route exact path='/home' component={Home}></Route>
            <Route exact path='/about' component={About}></Route>
            <Route exact path='/contact' component={Contact}></Route>
            <Route exact path='/gallery' component={Gallery}></Route>
            <Route exact path='/contact' component={Contact}></Route>
            <Route exact path='/testimonials' component={Testimonials}></Route>
        </Switch>
    );
  }
}

export default Main;
