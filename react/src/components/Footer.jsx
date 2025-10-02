export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Brand / Logo */}
        <div className="footer-logo">Litebase</div>

        {/* Links */}
        <ul className="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/privacy">Privacy</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        {/* Copyright */}
        <p className="footer-copy">
          © {new Date().getFullYear()} yanas-logs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
