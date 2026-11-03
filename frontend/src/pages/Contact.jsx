import { Mail, FileText, ArrowUpRight, ArrowRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import earthImage from "../assets/nasa-background.png";
import resumePdf from "../assets/BTDResume.pdf";
import "../Contact.css";
export default function Contact() {
  return (
    <main
      className="page-container contact-page"
      id="main-content"
      tabIndex={-1}
    >
      <header className="contact-hero">
        <div className="contact-hero-text">
          <p className="eyebrow">Contact / start a conversation</p>
          <h1>
            Good ideas start
            <br />
            with a hello.
          </h1>
          <p>
            I’m always open to talking about engineering, software, projects,
            and new opportunities.
          </p>
          <a
            className="button button-primary"
            href="mailto:benjamindavenport0124@gmail.com"
          >
            <Mail size={18} aria-hidden="true" /> Say hello{" "}
            <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>
        <div className="contact-hero-image" aria-hidden="true">
          <img src={earthImage} alt="" width="1000" height="800" />
          <span>Different perspectives. Shared curiosity.</span>
        </div>
      </header>
      <section
        className="contact-methods"
        aria-labelledby="contact-methods-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">Find me here</p>
            <h2 id="contact-methods-title">A few ways to connect.</h2>
          </div>
        </div>
        <div className="contact-card-grid">
          <article className="contact-card">
            <Mail className="contact-card-icon" aria-hidden="true" />
            <h3>Email</h3>
            <p>
              The best way to reach me about projects, engineering, or
              opportunities.
            </p>
            <a href="mailto:benjamindavenport0124@gmail.com">
              benjamindavenport0124@gmail.com
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </article>
          <article className="contact-card">
            <SiGithub className="contact-card-icon" aria-hidden="true" />
            <h3>GitHub</h3>
            <p>
              Code, experiments, and the work that goes on behind these
              projects.
            </p>
            <a
              href="https://github.com/benjamindavenport0124-netizen"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore the code
              <ArrowUpRight size={17} aria-hidden="true" />
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </article>
          <article className="contact-card">
            <FileText className="contact-card-icon" aria-hidden="true" />
            <h3>Resume</h3>
            <p>
              A closer look at my education, skills, projects, and experience.
            </p>
            <a href={resumePdf} download="Benjamin-Davenport-Resume.pdf">
              Download resume PDF
              <ArrowRight size={17} aria-hidden="true" />
            </a>
          </article>
        </div>
      </section>
      <p className="contact-note">
        Curious people make interesting things. If that sounds like you, let’s
        talk.
      </p>
    </main>
  );
}
