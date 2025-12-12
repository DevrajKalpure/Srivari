import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import banner from "../assets/images/banner.jpg";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function HeroSection() {
  const leftRef = useScrollAnimation();
  const rightRef = useScrollAnimation();

  return (
    <div
      className="hero-wrapper vh-100 d-flex align-items-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="w-100 h-100 overflow-hidden">
        <div className="row h-100 justify-content-between align-items-center">
          {/* LEFT CONTENT BOX */}
          <div 
            ref={leftRef}
            className="col-lg-6 p-5 h-100 text-white text-start d-flex justify-content-center align-items-end scroll-animate slide-left"
          >
            <h2 className="mt-5 display-3 pt-5">LIVE THE FARM LIFE, ROOTED IN HEALTH AND HAPPINESS.</h2>
          </div>

          {/* RIGHT SIDE ENQUIRY FORM */}
          <div 
            ref={rightRef}
            className="col-lg-4 p-5 scroll-animate slide-right"
          >
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
                    className="form-check-input me-1"
                    type="checkbox"
                    id="agree"
                  />
                  <label className="form-check-label" htmlFor="agree">
                    I authorize to be contacted via phone / WhatsApp / email...
                  </label>
                </div>

                <button className="btn btn-success w-100 py-2">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
