import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaGithub, FaHackerrank, FaInstagram, FaTwitter } from "react-icons/fa";

function SocialLinks() {
  return (
    <Row>
      {/* github */}

      <Col xs={3} className="text-center">
        <a
          href="https://www.github.com/vikaskare"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <FaGithub style={{ fontSize: "48px" }} />
        </a>
      </Col>
      {/* Hackerrank */}

      <Col xs={3} className="text-center">
        <a
          href="https://www.hackerrank.com/vikaskare"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <FaHackerrank style={{ fontSize: "48px" }} />
        </a>
      </Col>
      {/* Instagram */}

      <Col xs={3} className="text-center">
        <a
          href="https://www.instagram.com/_vikas_kare"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <FaInstagram style={{ fontSize: "48px" }} />
        </a>
      </Col>
      <Col xs={3} className="text-center">
        <a
          href="https://www.twitter.com/_vikas_kare"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <FaTwitter style={{ fontSize: "48px" }} />
        </a>
      </Col>
    </Row>
  );
}

export default SocialLinks;
