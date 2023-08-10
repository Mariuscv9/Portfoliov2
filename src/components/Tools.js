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

export default function Tools(props) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <section className="tools">
      <Container fluid="lg" className="tools-container">
        <Row className="tools-text d-flex align-items-center justify-content-center text-center ">
          <div id="Tools"></div>
          <div
            className="section-title"
            data-aos="fade-right"
            data-aos-offset="0"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="top-bottom"
          >
            <div className={props.pressstart2p}>Skills & Tools</div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="0"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
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
        <Row>
          {icons.map((data, index) => {
            const delay = (index + 1) * 150;
            return (
              <Col
                xs={4}
                md={3}
                lg={2}
                key={data.id}
                data-aos="fade-down"
                data-aos-offset="-200"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay={delay}
              >
                <TechIcons key={data.id} {...data} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
