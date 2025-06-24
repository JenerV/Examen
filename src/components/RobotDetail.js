import React from 'react';
import Card from 'react-bootstrap/Card';

function RobotDetail({ robot }) {
  if (!robot) return null;

  return (
    <Card>
      <Card.Img variant="top" src={robot.image} />
      <Card.Body>
        <Card.Title>{robot.name}</Card.Title>
        <Card.Text><strong>Año de fabricación:</strong> {robot.year}</Card.Text>
        <Card.Text><strong>Capacidad de procesamiento:</strong> {robot.processor}</Card.Text>
        <Card.Text><strong>Características adicionales:</strong> {robot.features}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default RobotDetail;
