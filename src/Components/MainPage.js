import React from 'react';

import './../App.css';
import Navbar from './Navbar';

import style from './../App.css';
import Body from './Body';

const MainPage = () => {
  return (
    <div className={style.Mainpage}>
      <Navbar />
      <Body />
    </div>
  );
};

export default MainPage;
