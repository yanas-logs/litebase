import { Link } from "react-router-dom";
import brand_logo from "../assets/brand_logo.svg";
import "./css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Left: Logo */}
      <div className="footer-left">
        <Link to="/" className="footer-logo">
          <img src={brand_logo} alt="logo" className="footer-logo-img" />
          <span className="footer-brand">.</span>
        </Link>
      </div>

      <p className="footer-description">
        Website is Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Corrupti quis velit architecto facilis quam mollitia magnam facere officiis.
        Rerum voluptate recusandae, ipsum eum necessitatibus eaque sapiente maxime similique minus distinctio?
      </p>

      {/* Center: Navigation */}
      <div className="footer-container">
        {/* Center: Navigation */}
        <div className="footer-center">
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/privacy">Privacy</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

      {/* Copyright: Center Bottom */}
      <div className="footer-bottom">
        <p className="footer-copy">
          © {new Date().getFullYear()} yanas-logs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
