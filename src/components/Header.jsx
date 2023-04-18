import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
   
        <header>  
        
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
            <Container>
              <LinkContainer to='/'>
                <Navbar.Brand >
                      <img
                      alt=""
                      src="/brand.svg"
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                    />{' '}
                    UniMart</Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">

                  <LinkContainer to='/cart'>
                    <Nav.Link ><i className='fas fa-shopping-cart'></i>{' '}Cart</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/login'>
                    <Nav.Link ><i className='fas fa-user'></i>{' '}Login</Nav.Link>
                  </LinkContainer>
                  
                 
                </Nav>
              </Navbar.Collapse>
            </Container>
    </Navbar>
          
        </header>
    
  )
}

export default Header