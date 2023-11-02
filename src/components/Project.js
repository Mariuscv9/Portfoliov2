import { Col, Row, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Image from "next/image";

export default function Project({ props }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      nextIcon={
        <span
          aria-hidden="true"
          className="carousel-control-next-icon changed"
        />
      }
    >
      {props.map((props) => (
        <Carousel.Item key={props.id} interval={props.interval}>
          <div
            className="carousel-content"
            style={{
              backgroundImage: `url(${props.bg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "90vh",
            }}
          >
            <div className="inner-carousel-content">
              <img
                className=" carousel-image"
                src={props.img}
                alt="Slide"
              ></img>
              <div className="carousel-text">
                <h3>{props.name}</h3>
                <p>{props.about}</p>
                <div className="link-wrapper">
                  <a href={props.techlink}>{props.techname}</a>
                  <a href={props.link}>Link</a>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
