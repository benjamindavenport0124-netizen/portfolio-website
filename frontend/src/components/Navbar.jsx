import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";
import { Menu, X, ArrowUpRight } from "lucide-react";
const links = [
  ["/about", "About"],
  ["/projects", "Projects"],
  ["/resume", "Resume"],
  ["/ai-lab", "AI Lab"],
  ["/contact", "Contact"],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef(null);
  useEffect(() => {
    if (!open) return;
    function onKey(event) {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="nav-bar">
        <nav
          className="nav-content"
          aria-label="Main navigation"
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget))
              setOpen(false);
          }}
        >
          <NavLink className="nav-name" to="/" end>
            <svg
              className="brand-mark"
              viewBox="0 0 36 36"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="18" cy="18" r="10" />
              <ellipse
                cx="18"
                cy="18"
                rx="17"
                ry="6"
                transform="rotate(-38 18 18)"
              />
              <circle cx="29" cy="9" r="2.5" />
            </svg>
            <span>
              Benjamin Davenport
              <span className="nav-caption">Engineering & software</span>
            </span>
          </NavLink>
          <button
            className="nav-menu-button"
            ref={menuButton}
            type="button"
            aria-expanded={open}
            aria-controls="primary-links"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X size={22} aria-hidden="true" />
            ) : (
              <Menu size={22} aria-hidden="true" />
            )}
          </button>
          <div
            id="primary-links"
            className={`nav-links${open ? " is-open" : ""}`}
          >
            {links.map(([path, label]) => (
              <NavLink
                key={path}
                className={`nav-link${path === "/contact" ? " nav-contact" : ""}`}
                to={path}
                onClick={() => setOpen(false)}
              >
                {label}
                {path === "/contact" && (
                  <ArrowUpRight size={16} aria-hidden="true" />
                )}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
}
