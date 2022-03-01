import React from 'react'

import { Navbar, Nav, Container } from 'react-bootstrap'

import CartWidget from './CartWidget'

const NavBarEx = () => {
  return (
    <>
    <Navbar className='layout-nav' expand="lg">
    <Container>
        <Navbar.Brand className='nav__title' href="#home">Greenlosophy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav m-auto my-2 mb-lg-0">
          <Nav.Link className='nav__link' href="#home">Home</Nav.Link>
          <Nav.Link className='nav__link' href="#link">Plants</Nav.Link>
          <Nav.Link className='nav__link' href="#link"><CartWidget/></Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
    </>
  )
}

export default NavBarEx