import React, { Component } from 'react';
import './App.css';
import InputMirror from './components/InputMirror'
import store from './store/index'

class App extends Component {
  render() {
    return (
        <div className="App">
          <InputMirror store={ store }/>
        </div>
    );
  }
}

export default App;
