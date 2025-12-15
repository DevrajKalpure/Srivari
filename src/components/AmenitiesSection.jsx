import React, { useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/Amenities.css";

const amenities = [
  { icon: "bi-snow", text: "Air Conditioned\nGymnasium" },
  { icon: "bi-grid-3x3-gap", text: "2 Indoor Shuttle &\nBadminton Courts" },
  { icon: "bi-people", text: "Conference Room\nwith Projector" },
  { icon: "bi-balloon", text: "Children’s Play Area" },
  { icon: "bi-bullseye", text: "Billiards &\nTable Tennis" },
  { icon: "bi-heart-pulse", text: "Aerobics &\nDesign Studio" },
  { icon: "bi-tree", text: "Landscaped Green" },
  { icon: "bi-house-door", text: "Clubhouse" },
  { icon: "bi-arrow-repeat", text: "Jogging Track" },
  { icon: "bi-dribbble", text: "Volley Ball Court" },
  { icon: "bi-water", text: "Swimming Pool" },
  { icon: "bi-droplet-half", text: "Spa with Sauna &\nJacuzzi" },
  { icon: "bi-trophy", text: "Tennis Court" },
  { icon: "bi-activity", text: "Outdoor Gym" },
];

export default function AmenitiesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add("show");
        } else {
          sectionRef.current.classList.remove("show");
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="amenities-section" id="amenities" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-5 intro-text">
          <small className="text-muted">Luxuries of Chilkur</small>
          <h2 className="fw-semibold mt-2">Amenities that Define Excellence</h2>
        </div>

        <div className="row g-5 text-center">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="col-6 col-md-4 col-lg-2 amenity-col"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="amenity-item">
                <i className={`bi ${item.icon}`}></i>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <Button className="download-btn">Download Brochure</Button>
        </div>
      </div>
    </section>
  );
}
