import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/FormSection.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

import temple from "../assets/images/temple2.jpg";
import natureImg from "../assets/images/nature2.jpeg";

export default function FormSection() {
  const leftRef = useScrollAnimation();
  const rightRef = useScrollAnimation();

  return (
    <section className="container-fluid py-5 escape-section d-flex justify-content-center align-items-center">
      
      {/* BACKGROUND TEMPLE IMAGE */}
      <img
        src={temple}
        alt="temple background"
        className="temple-bg"
      />

      <div className="container row position-relative z-2">
        
        {/* LEFT CONTENT */}
        <div
          ref={leftRef}
          className="col-md-7 px-md-5 scroll-animate slide-left mb-4 mb-md-0"
        >
          <h1 className="escape-title">
            YOUR ESCAPE <br /> <span>IS WAITING</span>
          </h1>

          <p className="escape-desc mt-3">
            Step away from the noise and into a world built for stillness,
            beauty, and connection. Whether you're planning a weekend retreat or
            a week under the stars, Lunaas is ready to welcome you.
          </p>

          <Button className="escape-btn mt-4 px-4 py-2">
            Download Brochure
          </Button><br/>

          <img
            src={natureImg}
            alt="nature"
            className="img-fluid rounded mt-4 hover-img"
          />
        </div>

        {/* RIGHT FORM */}
        <div
          ref={rightRef}
          className="col-md-5 px-0 scroll-animate slide-right"
        >
          <div className=" p-md-5">
            <div className="enquiry-box p-4">
              <h4 className="text-center mb-3">Enquire Now</h4>

              <form>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Name*"
                />

                <div className="d-flex gap-2 mb-3">
                  <select className="form-control w-50">
                    <option>India (+91)</option>
                  </select>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone number*"
                  />
                </div>

                <input
                  type="email"
                  className="form-control mb-3"
                  placeholder="E-mail address*"
                />

                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="agree"
                  />
                  <label className="form-check-label" htmlFor="agree">
                    I authorize to be contacted via phone / WhatsApp / email.
                  </label>
                </div>

                <button className="btn btn-success w-100 py-2">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
