import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/FormSection.css";

export default function FormSection() {
  return (
    <div className="container-fluid py-5 escape-section d-flex justify-content-center align-items-center">
      <div className="container row ">
        {/* LEFT SECTION */}
        <div className="col-md-7 px-5">
          <h1 className="escape-title">
            YOUR ESCAPE <br /> <span>IS WAITING</span>
          </h1>

          <p className="escape-desc mt-3">
            Step away from the noise and into a world built for stillness,
            beauty, and connection. Whether you're planning a weekend retreat or
            a week under the stars, Lunaas is ready to welcome you.
          </p>

          <Button className="escape-btn mt-4 px-4 py-2">
            Download Brocher{" "}
          </Button><br/>

          <img
            src={require("../assets/images/nature4.jpeg")}
            alt="lower"
            className="img-fluid rounded mt-4"
          />
        </div>

        {/* RIGHT BIG IMAGE */}
        <div className="col-md-5 px-0">
          <div className=" p-5 slide-right">
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
