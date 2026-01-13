
// Footer.jsx
import "./footer.css";

export default function Footer() {
  return (
    <nav className="footer-nav">
      <a href="/" className="portfolio-logo">
        Brooklyn
      </a>
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/process">Process</a>
        </li>
        <li>
          <a href="/portfolio">Portfolio</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <span>Copyright © 2022 Picto.</span>
    </nav>
  );
}


