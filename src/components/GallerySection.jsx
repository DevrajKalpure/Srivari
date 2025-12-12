import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/GallerySection.css";

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    require("../assets/images/banner.jpg"),
    require("../assets/images/nature4.jpeg"),
    require("../assets/images/nature3.jpg"),
    require("../assets/images/nature2.jpeg"),
    require("../assets/images/nature1.jpeg"),
  ];

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Left arrow handler
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Right arrow handler
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="container-fluid gallery-section">
      <div className="container">
        {/* Main Row with Left, Center, Right sections */}
        <div className="row align-items-stretch">
          {/* Left Image - Order changes on mobile */}
          <div className="col-lg-3 col-md-4 left-image">
            <img
              src={images[currentIndex]}
              alt="Gallery left"
              className="gallery-img tall-img w-100"
            />
          </div>

          {/* Center Content - Comes first on mobile */}
          <div className="col-lg-6 col-md-4 center-images d-flex flex-column justify-content-center align-items-center text-center">
            <h1 className="title mb-4">
              WHAT STILLNESS <br /> LOOKS LIKE.
            </h1>

            <button className="btn gallery-btn mb-5">
              Download Brochure
              <span className="circle ms-2">➜</span>
            </button>

            {/* Two Small Images Below */}
            <div className="row g-3 w-100 mt-3">
              <div className="col-6">
                <img
                  src={images[(currentIndex + 2) % images.length]}
                  alt="Gallery bottom 1"
                  className="gallery-img small-img w-100"
                />
              </div>
              <div className="col-6">
                <img
                  src={images[(currentIndex + 3) % images.length]}
                  alt="Gallery bottom 2"
                  className="gallery-img small-img w-100"
                />
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-3 col-md-4">
            <img
              src={images[(currentIndex + 1) % images.length]}
              alt="Gallery right"
              className="gallery-img tall-img w-100"
            />
          </div>
        </div>

        {/* Navigation Arrows */}
            <div className="d-flex justify-content-between gap-4">
              <button className="arrow-btn" onClick={handlePrev}>
                ←
              </button>
              <button className="arrow-btn" onClick={handleNext}>
                →
              </button>
          </div>
      </div>
    </div>
  );
}