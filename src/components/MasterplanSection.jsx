import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/MasterplanSection.css";

import masterplanImg from "../assets/images/nature1.jpeg";
import brochureImg from "../assets/images/nature3.jpg";

export default function MasterplanSection() {
  return (
      <div className="masterplan-wrapper">
        <div className="h-100">
          {/* <h2 className="section-title text-center p-4">
            Saplings by Chilkur Masterplan and Brochure
          </h2> */}

          <div className="row justify-content-center align-items-center h-100">
            <div className="image-card">
              <img
                src={masterplanImg}
                alt="Master Plan"
                className="img-fluid"
              />
            </div>

          </div>
        </div>
      </div>
  );
}
