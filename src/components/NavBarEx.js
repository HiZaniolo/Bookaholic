import React, { useContext } from 'react'

import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import { MyContext } from '../context/CartContext'
import Cart from './Cart';

const NavBarEx = () => {

  const {itemsTotalCalculate}= useContext(MyContext)
  
  return (
    <>
    <Navbar className='layout-nav' expand="lg">
    <Container>
        <Link to="/"className='nav__title' href="#home">Bookaholic</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav m-auto my-2 mb-lg-0">
          <Link to="/category/englishBooks" className='nav__link'>English Books</Link>
          <Link to="/category/spanishBooks" className='nav__link'>Spanish Books</Link>
          <Link to="/cart" className='nav__link' ><CartWidget/>{itemsTotalCalculate()}</Link>
        </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
    </>
  )
}

export default NavBarEx