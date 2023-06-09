import { Button } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const LandingPage = () => {
  return (
    <div className='bg-black w-100 min-vh-100 flex-fill' style={{
      backgroundImage: "url(/banner.avif)",
      backgroundSize: 'cover'
    }}>
      <div style={{ backgroundColor: "rgba(0,0,0,0.7)" }} className='flex-fill h-100'>
        <div className='container h-100 d-flex flex-column justify-content-center align-items-start'>
          <h1 className='text-white' style={{ fontSize: "4rem", marginTop: "3rem" }}>SAVE THE OCEANS</h1>
          <h6 className='text-white' style={{ fontSize: "1.25rem" }}>SELL OR BUY SECOND HAND ITEMS</h6>

          <LinkContainer to='/products'>
            <Nav.Link>
              <Button type='submit' variant="primary" className='bg-white text-primary' style={{ marginTop: "7rem" }}>
                Shop Now
              </Button>
            </Nav.Link>
          </LinkContainer>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
