import React from 'react'
import { Col, Container, Nav, Navbar } from 'react-bootstrap'

const arr=["cart.png","user 1.png", "menu 1.png"];

const NavbarComponent = () => {
  return (
    <Navbar  data-bs-theme="light">
    <Container>
      <Col>
        <Navbar.Brand href="#home">GRACE</Navbar.Brand>
      </Col>
      <Col>
      <Nav className="me-auto">
        <Nav.Link href="#home">HOME</Nav.Link>
        <Nav.Link href="#features">ABOUT</Nav.Link>
        <Nav.Link href="#pricing">CONTACT US</Nav.Link>
      </Nav>
      </Col>
      <Col className='d-flex justify-content-end align-items-center gap-3'>
        {
          arr.map((_,index)=>{
            return (
              <div key={index}>
                <img src={`/${_}`} alt="_image"  />
              </div>
            )
          })
        }
      </Col>
    </Container>
  </Navbar>
  )
}

export default NavbarComponent
