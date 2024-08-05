// src/components/Doctor.js
import React from 'react';
import { Card } from 'react-bootstrap';

const Doctor = ({ name, title, specialization, image }) => {
  return (
    <Card className="m-3" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{title}</Card.Subtitle>
        <Card.Text>{specialization}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Doctor;
