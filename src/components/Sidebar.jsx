import React from 'react'
import { Col } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import '../css/Sidebar.css'
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Sidebar = (props) => {
  return (

    <Col md={3} className="left-bar">
      <h1 className="display-5 mb-5">{props.username}</h1>
      <br />
      <br />
      <br />

      <ListGroup variant='flush' className="fs-4 " >
        <LinkContainer to='/profile'>
          <Nav.Link>
            <ListGroup.Item action variant="light" className="list-item">Profile</ListGroup.Item>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to='/profile/products'>
          <Nav.Link>
            <ListGroup.Item action variant="light" className="list-item">My products</ListGroup.Item>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to='/profile/orders'>
          <Nav.Link>
            <ListGroup.Item action variant="light" className="list-item">My orders</ListGroup.Item>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to='/profile/payment'>
          <Nav.Link>
            <ListGroup.Item action variant="light" className="list-item">Payment</ListGroup.Item>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to='/profile/upload'>
          <Nav.Link>
            <ListGroup.Item action variant="light" className="list-item">Upload</ListGroup.Item>
          </Nav.Link>
        </LinkContainer>
      </ListGroup>
    </Col>
  )
}

export default Sidebar