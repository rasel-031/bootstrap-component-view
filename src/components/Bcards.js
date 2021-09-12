import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";

function Bcards() {
  return (
    <div style={{background: 'whitesmoke'}} className="container-fluid">
      <Row xs={1} md={4} className="g-4">
        {Array.from({ length: 8 }).map((idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src="../logo512.png" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Bcards;
