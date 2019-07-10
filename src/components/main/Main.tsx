import React from "react";
import { Route, Switch } from "react-router-dom";

import { About } from "../about/About";
import { Contact } from "../contact/Contact";
import { Gallery } from "../gallery/Gallery";
import { Home } from "../home/Home";
import { Testimonials } from "../testimonials/Testimonials";

interface PassedProps {}

type Props = PassedProps;

export class Main extends React.Component<Props> {
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


  componentWillUpdate(nextProps: Props) {
    return this.props !== nextProps;
  }


}

export default Main;
