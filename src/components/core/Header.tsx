import React, { useEffect } from "react";
import "../css/Header.css";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="white" expand="lg" className="header-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand">
          F1 
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
