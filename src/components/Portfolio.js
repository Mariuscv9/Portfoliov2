"use client";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Project from "../components/Project";
import projectdata from "../modules/projectdata";
export default function Portfolio(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <section className="portfolio">
      <Container fluid className="portfolio-container">
        <div id="Portfolio"></div>
        <Row>
          <Col
            xs={12}
            className="section-title"
            data-aos="fade-right"
            data-aos-offset="0"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="top-bottom"
          >
            <div className={props.pressstart2p}>Past Projects</div>
          </Col>
          <Col xs={12} className="carouselcol">
            <Project props={projectdata} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
