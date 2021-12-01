import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TypeWriter from 'typewriter-effect'
import './Banner.css'
import { BsFacebook } from 'react-icons/bs';
import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Button from '@restart/ui/esm/Button';
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
const Banner = () => {
 
    return (
      <div id='home'>
        <Container>
          <div className='info-tpyer pt-5 mt-5 text-center'>
            <div>
              <div className='banner-info' data-aos='zoom-in'>
                <h4 className='hi'>Hi There!</h4>
                <h2 className='text-light fs-1'>
                  I'm <span className='tosir'>Tosir</span>{' '}
                </h2>
              </div>
              <div className='typer'>
                <TypeWriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 80,
                    strings: [
                      ` <span>I'm a Web Developer </span>`,
                      ` <span>I'm a Frontend Designer</span>`,
                    ],
                  }}
                ></TypeWriter>
              </div>
            </div>
            <div className='social-icon'>
              <a
                href='https://www.facebook.com/profile.php?id=100008368427419'
                target='_blank'
              >
                <span className='icon1'>
                  <BsFacebook />
                </span>
              </a>
              <a
                href='https://www.linkedin.com/in/tosiruzzaman-tosir-3306a6182'
                target='_blank'
              >
                <span className='icon2'>
                  <AiFillLinkedin />
                </span>
              </a>
              <a href='https://github.com/Tosir80' target='_blank'>
                <span className='icon3'>
                  <AiOutlineGithub />
                </span>
              </a>
            </div>
            <div className='banner-btn'>
              <HashLink to='/#contact'>
                <Button className='banner-1'>Contact me</Button>
              </HashLink>

              <NavLink to='/resume/Resume_Tosir.pdf' target='_blank' download>
                <Button className='banner-2'>Download Resume</Button>
              </NavLink>
            </div>
          </div>
        </Container>
      </div>
    );
};

export default Banner;