import { Link, useParams } from "react-router";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import ProjectVisual from "../components/ProjectVisual.jsx";
import ProjectGallery from "../components/ProjectGallery.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import NotFound from "./NotFound.jsx";
import { projectBySlug } from "../data/projects.js";
import "../ProjectDetail.css";

function ProjectDetail() {
  const { slug } = useParams();
  const project = projectBySlug[slug];

  if (!project) {
    return (
      <NotFound
        title="Project not found"
        description="This project address is not available."
      />
    );
  }

  return (
    <main className="detail-page" id="main-content" tabIndex={-1}>
      <nav className="detail-breadcrumb" aria-label="Breadcrumb">
        <Link to="/projects">
          <ArrowLeft size={16} aria-hidden="true" /> All projects
        </Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{project.title}</span>
      </nav>

      <header className="detail-hero">
        <div>
          <p className="detail-eyebrow">{project.category}</p>
          {project.status && <p className="detail-status">{project.status}</p>}
          <h1>{project.title}</h1>
          <p className="detail-lead">{project.summary}</p>
          <ul className="detail-tags" aria-label="Technologies and skills">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <div className="detail-actions">
            {project.repo ? (
              <a
                className="detail-button detail-button-primary"
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub size={18} aria-hidden="true" /> View source code
                <ExternalLink size={15} aria-hidden="true" />
                <span className="sr-only"> (opens in new tab)</span>
              </a>
            ) : (
              <Link
                className="detail-button detail-button-primary"
                to="/contact"
              >
                Ask about this project{" "}
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            )}
            <a className="detail-button" href="#project-approach">
              Explore the approach <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
        <ProjectVisual slug={project.slug} />
      </header>

      <dl className="detail-facts">
        {project.facts.map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>

      <section className="detail-overview" aria-labelledby="overview-title">
        <p className="detail-eyebrow">01 / Overview</p>
        <div>
          <h2 id="overview-title">The idea behind the build</h2>
          <p>{project.intro}</p>
        </div>
      </section>

      <ProjectGallery project={project} />

      <section
        className="detail-workflow"
        id="project-approach"
        aria-labelledby="approach-title"
      >
        <div className="detail-section-heading">
          <p className="detail-eyebrow">02 / Approach</p>
          <h2 id="approach-title">
            {project.approachTitle ?? "How the pieces fit together"}
          </h2>
        </div>
        <ol
          className={`detail-steps${project.workflow.length > 4 ? " detail-steps-long" : ""}`}
        >
          {project.workflow.map(([title, description], index) => (
            <li key={title}>
              <span className="detail-step-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
        {project.example && (
          <figure className="detail-example">
            <figcaption>{project.example.label}</figcaption>
            <div>
              <code>{project.example.input}</code>
            </div>
            <p>{project.example.note}</p>
          </figure>
        )}
      </section>

      <section className="detail-notes" aria-labelledby="notes-title">
        <div className="detail-section-heading">
          <p className="detail-eyebrow">03 / Inside the project</p>
          <h2 id="notes-title">A closer look</h2>
        </div>
        <div className="detail-notes-grid">
          {project.sections.map(([title, description]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        {project.certificate && (
          <a
            className="detail-button"
            href={project.certificate}
            target="_blank"
            rel="noopener noreferrer"
          >
            View AutoCAD credential{" "}
            <ExternalLink size={16} aria-hidden="true" />
            <span className="sr-only"> (PDF, opens in new tab)</span>
          </a>
        )}
        {project.reference && (
          <div className="detail-reference">
            <p>{project.reference.note}</p>
            <a
              className="detail-button"
              href={project.reference.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.reference.label}
              <ExternalLink size={16} aria-hidden="true" />
              <span className="sr-only"> (PDF, opens in new tab)</span>
            </a>
          </div>
        )}
      </section>

      {project.specifications && (
        <section
          className="detail-specifications"
          aria-labelledby="specs-title"
        >
          <div className="detail-section-heading">
            <p className="detail-eyebrow">The hardware</p>
            <h2 id="specs-title">
              {project.specificationTitle ?? "Components"}
            </h2>
          </div>
          <table>
            <caption className="sr-only">
              {project.title} components and purposes
            </caption>
            <thead>
              <tr>
                <th scope="col">Component</th>
                <th scope="col">Details</th>
              </tr>
            </thead>
            <tbody>
              {project.specifications.map(([label, description]) => (
                <tr key={label}>
                  <th scope="row">{label}</th>
                  <td>{description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      {project.progress && (
        <section
          className="detail-development"
          aria-labelledby="development-title"
        >
          <div className="detail-section-heading">
            <p className="detail-eyebrow">Development log</p>
            <h2 id="development-title">{project.progress.title}</h2>
          </div>
          <div className="detail-progress-grid">
            <article>
              <h3>Implemented so far</h3>
              <ul>
                {project.progress.done.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article>
              <h3>Next steps and testing</h3>
              <ul>
                {project.progress.pending.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>
      )}

      {project.nextSteps && (
        <section className="detail-development" aria-labelledby="next-title">
          <div className="detail-section-heading">
            <p className="detail-eyebrow">Future development</p>
            <h2 id="next-title">What comes next</h2>
          </div>
          <ul className="detail-next-list">
            {project.nextSteps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="detail-related" aria-labelledby="related-title">
        <div className="detail-section-heading">
          <p className="detail-eyebrow">Keep exploring</p>
          <h2 id="related-title">Related projects</h2>
        </div>
        <div className="detail-related-grid">
          {project.related.map((slug) => (
            <ProjectCard key={slug} project={projectBySlug[slug]} />
          ))}
        </div>
      </section>

      <aside className="detail-contact">
        <div>
          <h2>Want to talk about this build?</h2>
          <p>
            I’m always open to discussing projects, engineering, and new ideas.
          </p>
        </div>
        <Link className="detail-button" to="/contact">
          Get in touch <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </aside>
    </main>
  );
}

export default ProjectDetail;
