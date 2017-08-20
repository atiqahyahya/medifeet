import React, { Component } from 'react';
import Login from './components/login';
import Staff from './components/staff';
import Manager from './components/manager';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      MEDIFEET
         <Login />
      </div>

      <div className="Login">
      LOGIN PAGE
      </div>

      );
    }
  }

export default App;


