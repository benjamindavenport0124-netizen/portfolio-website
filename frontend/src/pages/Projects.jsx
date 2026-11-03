import { Link } from "react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ProjectVisual from "../components/ProjectVisual.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { projectBySlug } from "../data/projects.js";
import "../Projects.css";

export default function Projects() {
  return (
    <main
      className="page-container projects-page"
      id="main-content"
      tabIndex={-1}
    >
      <header className="page-heading">
        <p className="eyebrow">Projects / experiments / ideas</p>
        <h1>
          Things I’ve built.
          <br />
          <span className="heading-muted">Ideas still in motion.</span>
        </h1>
        <p>
          Each project starts with a question. These are the tools, systems, and
          experiments I’m building to find the answers.
        </p>
      </header>
      <section className="projects-current">
        <div className="section-heading">
          <div>
            <p className="eyebrow">In the workshop</p>
            <h2>Currently building</h2>
          </div>
          <p>Follow the process, not just the finished result.</p>
        </div>
        <div className="detail-related-grid">
          <ProjectCard project={projectBySlug.whale} />
          <ProjectCard project={projectBySlug.jarvis} />
        </div>
      </section>
      <section className="projects-featured">
        <div className="section-heading">
          <div>
            <p className="eyebrow">From idea to implementation</p>
            <h2>Selected software projects</h2>
          </div>
        </div>
        <div className="project-feature-list">
          {["airanker", "voicecalculator", "aicoach"].map((slug, index) => {
            const project = projectBySlug[slug];
            return (
              <article key={slug} className="project-feature">
                <div className="project-feature-visual">
                  <ProjectVisual slug={slug} />
                </div>
                <div className="project-feature-content">
                  <p className="eyebrow">
                    0{index + 1} / {project.category}
                  </p>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <ul className="tag-list">
                    {project.tags.slice(0, 5).map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <div className="project-feature-actions">
                    <Link
                      className="button button-primary"
                      to={`/projects/${slug}`}
                    >
                      View project <ArrowRight size={17} aria-hidden="true" />
                    </Link>
                    {project.repo && (
                      <a
                        className="text-link"
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Source code{" "}
                        <ArrowUpRight size={16} aria-hidden="true" />
                        <span className="sr-only"> (opens in new tab)</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <section className="projects-more">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A wider view</p>
            <h2>Beyond the application</h2>
          </div>
        </div>
        <div className="projects-more-grid">
          {["website", "aiserver", "3dmodeling"].map((slug) => (
            <ProjectCard key={slug} project={projectBySlug[slug]} />
          ))}
        </div>
      </section>
    </main>
  );
}
