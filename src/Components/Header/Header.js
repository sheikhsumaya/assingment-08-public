
import React from 'react';
import logo from '../../Images/icon.jpg';
import './Header.css';

const header = () => {
  return (
    <nav className='header-name'>
    <img src={logo} alt="" />
    <div>
      <a href="/home">Home</a>
      <a href="/detail">Details Us</a>
      <a href="/shop">Shop</a>
      <a href="/contact">Contact Us</a>
    </div>
    </nav>
  );
};

export default header;