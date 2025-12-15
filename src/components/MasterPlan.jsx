import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import masterplanImage from "../assets/images/masterplan.jpg";

export default function Masterplan() {
  return (
    <section className="masterplan-section mt-4 " id="masterplan">
      <div className=" d-flex justify-content-center align-items-center">
       <img src={masterplanImage} alt="Masterplan" className="img-fluid w-100 h-75" />
        
      </div>
        
    </section>
  );
}
