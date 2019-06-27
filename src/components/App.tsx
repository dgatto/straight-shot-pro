import React, { Component } from 'react';
import './App.css';
import { Navigation } from "../components/navigation/Navigation";
import { Main } from "../components/main/Main";
import { BrowserRouter } from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <Navigation />
          <Main />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
