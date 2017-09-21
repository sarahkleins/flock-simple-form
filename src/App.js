import React, { Component } from 'react';
import SimpleForm from './components/SimpleForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Simple Form</h1>
        <SimpleForm />
      </div>
    );
  }
}

export default App;
