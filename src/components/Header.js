import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/" className="nav-link">
            <Navbar.Brand>Vikas Kare</Navbar.Brand>
          </Link>
          <Nav className="m-auto">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
