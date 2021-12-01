import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { BiLinkExternal } from 'react-icons/bi';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { HiLink } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './project.css';
const Project = () => {
  const [project, setProject] = useState([]);
  useEffect(() => {
    fetch('/Projects.json')
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, []);
  return (
    <>
      <Container id='project' className='py-4'>
        <h3 className='project-title'>My Recent Projects</h3>
        <Row>
          {project.map((item, index) => (
            <Col key={index}>
              <Card className='my-4 project' data-aos='fade-up'>
                <Card.Img variant='top' src={item.cover} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <div className='project-body'>
                    <Card.Text>{item.details.slice(0, 100)}</Card.Text>
                    <div>
                      <span className='use'>React js</span>
                      <span className='use'>Mongodb</span>
                      <span className='use'>Firebase</span>
                    </div>
                  </div>
                  <div className='project-link'>
                    <a href={item.live} target='_blank' rel=''>
                      <span className='use-icon'>
                        <BiLinkExternal />
                      </span>
                      Live Site
                    </a>
                    <a href={item.source} target='_blank' rel=''>
                      <span className='use-icon'>
                        <HiLink />
                      </span>
                      Source code
                    </a>
                    <Link to={`/details/${item.id}`}>
                      <span className='use-icon'>
                        <AiOutlineArrowRight />{' '}
                      </span>
                      Details
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Project;
