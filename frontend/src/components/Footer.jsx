import { Link } from "react-router";
import { ArrowUpRight, ArrowRight } from "lucide-react";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-identity">
          <p className="eyebrow">Always curious. Always building.</p>
          <Link to="/" className="footer-name">
            Benjamin Davenport
          </Link>
          <p>Aspiring aerospace engineer & software developer.</p>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          <a
            href="https://github.com/benjamindavenport0124-netizen"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <ArrowUpRight size={16} aria-hidden="true" />
            <span className="sr-only"> (opens in new tab)</span>
          </a>
          <Link to="/resume">Resume</Link>
          <Link to="/contact">
            Let’s connect <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </nav>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Benjamin Davenport</p>
        <span>Built with React. Driven by curiosity.</span>
      </div>
    </footer>
  );
}
