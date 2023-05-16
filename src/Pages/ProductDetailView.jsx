import React from 'react';
import { Container, Row, Col, Image, Button, Badge, Placeholder } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faGlobe, faCalendar, faRuler } from '@fortawesome/free-solid-svg-icons';
import StarRating from 'components/StarRating';
import FlexBox from 'components/FlexBox';
import { red } from '@mui/material/colors';
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const ProductDetailView = () => {
  const rating = 4.5
  return (
    <Container>
      <br />
      <Row>
        <Col md={6}>
          <Image src="https://via.placeholder.com/400x500" fluid />
        </Col>
        <Col md={6}>
          <h1 style={{ fontSize: 25, fontWeight: 'bold' }}>Book Name</h1>
          <StarRating rating={rating} />
          <Badge variant="warning" style={{ marginBottom: 10 }}>{rating} Rating</Badge>

          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

            . </p>
          <Row>
            <Col md={6}><span style={{ fontSize: 18, fontWeight: 'bold' }}>Author:</span> John Doe</Col>
            <Col md={6}><span style={{ fontSize: 18, fontWeight: 'bold' }}>Brand:</span> XYZ</Col>
            <Col md={6}><span style={{ fontSize: 18, fontWeight: 'bold' }}>Dimension:</span> 10 x 8 inches</Col>
            <Col md={6}><span style={{ fontSize: 18, fontWeight: 'bold' }}>Condition:</span> New</Col>

          </Row>
          <br />
          <Row style={{ marginTop: 10, background: "#f5f5f5", padding: "10px" }}>
            <Col md={3} >
              <FontAwesomeIcon icon={faBook} /> Pages: 200
            </Col>
            <Col md={3} >
              <FontAwesomeIcon icon={faGlobe} /> Language: English
            </Col>
            <Col md={3} >
              <FontAwesomeIcon icon={faCalendar} /> Published: 2021
            </Col>
            <Col md={3} >
              <FontAwesomeIcon icon={faRuler} /> Dimension: 10 x 8 inches
            </Col>
          </Row>


          <LinkContainer to='/cart'>
            <Nav.Link>
              <Button variant="primary" style={{ marginTop: 20, }}>Add to Cart</Button>
            </Nav.Link>
          </LinkContainer>
          <div style={{ marginTop: 20, backgroundColor: '#f5f5f5', paddingBottom: 30, paddingTop: 10, paddingRight: 10 }}  >
            <h3 style={{ display: 'inline', marginLeft: 10 }}>£6.99 </h3>
            <Badge variant="danger">Limited time deal</Badge>
            <h3 style={{ display: 'inline', marginLeft: 10 }}>40% off</h3>
            <Button variant="success" style={{ float: 'right' }}>Buy Now</Button>
          </div>
        </Col>
      </Row>
      <hr />
      <div style={{ marginTop: 20 }}>
        <h2>Reviews</h2>
        <Button size='md' style={{ marginTop: 20 }}>Write a review</Button>

        {/* Write a review section goes here */}
      </div>
      <hr />
      <div style={{ marginTop: 20 }}>
        <h2>You may also like</h2>
        <FlexBox />
        {/* Scrollable card with books recommendation goes here */}
      </div>
    </Container>
  );
};

export default
  ProductDetailView;
