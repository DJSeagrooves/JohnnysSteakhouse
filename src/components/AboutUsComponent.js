import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const AboutUs = () => {
  return (
    <Container className='text-center m-2'>
      <Row>
        <Col>
          <Card className='mx-auto' style={{width: '75%'}}>
            <Card.Body>
              <Card.Text>
                Hello and welcome to Johnny's Steakhouse, at Johnny's we are all about having the best time possible while serving up great food. <br />
                Our founder Johnny was an avid backyard cook for his whole life, he decided that he was gonna take his hobby to a full time job and this steakhouse was born.
                Johnny believed there was nothing in this world quite like a good steak, that's why we get all of our beef from local farmers.
                Johnny may have passed in 2014, but his spirit lives on in everything we do here and his son Johnny Jr. follows right in his daddy's footsteps.
                Y'all come on down and see us, you won't be disappointed.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default AboutUs;