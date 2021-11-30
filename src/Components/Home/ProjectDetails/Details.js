import React, { useState,useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { BiLinkExternal } from 'react-icons/bi';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { HiLink } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Button from '@restart/ui/esm/Button';
const Details = () => {
    const [data,setData] = useState({});
    const params = useParams();
   useEffect(() => {
         fetch(`/Projects.json`)
           .then((res) => res.json())
           .then((data) => {
             const newData = data.filter((data) => data.id == params.id);
             setData(...newData);
           });
   },[])
      
    return (
      <Container>
        <Row>
          <Col>
            <Card className=''>
              <div>
                <Card.Img
                  width='500px'
                  height='500px'
                  variant='top'
                  src={data.img}
                />
              </div>
            </Card>
          </Col>
          <Col>
            <div className='text-light'>
              <Card className='mt-3 project' style={{ width: '24rem' }}>
                <Card.Body>
                  <Card.Title className='details-title'>{data.name}</Card.Title>
                  <div className='project-body'>
                    <Card.Text>{data.details}</Card.Text>
                    <div>
                      <span className='use'>React js</span>
                      <span className='use'>Mongodb</span>
                      <span className='use'>Firebase</span>
                    </div>
                  </div>
                  <div className='project-link'>
                    <a href={data.live} target='_blank' rel=''>
                      <span className='use-icon'>
                        <BiLinkExternal />
                      </span>
                      Live Site
                    </a>
                    <a href={data.source} target='_blank' rel=''>
                      <span className='use-icon'>
                        <HiLink />
                      </span>
                      Source code
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <Button className='btn mt-5 btn-info '>
              <Link to='/home' className='text-decoration-none'>
                <span className='use-icon'>
                  <AiOutlineArrowRight />{' '}
                </span>
                Back to Home
              </Link>
            </Button>
          </Col>
        </Row>
      </Container>
    );
};

export default Details;