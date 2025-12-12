import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import HeaderLogo from "../assets/images/logo3.png";

export default function Header() {
  const location = useLocation();
  const notHome = location.pathname !== "/";

  const [open, setOpen] = useState(false); // mobile menu
  const [hidden, setHidden] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const current = window.scrollY;

      // Add/remove scrolled class
      const headerContainer = document.querySelector(".header");
      if (current > 20) {
        headerContainer.classList.add("scrolled");
      } else {
        headerContainer.classList.remove("scrolled");
      }

      // Scroll down → hide header
      if (current > lastScroll && current > 150) {
        setHidden(true);
      }
      // Scroll up → show header
      else {
        setHidden(false);
      }

      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close menu when pressing Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  // keyboard toggle helper for accessibility
  const handleKeyToggle = (e, toggleFn) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFn((v) => !v);
    }
  };

  return (
    <header
      className={`header ${hidden ? "header-hidden" : ""} ${
        notHome ? "not-home" : ""
      }`}
      ref={headerRef}
    >
      <div className="header-container">
        <div>
          <Link to="/">
            <img src={HeaderLogo} className="header-logo" alt="Chilkur logo" />
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <nav className="nav desktop-nav" aria-label="Primary navigation">
          <Link to="/" className="taviraj-font nav-link">
            Overview
          </Link>
          <Link to="/about" className="taviraj-font nav-link">
            Pricing
          </Link>
          <Link to="/our-team" className="taviraj-font nav-link">
            Masterplan
          </Link>
          <Link to="/projects" className="taviraj-font nav-link">
            Amenities
          </Link>
          <Link to="/services" className="taviraj-font nav-link">
            Loaction
          </Link>
        </nav>

        <div className="m-0 buttons-links d-flex justify-content-center align-items-center gap-3 fs-5">
          <Link
            to="/contact-us"
            className="btn btn-success  d-flex align-items-center btn-rounded "
          >
            <i className="bi bi-file-earmark-text"></i>
            Download Brocher
          </Link>

          <a
            href="tel:+914023554572"
            className="btn btn-light d-flex align-items-center btn-rounded py-2 "
          >
            <span
              className="bi bi-telephone-fill"
              style={{ color: "green" }}
            ></span>
            +91-40-23554572
          </a>
        </div>

        {/* MOBILE MENU ICON */}
        <div
          className="menu-icon"
          onClick={() => setOpen(!open)}
          onKeyDown={(e) => handleKeyToggle(e, setOpen)}
          tabIndex="0"
          role="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <div className={`bar ${open ? "bar1-open" : ""}`}></div>
          <div className={`bar ${open ? "bar2-open" : ""}`}></div>
          <div className={`bar ${open ? "bar3-open" : ""}`}></div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <div
          className="close-btn"
          onClick={() => setOpen(false)}
          onKeyDown={(e) => handleKeyToggle(e, () => setOpen(false))}
          tabIndex="0"
          role="button"
          aria-label="Close menu"
        >
          &times;
        </div>
        <Link
          to="/"
          className="taviraj-font nav-link"
          onClick={() => setOpen(false)}
        >
          Overview
        </Link>
        <Link
          to="/about"
          className="taviraj-font nav-link"
          onClick={() => setOpen(false)}
        >
          Pricing
        </Link>
        <Link
          to="/our-team"
          className="taviraj-font nav-link"
          onClick={() => setOpen(false)}
        >
          Masterplan
        </Link>
        <Link
          to="/projects"
          className="taviraj-font nav-link"
          onClick={() => setOpen(false)}
        >
          Amenities
        </Link>
        <Link
          to="/services"
          className="taviraj-font nav-link"
          onClick={() => setOpen(false)}
        >
          Location
        </Link>
        <div className="mobile-buttons mt-4 d-flex flex-column gap-2">
          <Link
            to="/contact-us"
            className="btn btn-success w-100 d-flex align-items-center justify-content-center gap-2"
            onClick={() => setOpen(false)}
          >
            <i className="bi bi-file-earmark-text"></i>
            Download Brochure
          </Link>
          <a
            href="tel:+914023554572"
            className="btn btn-light w-100 d-flex align-items-center justify-content-center gap-2"
            onClick={() => setOpen(false)}
          >
            <span className="bi bi-telephone-fill" style={{ color: "green" }}></span>
            +91-40-23554572
          </a>
        </div>
      </div>
    </header>
  );
}
