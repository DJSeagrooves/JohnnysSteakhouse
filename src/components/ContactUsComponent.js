import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ContactUs = () => {
  return (
    <Form className='m-2'>
      <Form.Group className="mb-3 text-center" controlId="feedbackFormEmail">
        <Form.Label>Your Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3 text-center" controlId="feedbackFormText">
        <Form.Label>Your Feedback</Form.Label>
        <Form.Control as="textarea" rows={5} />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  )
}

export default ContactUs;