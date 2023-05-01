import { useEffect, useState } from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useLocation } from 'react-router-dom'
// import { ReactComponent as Logo } from "assets/brand-logo.svg";

const Header = () => {
  const urlLocation = useLocation();
  const [isOnHome, setIsOnHome] = useState(true);

  const [animateNavFlag, setAnimateAnimateFlag] = useState(false);

  const animateNavbar = () => {
    // console.log('Window Scroll Y: ', window.scrollY);
    if (window.scrollY >= 70) {
      setAnimateAnimateFlag(true);
    } else {
      setAnimateAnimateFlag(false);
    }
  }

  useEffect(() => {
    if (urlLocation.pathname === "/") {
      setIsOnHome(true);
      window.addEventListener('scroll', animateNavbar)
    } else {
      setIsOnHome(false);
    }

    return () => {
      window.removeEventListener('scroll', animateNavbar)
    }
  }, [urlLocation])

  return (
    <header className={
      `
        custom-header
        ${isOnHome ? 'position-fixed top-0 w-100' : 'position-relative top-0 w-100 bg-black'}
        ${animateNavFlag ? 'animated-nav' : ''}
      `
    } style={{ zIndex: 100 }}>
      <Navbar variant='dark' expand="lg" collapseOnSelect>
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