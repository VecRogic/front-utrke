// Header.tsx
import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"; 
import "../css/Header.css"; // Import custom CSS

const Header = () => {
  const navigate = useNavigate();
  

  return (
    <Navbar bg="white" expand="lg" className="header-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/home" className="navbar-brand">
          Urke
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" className="nav-link">
              Home
            </Nav.Link>
              <>
                <Nav.Link as={Link} to="/search-flight" className="nav-link">
                  Search
                </Nav.Link>
              </>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
