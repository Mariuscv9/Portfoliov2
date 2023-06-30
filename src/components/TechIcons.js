"use client";
import "animate.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function TechIcons(props) {
  return (
    <>
      <div className="tech">
        <div className="svg-container">{props.svg}</div>
        <p>{props.p}</p>
      </div>
    </>
  );
}
