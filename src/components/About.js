import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SocialLinks from "./SocialLinks";
import WhatIKnow from "./WhatIKnow";

function About() {
  let profileImage = "/images/insta-profile.png";

  return (
    <>
      <Container>
        <Row>
          <Col md={6} className="pt-5">
            <img src={profileImage} alt="" width="100%" />
          </Col>
          <Col md={6} className="pt-5">
            <h3 className="mb-5">Hi, Iam Vikas Kare</h3>
            <p>
              I build new projects just to tickle my brain and love to tell
              others how they're made.
            </p>
            <hr />
            <SocialLinks />
            <hr />
          </Col>
        </Row>
        <hr />
        <WhatIKnow />
      </Container>
    </>
  );
}

export default About;
