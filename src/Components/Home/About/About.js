import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutimg from '../../../img/Untitled-1.png'
import './about.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  },[]);
    return (
      <div id='about'>
        <Container>
          <div data-aos='fade-up'  className='py-5  d-md-flex '>
            <div>
              <div>
                <img className='about-img' src={aboutimg} alt='' />
              </div>
            </div>
            <div className='text-light '>
              <div className='about_container ps-md-5  pt-4 pt-md-0'>
                <h3 className='about-title'>About me</h3>
                <p className='hire-info'>Why Choose Me?</p>
                <div className='about-info-text'>
                  <p>Hi,This is Tosir , I am a Frontend Web Developer</p>
                  <p>
                    I am Enthusiastic React developer with broad expertise in
                    JavaScript and a willingness to learn and master Back-end
                    Development. Looking for a challenging yet exciting career
                    with a progressive company that will provide development
                    opportunities.I have solid 1 year experience about this
                    sector.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
};

export default About;