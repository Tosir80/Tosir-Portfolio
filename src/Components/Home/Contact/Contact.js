import React from 'react';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Col, Container, Row } from 'react-bootstrap';
import './contact.css'
 import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { MdMarkEmailRead } from 'react-icons/md';
  import { AiFillPhone  } from 'react-icons/ai';
  import { BiMap } from 'react-icons/bi';
const Contact = () => {
      const form = useRef();

      const sendEmail = (e) => {
        e.preventDefault();

        emailjs
          .sendForm(
            'service_znfvp1q',
            'template_6il34gw',
            form.current,
            'user_cAlQNU0603eZid5f49ASl'
          )
          .then(
            (result) => {
             if(result.text === 'OK'){
                toast('Your message has been sent successfully!');
             }
            },
            (error) => {
              console.log(error.text);
            }
          );
          e.target.reset();
        
      };
    return (
      <Container id='contact'>
        <ToastContainer />
        <h3 className='contact-title'>
          <span>Contact Me</span>
        </h3>
        <Row>
          <Col md={6} data-aos='fade-right'>
            <div className='contact-info'>
              <h3 className="text-danger  fs-1  ">Let's connect</h3>
              <div>
                <span className='email-icon'>
                  <MdMarkEmailRead />
                </span>
                <span className='email-address'>
                  <a href='mailto:tosiruzzzamantosir@gmail.com'>
                    tosiruzzamantosir@gmail.com
                  </a>
                </span>
              </div>
              <div>
                <span className='email-icon'>
                  <AiFillPhone />
                </span>
                <span className='email-address'>
                  <a href='tel:+8801779794012'>+8801779794012</a>
                </span>
              </div>
              <div>
                <span className='email-icon'>
                  <BiMap />
                </span>
                <span className='email-address'>
                  Kushtia ,Dhaka ,Bangladesh
                </span>
              </div>
            </div>
          </Col>
          <Col md={6} data-aos='fade-down' className='mt-5 mt-md-0'>
            <div className='contact-form'>
              <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type='text' name='name' />
                <label>Email</label>
                <input type='email' name='email' />
                <label>Message</label>
                <textarea name='message' />
                <input className='btnn' type='submit' value='Send' />
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    );
};

export default Contact;
