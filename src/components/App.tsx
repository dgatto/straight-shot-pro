import "./App.css";

import React from "react";
import { BrowserRouter, Redirect } from "react-router-dom";

import { Main } from "../components/main/Main";
import { Navigation } from "../components/navigation/Navigation";

export class App extends React.Component {
  state = {
    width: 0,
    height: 0,
    url: "",
  }

  updateDimensions = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  componentDidMount = () => {
    this.updateDimensions();

    this.setState({
      url: window.location.origin,
    });

    window.addEventListener("resize", this.updateDimensions);
  }

  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <Navigation url={this.state.url}/>
          <Main/>
          <Redirect to='/home'/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
