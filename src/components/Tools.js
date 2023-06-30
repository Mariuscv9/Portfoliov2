"use client";
import icons from "../components/icons";
import TechIcons from "./TechIcons";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import global from "../app/globals.css";

export default function Tools() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);
  const techIcons = icons.map((data, index) => {
    return (
      <div
        key={data.id}
        data-aos="fade-down"
        data-aos-offset="-200"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      >
        <TechIcons key={data.id} {...data} />
      </div>
    );
  });
  return (
    <section className="tools">
      <Container fluid="lg" className="tools-container">
        <Row className="tools-text d-flex align-items-center justify-content-center text-center ">
          <h3
            data-aos="fade-right"
            data-aos-offset="0"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-bottom"
          >
            Skills & Tools
          </h3>
          <div
            data-aos="fade-left"
            data-aos-offset="0"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-bottom"
          >
            <p>
              My main area of focus is the front end (the content seen by the
              user)
            </p>
            <p>
              I use HTML,CSS,JS with React or Next.js to create small or medium
              sized custom web applications.
            </p>
            <p>
              I have also used various popular CMS like Wordpress or Shopify.
            </p>
          </div>
        </Row>
        <Row className="stack">{techIcons}</Row>
      </Container>
    </section>
  );
}
