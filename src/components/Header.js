"use client";

import Image from "next/image";
import logo from "/public/logo-no-background.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Header(props) {
  return (
    <header className={props.className}>
      <Navbar expand="lg">
        <Container fluid className="navbar-container">
          <Navbar.Brand href="#top">
            <Image src={logo} alt="logo" width={240} height={85} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto me-2 nav">
              <Nav.Link href="#top" className="links">
                About
              </Nav.Link>
              <Nav.Link href="#Tools" className="links">
                Tools
              </Nav.Link>
              <Nav.Link href="#Portfolio" className="links">
                Projects
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
