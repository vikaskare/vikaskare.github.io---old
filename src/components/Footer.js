import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer bg="dark" variant="dark">
      <hr />
      <Container className="text-center py-3">
        <p>&copy; Copyright and ❤ by Vikas Kare</p>
      </Container>
    </footer>
  );
}

export default Footer;
