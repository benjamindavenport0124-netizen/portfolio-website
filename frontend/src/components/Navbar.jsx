import { NavLink } from 'react-router'

function Navbar() {
  return (
    <>
      <nav className="nav-bar">
        <div className="nav-content">
          <NavLink className="nav-name nav-link" to="/">Benjamin Davenport</NavLink>
          <div className="nav-links">
            <NavLink className="nav-link" to="/about">About</NavLink>
            <NavLink className="nav-link" to="/projects">Projects</NavLink>
            <NavLink className="nav-link" to="/resume">Resume</NavLink>
            <NavLink className="nav-link" to="/ai-lab">AI Lab</NavLink>
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
            {/* Page saying I am under 18 and cant have a NavLinkedIn */}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar