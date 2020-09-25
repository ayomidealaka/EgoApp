import React from 'react';

import logo from './../asset/logo.png';
import style from './../App.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className={style.navigation}>
        <Link to="/" className={style.LogoLink}>
          <img src={logo} alt="Ego" />
          {/* <h1>Égo</h1> */}
        </Link>
        <Link to="/about" className={style.Link}>
          About
        </Link>
        <Link to="/contact" className={style.Link}>
          Contact
        </Link>
        <Link to="/plans" className={style.Link}>
          Plans
        </Link>
      </div>
      <div to="/signup" className={style.Link_signup}>
        <Link to="/login" className={style.Login_Button}>
          Login
        </Link>
        <Link to="/signup" className={style.Signup_Button}>
          Sign Up
        </Link>
        {/* <div className={style.overlay}>
          <div className={style.arrow}>Sign Up</div>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
