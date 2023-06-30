"use client";

import Image from "next/image";
import logo from "/public/logo-no-background.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Header() {
  return (
    <header>
      <Navbar expand="lg">
        <Container fluid="lg" className="navbar-container">
          <Navbar.Brand href="#home">
            <Image src={logo} alt="logo" width={270} height={85} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto me-2 nav">
              <Nav.Link href="#home" className="links">
                Home
              </Nav.Link>
              <Nav.Link href="#link" className="links">
                Link
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
