import { Link } from "react-router-dom";
import "./css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-logo">Footer Page</div>
        <ul className="footer-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/privacy">Privacy</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <p className="footer-copy">
          © {new Date().getFullYear()} yanas-logs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
