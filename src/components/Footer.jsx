import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderLogo from "../assets/images/logo2.jpeg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="row mt-5">
            {/* ABOUT SECTION */}
            <div className="col-lg-3 col-md-6 mt-4">
              <div className="footer-section">
                <img src={HeaderLogo} alt="Logo" className="footer-logo mb-3" />
                <p className="footer-text">
                  Saibya Group - Creating exceptional living spaces rooted in
                  health, happiness, and nature.
                </p>
                <div className="social-links">
                  <a href="#" className="social-icon">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="footer-section">
                <h5 className="footer-title">Quick Links</h5>
                <ul className="footer-links">
                  <li>
                    <a href="#overview">Overview</a>
                  </li>
                  <li>
                    <a href="#pricing">Pricing</a>
                  </li>
                  <li>
                    <a href="#masterplan">Masterplan</a>
                  </li>
                  <li>
                    <a href="#amenities">Amenities</a>
                  </li>
                  <li>
                    <a href="#location">Location</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* CONTACT INFO */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="footer-section">
                <h5 className="footer-title">Contact Info</h5>
                <div className="contact-item">
                  <i className="bi bi-telephone-fill"></i>
                  <a href="tel:+914023554572">+91-40-23554572</a>
                </div>
                <div className="contact-item">
                  <i className="bi bi-envelope-fill"></i>
                  <a href="mailto:info@saibya.com">info@saibya.com</a>
                </div>
                <div className="contact-item">
                  <i className="bi bi-geo-alt-fill"></i>
                  <span>Bangalore, India</span>
                </div>
              </div>
            </div>

            {/* NEWSLETTER */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="footer-section">
                <h5 className="footer-title">Newsletter</h5>
                <p className="footer-text">
                  Subscribe to get updates about our projects
                </p>
                <form className="newsletter-form">
                  <input
                    type="email"
                    className="form-control mb-2"
                    placeholder="Your email"
                  />
                  <button type="submit" className="btn btn-success w-100">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* DIVIDER */}
          <hr className="footer-divider" />

          {/* BOTTOM FOOTER */}
          <div className="footer-bottom">
            <div className="row align-items-center">
              <div className="col-md-6">
                <p className="footer-copyright">
                  &copy; {currentYear} Saibya Group. All rights reserved.
                </p>
              </div>
              <div className="col-md-6 text-md-end">
                <ul className="footer-bottom-links">
                  <li>
                    <a href="#privacy">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#terms">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#sitemap">Sitemap</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
