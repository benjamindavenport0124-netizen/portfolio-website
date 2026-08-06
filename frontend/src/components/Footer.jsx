import { NavLink } from 'react-router'

function Footer() {
  return (
    <>
        <footer className="site-footer">
            <div className="footer-main">
            <div className="footer-identity">
                <h2>Benjamin Davenport</h2>
                <p>Aspiring Aerospace Engineer & Software Developer</p>
            </div>

            <nav className="footer-links" aria-label="Footer navigation">
                <a
                    href="https://github.com/benjamindavenport0124-netizen"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                GitHub ↗
                </a>
      
                <NavLink to="/resume">Resume</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
            </div>
      
            <p className="footer-copyright">
            © 2026 Benjamin Davenport. All rights reserved.
            </p>
        </footer>
    </>
  )
}

export default Footer