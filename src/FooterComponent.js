import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col md='auto'>
            <h5>
              Links
            </h5>
            <ul className='list-unstyled'>
              <li href='#home'>Home</li>
              <li href='#menu'>Menu</li>
              <li href='#aboutus'>About Us</li>
              <li href='#contactus'>Contact Us</li>
            </ul>
          </Col>
          <Col md='auto'>
            <h5>
              Social
            </h5>
            <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
            <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a>
          </Col>
          <Col className='contactCol' md='auto'>
            <a role="button" className="btn btn-link" href="tel:+10123456789"><i className="fa fa-phone" /><br/> 1-012-345-6789</a><br />
            <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /><br /> Email Johnny</a>
          </Col>
        </Row>
      </Container>
    </footer>

  )
}

export default Footer;