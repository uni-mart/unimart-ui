import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const UploadView = () => {
  return (
    <Container>
    <br/>
      <Row>
        <Col>
          <h1>Sell Products</h1>
          <p>Product Information</p>
          <Form>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter title" />
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter description" />
            </Form.Group>

            <Form.Group controlId="publicationDate">
              <Form.Label>Publication Date</Form.Label>
              <Form.Control type="date" placeholder="Select publication date" />
            </Form.Group>

            <Form.Group controlId="authorName">
              <Form.Label>Author Name</Form.Label>
              <Form.Control type="text" placeholder="Enter author name" />
            </Form.Group>

            <Form.Group controlId="brand">
              <Form.Label>Brand</Form.Label>
              <Form.Control type="text" placeholder="Enter brand" />
            </Form.Group>

            <Form.Group controlId="numberOfPages">
              <Form.Label>Number of Pages</Form.Label>
              <Form.Control type="number" placeholder="Enter number of pages" />
            </Form.Group>

            <Form.Group controlId="binding">
              <Form.Label>Binding</Form.Label>
              <Form.Control type="text" placeholder="Enter binding" />
            </Form.Group>

            <Form.Group controlId="dimensions">
              <Form.Label>Dimensions</Form.Label>
              <Form.Control type="text" placeholder="Enter dimensions" />
            </Form.Group>

            <Form.Group controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" placeholder="Enter price" />
            </Form.Group>

            <Form.Group controlId="condition">
              <Form.Label>Condition</Form.Label>
              <Form.Control as="select">
                <option>New</option>
                <option>Like new</option>
                <option>Very good</option>
                <option>Good</option>
                <option>Acceptable</option>
              </Form.Control>
            </Form.Group>

            <div className="mb-3">
              <h5>Add Media</h5>
              <div className="bg-dark text-light p-3 mb-3">
                <p>Drag and drop your file here</p>
                <Button>Browse File</Button>
              </div>
              <Form.Group controlId="mediaUrl">
                <Form.Label>Add media from URL <i className="bi bi-caret-down-fill"></i></Form.Label>
                <Form.Control type="text" placeholder="Enter media URL" />
              </Form.Group>
            </div>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <br/>
    </Container>
  );
};

export default UploadView;
