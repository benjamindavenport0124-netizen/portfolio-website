import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, FileText } from "lucide-react";
import earthImage from "../assets/earth.png";
import moonImage from "../assets/moon.png";
import marsImage from "../assets/mars.png";

export default function Hero() {
  const visualRef = useRef(null);
  const [visible, setVisible] = useState(true);
  const [pageVisible, setPageVisible] = useState(() => !document.hidden);
  useEffect(() => {
    const visual = visualRef.current;
    const observer = new IntersectionObserver(([entry]) =>
      setVisible(entry.isIntersecting),
    );
    if (visual) observer.observe(visual);
    const onVisibility = () => setPageVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);
  return (
    <section className="hero">
      <div className="hero-left">
        <p className="hero-name">Benjamin Davenport</p>
        <h1>Aspiring Aerospace Engineer</h1>
        <p className="hero-role">Software Developer</p>
        <p className="hero-description">
          I turn curiosity into AI tools, software, and engineering
          projects—from a voice-controlled calculator to a floating robot.
        </p>
        <div className="hero-links">
          <Link className="button button-primary" to="/projects">
            Explore my projects <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link className="button button-secondary" to="/resume">
            <FileText size={17} aria-hidden="true" /> View resume
          </Link>
        </div>
      </div>
      <div className="hero-right">
        <div
          ref={visualRef}
          className={`solar-system${visible && pageVisible ? "" : " is-paused"}`}
          aria-hidden="true"
        >
          <div className="sun" />
          <div className="decorative-orbit orbit-inner-one" />
          <div className="decorative-orbit orbit-inner-two" />
          <div className="earth-orbit">
            <div className="earth-system">
              <div className="earth-visual">
                <img
                  className="earth"
                  src={earthImage}
                  alt=""
                  width="64"
                  height="64"
                />
              </div>
              <div className="moon-orbit">
                <img
                  className="moon"
                  src={moonImage}
                  alt=""
                  width="64"
                  height="64"
                />
              </div>
            </div>
          </div>
          <div className="mars-orbit">
            <div className="mars-visual">
              <img
                className="mars"
                src={marsImage}
                alt=""
                width="64"
                height="64"
              />
            </div>
          </div>
        </div>
        <p className="hero-visual-note">Engineering / software / exploration</p>
      </div>
    </section>
  );
}
