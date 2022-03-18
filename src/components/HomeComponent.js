import React from 'react'
import { Card } from 'react-bootstrap';

const Home = () => {
  return (
    <React.Fragment>
      <h2>
        Hey y'all, come on down to Johnny's for the best meal in the state!
      </h2>
      <Card>
        <Card.Img src='https://unsplash.com/photos/Sd1y-HiBQ0w/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjQ3NjEyNTY0&force=true&w=640' />
        <Card.Title className='m-2'>
          Our Address
        </Card.Title>
        <Card.Text className='m-2'>
          <Card.Link href="https://www.google.com/maps/place/Greenville,+GA+30222/@33.0359977,-84.7322139,14z/data=!3m1!4b1!4m5!3m4!1s0x88f4a694f2b7f533:0x400ad1c191901b07!8m2!3d33.0287373!4d-84.7129848">
            123 Johnny Street, Greenville, Ga 30222
          </Card.Link>
        </Card.Text>
      </Card>
    </React.Fragment>
  )
}

export default Home;