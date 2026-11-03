import { Link } from "react-router";
import { ArrowRight, ArrowUpRight, FileCode, Check } from "lucide-react";
import Hero from "../components/Hero.jsx";
import ProjectVisual from "../components/ProjectVisual.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { projectBySlug } from "../data/projects.js";
import "../Home.css";

const certificates = [
  ["Python", "CodeHS", "Python.pdf"],
  ["Java", "CodeHS", "Java.pdf"],
  ["JavaScript", "CodeHS", "Javascript.pdf"],
  ["AutoCAD", "Certiport credential", "AutoCAD.pdf"],
];
export default function Home() {
  return (
    <main className="page-container home-page" id="main-content" tabIndex={-1}>
      <Hero />
      <section className="home-tools" aria-label="Technologies and tools">
        <p className="eyebrow">The tools behind the ideas</p>
        <ul>
          {[
            "Python",
            "Java",
            "JavaScript",
            "React",
            "Git",
            "Ubuntu",
            "AutoCAD",
            "Blender",
            "Revit",
            "Maya",
          ].map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </section>
      <section className="home-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">In the workshop</p>
            <h2>What I’m building now.</h2>
          </div>
          <Link className="text-link" to="/projects">
            All projects <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <div className="detail-related-grid">
          <ProjectCard project={projectBySlug.whale} />
          <ProjectCard project={projectBySlug.jarvis} />
        </div>
      </section>
      <section className="home-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>Curiosity, put into practice.</h2>
          </div>
        </div>
        <div className="home-feature-list">
          {["voicecalculator", "airanker"].map((slug, index) => {
            const project = projectBySlug[slug];
            return (
              <article className="home-feature" key={slug}>
                <div className="home-feature-art">
                  <ProjectVisual slug={slug} />
                </div>
                <div className="home-feature-copy">
                  <p className="eyebrow">
                    0{index + 1} / {project.category}
                  </p>
                  <h3>{project.title}</h3>
                  <p>
                    {slug === "voicecalculator"
                      ? "An AP Computer Science project built around a simple idea: enter mathematics just by talking. Custom parsing keeps nested equations intact, with support for calculus and symbolic operations."
                      : "A self-hosted pipeline that combines commentary, Minecraft logs, and local AI to find useful moments in long recordings. Ranked results give the editor a starting point."}
                  </p>
                  <ul className="tag-list">
                    {project.tags.slice(0, 4).map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <Link className="text-link" to={`/projects/${slug}`}>
                    Explore the project{" "}
                    <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <section className="home-section home-certifications">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A foundation to build on</p>
            <h2>Learning, with something to show.</h2>
          </div>
        </div>
        <div className="certificate-grid">
          {certificates.map(([name, issuer, file]) => (
            <a
              key={name}
              className="certificate-card"
              href={`/certifications/${file}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileCode size={24} aria-hidden="true" />
              <div>
                <h3>{name}</h3>
                <p>
                  <Check size={13} aria-hidden="true" /> {issuer}
                </p>
              </div>
              <ArrowUpRight size={18} aria-hidden="true" />
              <span className="sr-only"> (PDF, opens in new tab)</span>
            </a>
          ))}
        </div>
      </section>
      <aside className="home-contact">
        <div>
          <p className="eyebrow">Ideas are better shared</p>
          <h2>Let’s build a conversation.</h2>
          <p>
            Engineering, software, or an interesting problem—I’d love to hear
            about it.
          </p>
        </div>
        <Link className="button button-secondary" to="/contact">
          Get in touch <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </aside>
    </main>
  );
}
