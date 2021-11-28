import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { MdClear } from 'react-icons/md';
import './navbar.css'
const Navbar = () => {
    const [click,setClick]=useState(false)
    return (
      <>
        <div className='navbar'>
          <nav className='main-nav'>
            <div className='logo'>
              <h2>Tosir</h2>
            </div>
            <div onClick={() => setClick(!click)} className='toggle'>
              {click ? (
                <span className='corsbar'>
                  <MdClear />
                </span>
              ) : (
                <FaBars />
              )}
            </div>
            <div className={click? 'nav-menu' : 'nav-menu close'}>
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/'>About</NavLink>
              <NavLink to='/'>Contact</NavLink>
              <NavLink to='/'>Home</NavLink>
            </div>
          </nav>
        </div>
      </>
    );
};

export default Navbar;