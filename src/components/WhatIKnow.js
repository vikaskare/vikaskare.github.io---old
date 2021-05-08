import React from "react";
import { Card, Col, Row } from "react-bootstrap";

function WhatIKnow() {
  return (
    <>
      <h1 className="text-center mb-5 mt-3">What I Know?</h1>
      <Row>
        <Col md={3} className="py-2">
          <Card>
            <Card.Body>
              <Card.Title>Languages</Card.Title>
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              <Card.Text>
                <ul>
                  <li>C</li>
                  <li>Java</li>
                  <li>Python</li>
                  <li>JavaScript</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="py-2">
          <Card>
            <Card.Body>
              <Card.Title>Libraries</Card.Title>
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              <Card.Text>
                <ul>
                  <li>React</li>
                  <li>Redux</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="py-2">
          <Card>
            <Card.Body>
              <Card.Title>Frameworks</Card.Title>
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              <Card.Text>
                <ul>
                  <li>Laravel</li>
                  <li>Django</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="py-2">
          <Card>
            <Card.Body>
              <Card.Title>Databases</Card.Title>
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              <Card.Text>
                <ul>
                  <li>Sqlite</li>
                  <li>MySql</li>
                  <li>MongoDB</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="py-2">
          <Card>
            <Card.Body>
              <Card.Title>DevOps&nbsp;Tools</Card.Title>
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              <Card.Text>
                <ul>
                  <li>Git</li>
                  <li>GitHub</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default WhatIKnow;
