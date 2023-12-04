import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

const FAQComponent = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-primary">
      <Accordion defaultActiveKey="0" className="w-75">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0" className="text-white">
              Pregunta 1
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="bg-light text-dark">
              Respuesta a la Pregunta 1
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1" className="text-white">
              Pregunta 2
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body className="bg-light text-dark">
              Respuesta a la Pregunta 2
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default FAQComponent;
