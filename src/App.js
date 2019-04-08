import React, { Component } from 'react';
import Header from './components/Header/header';

import router from './router/router';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {router}
      </div>
    );
  }
}

export default App;
