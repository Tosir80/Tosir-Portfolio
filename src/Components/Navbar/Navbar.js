import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { MdClear } from 'react-icons/md';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import './navbar.css'
import Button from '@restart/ui/esm/Button';
const Navbar = () => {
    const [click,setClick]=useState(false)
    return (
      <>
        <div className='header'>
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
            <div className={click ? 'nav-menu' : 'nav-menu close'}>
              <HashLink  to='/#home'>Home</HashLink>
              <HashLink  to='/#about'>About</HashLink>
              <HashLink  to='/#service'>Service</HashLink>
              <HashLink  to='/#project'>Projects</HashLink>
              <HashLink  to='/#contact'>Contact</HashLink>
              <NavLink  to='/resume/Resume_Tosir.pdf' target='_blank' download>
                <span className='resume'>Resume</span>
              </NavLink>
            </div>
          </nav>
        </div>
      </>
    );
};

export default Navbar;