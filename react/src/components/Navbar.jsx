import { Link } from "react-router-dom";
import "./css/Navbar.css";
import brand_logo from "../assets/brand_logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation">
      {/* Left */}
      <div className="navbar-left">
        <Link to="/" className="logo">
          <img src={brand_logo} alt="logo" className="app-logo" />
          <span className="brand-name"></span>
        </Link>
      </div>

      {/* Center */}
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Right */}
      <div className="navbar-right"></div>
    </nav>
  );
};

export default Navbar;
