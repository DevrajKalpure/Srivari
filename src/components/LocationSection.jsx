import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/LocationSection.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function LocationSection() {
  const leftRef = useScrollAnimation();
  const rightRef = useScrollAnimation();

  return (
    <section className="location-section pt-4" id="location">
      <div className="container-lg">
        <div className="row align-items-center">
          {/* LEFT MAP */}
          <div
            className="col-lg-7 mb-4 mb-lg-0 scroll-animate slide-left"
            ref={leftRef}
          >
            <div className="map-card map-hover">
              <iframe
                title="Chilkur Location"
                src="https://www.google.com/maps?q=Chilkur%20Balaji%20Temple&output=embed"
                width="100%"
                height="320"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-5 scroll-animate slide-right" ref={rightRef}>
            <h2 className="location-title">Location Advantage</h2>
            <p className="location-subtitle">Luxuries of Saibya Saplings</p>

            <ul className="location-list">
              <li>STRR – 15 mins away</li>
              <li>Shri Ghati Subrahmanya Temple – 15 mins away</li>
              <li>Manipal Hospital Doddaballapur – 15 mins away</li>
              <li>Plot Sizes Starting from 7000 Sq.Ft.</li>
              <li>Foxconn Apple Project – 20 mins away</li>
              <li>ISRO Devanahalli – 25 mins away</li>
            </ul>

            <button className="site-btn mt-3 btn">Book a Site Visit Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}
