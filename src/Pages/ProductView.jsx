import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/ProductView.css';
import MyCard from 'components/MyCard';

function ProductView() {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'Book 1',
      author: 'Author 1',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Book 2',
      author: 'Author 2',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'Book 1',
      author: 'Author 1',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      title: 'Rich dad poor dad 2',
      author: 'Willam',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 5,
      title: 'Atomic',
      author: 'Mark Manson',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 6,
      title: 'bing 3',
      author: 'Author 2',
      imageUrl: 'https://via.placeholder.com/150',
    },
    // Add more books as needed
  ]);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const searchTerm = form.elements.searchTerm.value.toLowerCase();
    setSearchTerm(searchTerm);
  };

  return (
    <Container>
      <br />
      <Row>
        <Col>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              name="searchTerm"
            />
            <Button variant="outline-success" type="submit">
              Search
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="mt-4">
        {filteredBooks.map((book) => (
          <Col key={book.id} xs={6} sm={4} md={3} lg={3} className="mb-4">
            <Link to={`/books/${book.id}`}>
              <MyCard title={book.title} imageSrc={book.imageUrl} text={book.author} />
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductView;
