import React from 'react';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Col, Container, Row } from 'react-bootstrap';
import './contact.css'
 import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
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
          <Col md={6} className='d-none d-md-block' data-aos='fade-right'>
            <img width='100% ' src='/cover/form.png' alt='' />
          </Col>
          <Col md={6}>
            <div className='contact-form' data-aos='fade-left'>
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
