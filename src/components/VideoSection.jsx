import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import videoFile from "../assets/images/video1.mp4";
import vectorLeft from "../assets/images/vector1.jpg";
import vectorRight from "../assets/images/vector2.jpg";


export default function VideoSection() {
  return (
    <section className="video-section">
      <div className="video-container d-flex justify-content-center align-items-center">
        <video
          className="video-player"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
      </div>
        
    </section>
  );
}
