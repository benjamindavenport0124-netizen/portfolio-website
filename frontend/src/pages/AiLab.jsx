import ProjectCard from "../components/ProjectCard.jsx";
import { projectBySlug } from "../data/projects.js";
import "../ProjectDetail.css";

export default function AiLab() {
  return (
    <main className="detail-page detail-lab" id="main-content" tabIndex={-1}>
      <header>
        <p className="detail-eyebrow">Experiments / Local intelligence</p>
        <h1>AI Lab</h1>
        <p className="detail-lead">
          Exploring AI through speech, video, visual context, and wearable
          devices.
        </p>
        <p className="detail-lab-intro">
          These projects connect AI models with practical software
          workflows—from finding gameplay highlights to building an assistant
          for smart glasses.
        </p>
      </header>
      <section aria-labelledby="lab-projects">
        <h2 id="lab-projects">Explore the experiments</h2>
        <div className="detail-related-grid">
          {["jarvis", "airanker", "voicecalculator", "aicoach", "aiserver"].map(
            (slug) => (
              <ProjectCard key={slug} project={projectBySlug[slug]} />
            ),
          )}
        </div>
      </section>
    </main>
  );
}
