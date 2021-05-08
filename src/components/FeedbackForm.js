import React from "react";
import { Col, Form, Row, Button } from "react-bootstrap";

function FeedbackForm() {
  return (
    <Row className="my-5">
      <Col md={6}>
        <h1 className="text-center">
          Leave Your Thought to make this site more Funny!!
        </h1>
      </Col>
      <Col md={6}>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <br />
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="name" />
          </Form.Group>
          <br />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default FeedbackForm;
