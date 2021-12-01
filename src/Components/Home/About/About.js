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
          <div className='py-5  d-md-flex '>
            <div>
              <div data-aos='fade-left'>
                <img className='about-img' src={aboutimg} alt='' />
              </div>
            </div>
            <div className='text-light ' data-aos='fade-right'>
              <div className='about_container ps-md-5  pt-4 pt-md-0'>
                <h3 className='about-title'>About me</h3>
                <p className='hire-info'>Why Choose Me?</p>
                <div className='about-info-text'>
                  <p>Hi,This is Tosir , I am a Frontend Web Developer</p>
                  <p>
                    I have solid 1 year experience about this
                    sector. I have a good knowledge about HTML, CSS,
                    JavaScript, React, Redux, Node.js, Express, MongoDB,
                    Bootstrap, Sass, RESTful API, Git, Github, Netlify,Heroku and more.
                  </p>
                  <p> 
                    I am a self-motivated and hardworking individual who is
                    always ready to learn new technologies and improve
                    existing ones. I am a team player who is always eager to
                    learn new things and improve existing ones.
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