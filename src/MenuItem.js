import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const MenuItem = ({ item }) => {
  return (
    <Container>
        <Row>
            <Col>
                {item.image}
            </Col>
            <Col>
                <h3>
                    {item.name}
                </h3>
                <p>
                    {item.price}<br/>{item.description}
                </p>
            </Col>
        </Row>
    </Container>
  )
}

export default MenuItem