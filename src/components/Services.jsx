import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
const icons =["arrow.png","print.png","ship.png","sup.png"];

const Services = () => {
  return (
    <Container className='py-5 my-5'>
      <Row className='d-flex justify-content-center '>
        {
            icons.map((_,index)=>{
                return (
                    <Col className='d-flex justify-content-center gap-3'> 
                    <div>
                        <img src={`/${_}`} alt="_icon"  />
                    </div>
                    <div>
                        <h3>Free Shipping</h3>
                        <p>Enjoy free shipping on all orders above $100</p>
                    </div>
                    </Col>
                )
            })
        }
      </Row>
    </Container>
  )
}

export default Services
