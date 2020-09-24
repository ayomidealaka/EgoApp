import React, { Component } from 'react';
import MainPage from './Components/MainPage';

import style from './App.css';

class App extends Component {
  render() {
    return (
      <div className={style.App}>
        <MainPage />
      </div>
    );
  }
}

export default App;
