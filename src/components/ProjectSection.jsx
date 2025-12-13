import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

import projectImage from "../assets/images/project1.png";
import houseimage from "../assets/images/imagebackground.png";
import icon1 from "../assets/icons/farm.png";
import icon2 from "../assets/icons/tree.png";
import icon3 from "../assets/icons/villa.png";

import "../styles/ProjectSection.css";

export default function ProjectSection() {
  const leftRef = useScrollAnimation();
  const rightRef = useScrollAnimation();

  return (
    <section className="container-fluid position-relative mb-5 py-5">
      <div className="project-section d-flex justify-content-center align-items-center p-lg-3 mt-3">
        <div className="container row align-items-center py-3">

          {/* LEFT IMAGE */}
          <div
            ref={leftRef}
            className="col-md-6 scroll-animate slide-left mb-4 mb-md-0"
          >
            <img
              src={projectImage}
              alt="Project"
              className="image-section img-fluid rounded-3 project-img"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div
            ref={rightRef}
            className="col-md-6 p-4 scroll-animate slide-right"
          >
            <h2>Chilkur Project</h2>
            <p>
              Own your piece of nature in one of the most exclusive gated
              community Estate Plot developments in Bangalore by Saibya Group.
              Escape the city chaos and embrace serene living at Sapling by
              Saibya, spread across lush 14.33 acres near Nandi Hills –
              Doddaballapur Road.
            </p>

            {/* FEATURES */}
            <div className="row mb-4">
              <div className="col-4 text-center feature-box">
                <img src={icon1} alt="" className="feature-icon" />
                <h5>Natural Beauty</h5>
              </div>
              <div className="col-4 text-center feature-box">
                <img src={icon2} alt="" className="feature-icon" />
                <h5>Luxury Villas</h5>
              </div>
              <div className="col-4 text-center feature-box">
                <img src={icon3} alt="" className="feature-icon" />
                <h5>Prime Location</h5>
              </div>
            </div>

            {/* BUTTON */}
            <Link
              to="/contact-us"
              className="btn btn-success d-inline-flex align-items-center gap-2 btn-rounded"
            >
              <i className="bi bi-file-earmark-text"></i>
              Download Brochure
            </Link>
          </div>
        </div>
      </div>

      {/* BACKGROUND IMAGE */}
      <img
        src={houseimage}
        alt="Background"
        className="background-image-opacity position-absolute"
      />
    </section>
  );
}
