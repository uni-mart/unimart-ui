import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className='bg-black'>
      <Container>
        <Row className='py-4'>
          <Col className='mt-3'>
            <section>
              <h5 className='text-white mb-3'>Fingertipe</h5>
              <div className='d-flex flex-column mb-3'>
                <span className='text-white my-2'>
                  Home
                </span>
                <span className='text-white my-2'>
                  Discover
                </span>
                <span className='text-white my-2'>
                  Join Us
                </span>
              </div>
            </section>
          </Col>

          <Col className='mt-3'>
            <section>
              <h5 className='text-white'>Resources</h5>
              <div className='d-flex flex-column mb-3'>
                <span className='text-white my-2'>
                  How we operate
                </span>
                <span className='text-white my-2'>
                  Blogs
                </span>
              </div>
            </section>
          </Col>

          <Col className='mt-3'>
            <section>
              <h5 className='text-white'>About</h5>
              <div className='d-flex flex-column mb-3'>
                <span className='text-white my-2'>
                  About UniMart
                </span>
                {/* <span className='text-white my-2'>
                  Blogs
                </span> */}
              </div>
            </section>
          </Col>

          <Col className='mt-3'>
            <section>
              <h5 className='text-white'>Address</h5>
            </section>
          </Col>
        </Row>
        <Row>
          <Col className='text-center py-3 text-white'>Copyright &copy; UniMart </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer