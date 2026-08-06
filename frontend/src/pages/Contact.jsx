import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import earthImage from "../assets/nasa-background.png";
import "../Contact.css";

import { SiGithub } from "react-icons/si";

import {
  Mail,
  FileText,
  Rocket,
  ExternalLink,
  Download
} from "lucide-react";

function Contact() {
  return (
    <>
      <Navbar />

      <main className="contact-page">
        <section className="contact-hero">
          <div className="contact-hero-text">
            <h2 className="contact-heading-label">Contact</h2>

            <h1>Let's Connect</h1>

            <div className="contact-title-line"></div>

            <p>
              I'm always open to discussing engineering, software
              development, projects, and new opportunities. Feel free to reach
              out.
            </p>
          </div>

          <div className="contact-hero-image">
            <img
              src={earthImage}
              alt="Earth viewed from space"
            />
          </div>
        </section>

        <section className="contact-methods">
          <h2 className="contact-heading-label">
            The Best Ways to Reach Me
          </h2>

          <div className="contact-card-grid">
            <article className="contact-card">
              <Mail className="contact-card-icon" />

              <h2>Email</h2>

              <p>
                The best way to contact me directly about projects,
                engineering, or opportunities.
              </p>

              <a href="mailto:benjamindavenport0124@gmail.com">
                benjamindavenport0124@gmail.com
                <ExternalLink />
              </a>
            </article>

            <article className="contact-card">
              <SiGithub className="contact-card-icon" />

              <h2>GitHub</h2>

              <p>
                View my code, software projects, experiments, and development
                progress.
              </p>

              <a
                href="https://github.com/benjamindavenport0124-netizen"
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub
                <ExternalLink />
              </a>
            </article>

            <article className="contact-card">
              <FileText className="contact-card-icon" />

              <h2>Resume</h2>

              <p>
                Download my resume to learn more about my skills, education,
                experience, and certifications.
              </p>

              <a
                href="/src/assets/BTDResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
                <Download />
              </a>
            </article>
          </div>
        </section>

        <section className="contact-message">
          <div className="contact-message-icon">
            <Rocket />
          </div>

          <div className="contact-message-divider"></div>

          <p>
            I'm always excited to connect with engineers, developers, and
            builders who are passionate about solving meaningful problems.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Contact;