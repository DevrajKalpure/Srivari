import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/GallerySection.css";
import lineimage from "../assets/images/hero-line-bg.svg";

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    require("../assets/images/banner.jpg"),
    require("../assets/images/nature4.jpeg"),
    require("../assets/images/nature3.jpg"),
    require("../assets/images/nature2.jpeg"),
    require("../assets/images/nature1.jpeg"),
  ];

  // Auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="container-fluid gallery-section" id="gallery">
      <div className="container">
        {/* ================= DESKTOP LAYOUT ================= */}
        <div className="row align-items-stretch desktop-layout">
          {/* LEFT IMAGE + ARROW */}
          <div className="col-lg-3 col-md-4 d-flex flex-column align-items-center">
            <img
              src={images[currentIndex]}
              className="gallery-img tall-img w-100"
              alt=""
            />
            <button
              className="arrow-btn mt-3 d-none d-lg-flex"
              onClick={handlePrev}
            >
              ←
            </button>
          </div>

          {/* CENTER CONTENT */}
          <div className="col-lg-6 col-md-4 text-center d-flex flex-column justify-content-center">
            <h1 className="title mb-4">
              WHAT STILLNESS <br /> LOOKS LIKE.
            </h1>

            <button className="btn gallery-btn mb-4 w-50 mx-auto d-flex align-items-center justify-content-center">
              Download Brochure
            </button>

            <div className="row g-3">
              <div className="col-6">
                <img
                  src={images[(currentIndex + 2) % images.length]}
                  className="gallery-img small-img w-100"
                  alt=""
                />
              </div>
              <div className="col-6">
                <img
                  src={images[(currentIndex + 3) % images.length]}
                  className="gallery-img small-img w-100"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE + ARROW */}
          <div className="col-lg-3 col-md-4 d-flex flex-column align-items-center">
            <img
              src={images[(currentIndex + 1) % images.length]}
              className="gallery-img tall-img w-100"
              alt=""
            />
            <button
              className="arrow-btn mt-3 d-none d-lg-flex "
              onClick={handleNext}
            >
              →
            </button>
          </div>
        </div>

        {/* ================= MOBILE TEXT ================= */}
        <div className="d-lg-none text-center mb-3">
          <h2 className="title">WHAT STILLNESS LOOKS LIKE.</h2>

          <button className="btn gallery-btn mx-auto mt-3 d-flex align-items-center justify-content-center">
            Download Brochure
          </button>
        </div>

        {/* ================= MOBILE IMAGE ================= */}
        <div className="mobile-layout d-lg-none text-center position-relative">
          <img
            src={images[currentIndex]}
            alt=""
            className="gallery-img mobile-img w-100"
          />

          {/* LEFT ARROW */}
          <button className="arrow-btn arrow-left" onClick={handlePrev}>
            ‹
          </button>

          {/* RIGHT ARROW */}
          <button className="arrow-btn arrow-right" onClick={handleNext}>
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
