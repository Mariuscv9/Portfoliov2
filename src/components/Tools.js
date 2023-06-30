"use client";
import icons from "../components/icons";
import TechIcons from "./TechIcons";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
      <div className="tools-container">
        <div className="tools-text">
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
        </div>
        <div className="stack">{techIcons}</div>
      </div>
    </section>
  );
}
