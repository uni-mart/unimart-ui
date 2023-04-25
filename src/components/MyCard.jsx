import React from 'react';
import { Card } from 'react-bootstrap';

const MyCard = ({ title, imageSrc, text }) => {
  return (
    <Card>
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MyCard;
