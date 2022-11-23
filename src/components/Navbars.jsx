import React from 'react'
import {Navbar,Nav,Container,Button } from 'react-bootstrap';


function Navbars() {
  return (
    <div>
         <Navbar bg="dark" variant="dark">
        <Container>
          <b><Navbar.Brand href="#home">SimpleNote</Navbar.Brand></b>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
          </Nav>
          <Nav>
          <Button variant="success">Login</Button>{' '}
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbars