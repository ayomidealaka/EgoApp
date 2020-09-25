import React from 'react';

import style from './../App.css';
import { Link } from 'react-router-dom';

const Body = () => {
  return (
    <div className={style.Body_text}>
      <h1>
        Immerse mobile banking with{' '}
        <div className={style.ms_slider}>
          <ul className={style.ms_slider_words}>
            <li className={style.ms_slider_word}>culture</li>
            <li className={style.ms_slider_word}>swag</li>
            <li className={style.ms_slider_word}>dexterity</li>
            <li className={style.ms_slider_word}>culture</li>
          </ul>
        </div>
      </h1>
      <h3>
        Handle a business of any size - from startup to large enterprise. Use
        spikes's software or other APIs to accept payments.
      </h3>
      <span>
        <Link to="/signup" className={style.getStarted}>
          <div className={style.getStarted_Button}>Get started</div>
        </Link>
        <p className={style.itsFree}>It's free</p>
      </span>
    </div>
  );
};

export default Body;
