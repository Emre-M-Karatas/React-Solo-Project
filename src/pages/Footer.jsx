import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper container">
        <Link to="/" className="footer__logo--wrapper">
          <img src={logo} alt="Blinker logo" className="footer__logo" />
        </Link>

        <div className="footer__links">
          <Link to="/" className="footer__link">Home</Link>
          <Link to="/search" className="footer__link">Find Your Movie</Link>
        </div>

        <p className="footer__copyright">
          © 2026 Blinker. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;