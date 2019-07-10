import React from 'react';
import './App.css';
import { Navigation } from "../components/navigation/Navigation";
import { Main } from "../components/main/Main";
import { BrowserRouter, Redirect } from 'react-router-dom';

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
          <Main width={this.state.width} height={this.state.height}/>
          <Redirect to='/home'/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
