import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const FlexBox = () => {
  return (
    <Container>
      <Row xs={1} md={2} lg={4}>
      <Col style={{ marginBottom: 20 }}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/400x300" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col style={{ marginBottom: 20 }}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/400x300" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        
        <Col style={{ marginBottom: 20 }}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/400x300" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col style={{ marginBottom: 20 }}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/400x300" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FlexBox;
