import React from 'react';

import logo from './../asset/logo.png';
import style from './../App.css';
import { NavLink, Link } from 'react-router-dom';

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
      <Link to="/signup" className={style.Link_signup}>
        <div className={style.Signup_Button}>Sign Up</div>
        <div className={style.overlay}>
          <div className={style.arrow}>Sign Up</div>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
