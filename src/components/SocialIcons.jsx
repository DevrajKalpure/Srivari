import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";
import "../styles/SocialIcons.css";

export default function SocialIcons() {
  return (
    <div className="social-fixed">
      <a href="#" className="social-icon instagram" aria-label="Instagram">
        <FaInstagram />
      </a>

      <a href="#" className="social-icon facebook" aria-label="Facebook">
        <FaFacebook />
      </a>

      <a href="#" className="social-icon youtube" aria-label="YouTube">
        <FaYoutube />
      </a>

      <a href="https://wa.me/919999999999" className="social-icon whatsapp">
        <FaWhatsapp />
      </a>

      <a href="tel:+919999999999" className="social-icon phone">
        <FaPhoneAlt />
      </a>
    </div>
  );
}
