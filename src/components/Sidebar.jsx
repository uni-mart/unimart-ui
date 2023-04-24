import React from 'react'
import {  Col } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import '../css/Sidebar.css'

const Sidebar = (props) => {
  return (
    
    <Col md={3} className="left-bar">
          <h1 className="display-5 mb-5">{props.username}</h1>
          <br />
          <br />
          <br />
          
            <ListGroup variant='flush'className="fs-4 " >
                <ListGroup.Item action variant="light"  className="list-item">Profile</ListGroup.Item>
                <ListGroup.Item action variant="light"  className="list-item">My products</ListGroup.Item>
                <ListGroup.Item action variant="light"  className="list-item">My orders</ListGroup.Item>
                <ListGroup.Item action variant="light"  className="list-item">Payment</ListGroup.Item>
            </ListGroup>
            
         
            
          
        </Col>
  )
}

export default Sidebar