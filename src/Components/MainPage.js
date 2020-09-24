import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './../App.css';
import Navbar from './Navbar';

import Body from './Body';
import Plans from './Plans';
import Contact from './Contact';

import style from './../App.css';

const MainPage = () => {
  return (
    <div className={style.Mainpage}>
      <Navbar />
      <Switch>
        <Route path="/" component={Body} exact></Route>
        <Route path="/plans" component={Plans} exact></Route>
        <Route path="/contact" components={Contact} exact></Route>
      </Switch>
    </div>
  );
};

export default MainPage;
