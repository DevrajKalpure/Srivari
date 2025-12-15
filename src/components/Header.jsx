import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import HeaderLogo from "../assets/images/logo3.png";
import "../styles/Header.css";

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
          <a href="/">
            <img src={HeaderLogo} className="header-logo" alt="Chilkur logo" />
          </a>
        </div>

        {/* DESKTOP NAV */}
        <nav className="nav desktop-nav" aria-label="Primary navigation">
          <a href="#projects" className="taviraj-font nav-link">
            Projects
          </a>
          <a href="#gallery" className="taviraj-font nav-link">
            Gallery
          </a>
          <a href="#masterplan" className="taviraj-font nav-link">
            MasterPlan
          </a>
          <a href="#amenities" className="taviraj-font nav-link">
            Amenities
          </a>
          <a href="#location" className="taviraj-font nav-link">
            location
          </a>
        </nav>

        <div className="m-0 buttons-links d-flex justify-content-center align-items-center gap-3 fs-5">
          
          <a
            href="/brochure.pdf" 
            download
            className="btn btn-success  d-flex align-items-center btn-rounded"
            onClick={() => setOpen(false)}
          >
            <i className="bi bi-file-earmark-text"></i>
            Download Brochure
          </a>

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
        <div>
          <a href="/">
            <img
              src={HeaderLogo}
              className="header-menu-logo"
              alt="Chilkur logo"
            />
          </a>

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
        </div>
        <a
          href="#projects"
          className="taviraj-font nav-link"
          onClick={() => setOpen(false)}
        >
          Projects
        </a>
        <a
          href="#gallery"
          className="taviraj-font nav-link"
          onClick={() => setOpen(false)}
        >
          Gallery
        </a>
        <a
          href="#masterplan"
          className="taviraj-font nav-link"
          onClick={() => setOpen(false)}
        >
          Masterplan
        </a>
        <a
          href="#amenities"
          className="taviraj-font nav-link"
          onClick={() => setOpen(false)}
        >
          Amenities
        </a>
        <a
          href="#location"
          className="taviraj-font nav-link"
          onClick={() => setOpen(false)}
        >
          Location
        </a>
        <div className="mobile-buttons mt-4 d-flex flex-column gap-2">
          <a
            href="/brochure.pdf" // put your actual PDF path
            download
            className="btn btn-success w-100 d-flex align-items-center justify-content-center gap-2"
            onClick={() => setOpen(false)}
          >
            <i className="bi bi-file-earmark-text"></i>
            Download Brochure
          </a>

          <a
            href="tel:+914023554572"
            className="btn btn-light w-100 d-flex align-items-center justify-content-center gap-2 text-black"
            onClick={() => setOpen(false)}
          >
            <span className="bi bi-telephone-fill " style={{}}></span>
            +91-40-23554572
          </a>
        </div>
      </div>
    </header>
  );
}
