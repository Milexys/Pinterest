import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import './css/styles.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
         <Dashboard />
        </header>
      </div>
    );
  }
}

export default App;
