import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
// import { ReactComponent as Logo } from "assets/brand-logo.svg";

const Header = () => {
  return (
    <header className='position-absolute top-0 w-100' style={{ zIndex: 100 }}>
      <Navbar bg="transparent" variant='dark' expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand >
              {/* <Logo /> */}
              <img alt=""
                src="/brand-logo.svg"
                // width="90"
                height="50"
                className="d-inline-block align-top"
              />{' '}
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{ marginLeft: "auto" }}>
              {/* <LinkContainer to='/cart'>
                <Nav.Link ><i className='fas fa-shopping-cart'></i>{' '}Home</Nav.Link>
              </LinkContainer> */}
              <LinkContainer to='/'>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/discover'>
                <Nav.Link>Discover</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link>Join us</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </header>

  )
}

export default Header