import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useLocation } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import projectImage from "../assets/images/project1.png";
import houseimage from "../assets/images/imagebackground.png";
import icon1 from "../assets/icons/farm.png";
import icon2 from "../assets/icons/tree.png";
import icon3 from "../assets/icons/villa.png";

export default function ProjectSection() {
  const leftRef = useScrollAnimation();
  const rightRef = useScrollAnimation();

  return (
    <section className="container-fluid position-relative mb-5">
      <div className="project-section d-flex justify-content-center align-items-center p-3 ">
        <div className="container row d-flex justify-content-center align-items-center py-3 ">
          <div 
            ref={leftRef}
            className="col-sm-6 scroll-animate slide-left"
          >
            <img
              src={projectImage}
              className="image-section img-fluid rounded-3"
            />
          </div>
          <div 
            ref={rightRef}
            className="col-sm-6 p-4 scroll-animate slide-right"
          >
            <div className="">
              <h2>Chilkur Project</h2>
              <p>
                Own your piece of nature in one of the most exclusive gated
                community Estate Plot developments in Bangalore by Saibya Group.
                Escape the city chaos and embrace serene living at Sapling by
                Saibya, spread across lush 14.33 acres near Nandi Hills –
                Doddaballapur Road. Designed for those who seek peace, space,
                and smart investment opportunities, Sapling offers you not just
                land, but a lifestyle nurtured by nature.
              </p>

              <div className="row mb-4">
                <div className="col-sm-4 text-center">
                  <img src={icon1} alt="Farm Icon" className="feature-icon" />
                  <h5>Natural Beauty</h5>
                  {/* <p>Surrounded by lush green nature</p> */}
                </div>
                <div className="col-sm-4 text-center">
                  <img src={icon2} alt="Tree Icon" className="feature-icon" />
                  <h5>Luxury Villas</h5>
                  {/* <p>Premium gated community</p> */}
                </div>
                <div className="col-sm-4 text-center">
                  <img src={icon3} alt="Villa Icon" className="feature-icon" />
                  <h5>Prime Location</h5>
                  {/* <p>Near Nandi Hills</p> */}
                </div>
              </div>
              <div className="m-0 buttons-links d-flex  align-items-center gap-3 fs-5">
                <Link
                  to="/contact-us"
                  className="btn btn-success  d-flex align-items-center btn-rounded "
                >
                  <i className="bi bi-file-earmark-text"></i>
                  Download Brocher
                </Link>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
      <div>
        <img
          src={houseimage}
          alt="Background"
          className="background-image-opacity position-absolute"
        />
      </div>
    </section>
  );
}
