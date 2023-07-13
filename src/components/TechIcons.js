"use client";
import "animate.css";

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
