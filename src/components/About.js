"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function About(props) {
  return (
    <section className="about">
      <Container fluid="lg">
        <div id="top"></div>
        <Row className="about-container">
          <Col
            lg={6}
            className="text-container d-flex align-items-center justify-content-center text-center"
          >
            <h3 className={props.pressstart2p}>
              <img
                className="hand"
                src="/hand.png"
                alt="waving hand icon"
              ></img>
              Hi there! I'm Marius
            </h3>
            <h1 className={props.pressstart2p}>A front-end web developer</h1>
            <p>
              Empowering Businesses through Web Development Expertise: Your
              Go-To Web Developer for Enhanced Online Success
            </p>
          </Col>
          <Col lg={6} className="hero">
            <img src="/hero2.png" alt="animated picture of dev"></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
