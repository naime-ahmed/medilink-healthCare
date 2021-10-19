import React from 'react';
import './NavigationBar.css';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo-dark.png';
import UseAuth from '../../../Hooks/UseAuth';

const NavigationBar = () => {

  const { user , handleSignOut} = UseAuth();
  return (
    <nav className="nav-style">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <input type="checkbox" id="click"/>
      <label htmlFor="click" className="menu-btn">
        <i className="fas fa-bars"></i>
      </label>
      <ul>
        { user.email && <li> Welcome { user.displayName}</li>}
        <li><Link className="active " to="/home">Home</Link></li>
        <li><Link  to="/doctors">Doctors</Link></li>
        <li><Link to="/about">About</Link></li>
        { user.email ?
        <li><button onClick={handleSignOut} className="signOut-btn" >Sign out</button></li> : <li><Link to="/signIn">Sign in</Link></li>
         }
      </ul>
    </nav>
  );
};

export default NavigationBar;