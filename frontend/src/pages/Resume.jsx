import { Link } from "react-router";
import {
  Download,
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
  Code2,
  Layers,
  Terminal,
  Box,
  Briefcase,
} from "lucide-react";
import Blueprint from "../components/Blueprint.jsx";
import { projectBySlug } from "../data/projects.js";
import resumePdf from "../assets/BTDResume.pdf";
import "../Resume.css";

const skillGroups = [
  { title: "Languages", icon: Code2, skills: ["Python", "Java", "JavaScript"] },
  { title: "Frameworks & libraries", icon: Layers, skills: ["React", "Vite"] },
  {
    title: "Development & infrastructure",
    icon: Terminal,
    skills: ["Git", "GitHub", "VS Code", "Linux", "Ollama"],
  },
  {
    title: "CAD & 3D modeling",
    icon: Box,
    skills: ["Blender", "AutoCAD", "Maya", "Revit"],
  },
];
const certifications = [
  ["Python Programming", "Python.pdf"],
  ["Java Programming", "Java.pdf"],
  ["JavaScript", "Javascript.pdf"],
  ["AutoCAD Certified User", "AutoCAD.pdf"],
];
export default function Resume() {
  return (
    <main
      className="page-container resume-page"
      id="main-content"
      tabIndex={-1}
    >
      <header className="resume-header">
        <div className="resume-header-text">
          <p className="eyebrow">Resume / the background behind the builds</p>
          <h1>
            Benjamin
            <br />
            Davenport.
          </h1>
          <p className="resume-subtitle">
            Aspiring Aerospace Engineer
            <br />& Software Developer
          </p>
          <p>
            I build AI tools and software that solve real problems. I’m driven
            by curiosity, a desire to learn, and a passion for engineering.
          </p>
          <a
            className="button button-primary"
            href={resumePdf}
            download="Benjamin-Davenport-Resume.pdf"
          >
            <Download size={18} aria-hidden="true" /> Download resume{" "}
            <span className="button-filetype">PDF</span>
          </a>
        </div>
        <div className="resume-header-image">
          <Blueprint />
        </div>
      </header>
      <section className="resume-education" aria-labelledby="education-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / Education</p>
            <h2 id="education-title">A foundation in progress.</h2>
          </div>
          <span className="resume-year">Class of 2027</span>
        </div>
        <div className="resume-school">
          <GraduationCap size={30} aria-hidden="true" />
          <div>
            <h3>Magnolia High School</h3>
            <p>Magnolia, Texas</p>
          </div>
        </div>
        <dl className="resume-metrics">
          <div>
            <dt>Weighted GPA</dt>
            <dd>5.0382</dd>
          </div>
          <div>
            <dt>Unweighted GPA</dt>
            <dd>3.8182</dd>
          </div>
          <div>
            <dt>Class rank</dt>
            <dd>
              37<span> / 551</span>
            </dd>
          </div>
          <div>
            <dt>SAT scores</dt>
            <dd>
              1320<span> · 610 RW / 710 M</span>
            </dd>
            <dd className="resume-second-score">1300 · 560 RW / 740 M</dd>
          </div>
        </dl>
      </section>
      <div className="resume-columns">
        <section className="resume-skills" aria-labelledby="skills-title">
          <p className="eyebrow">02 / Skills</p>
          <h2 id="skills-title">The technical toolkit.</h2>
          {skillGroups.map(({ title, icon: Icon, skills }) => (
            <div className="resume-skill-group" key={title}>
              <h3>
                <Icon size={18} aria-hidden="true" /> {title}
              </h3>
              <ul className="tag-list">
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
          <div className="resume-skill-group">
            <h3>Across the projects</h3>
            <p>
              AI & machine learning · Problem solving · 3D modeling · System
              design · Data processing · Linux server administration
            </p>
          </div>
        </section>
        <section
          className="resume-projects"
          aria-labelledby="resume-projects-title"
        >
          <p className="eyebrow">03 / Applied learning</p>
          <h2 id="resume-projects-title">Built, not just studied.</h2>
          <div className="resume-work-list">
            {["whale", "jarvis", "airanker", "voicecalculator", "aicoach"].map(
              (slug) => {
                const project = projectBySlug[slug];
                return (
                  <Link
                    className="resume-project-item"
                    key={slug}
                    to={`/projects/${slug}`}
                  >
                    <div>
                      <h3>{project.title}</h3>
                      <p>{project.summary}</p>
                    </div>
                    <ArrowUpRight size={20} aria-hidden="true" />
                  </Link>
                );
              },
            )}
          </div>
          <Link className="text-link" to="/projects">
            Explore all projects <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </section>
      </div>
      <section className="resume-experience" aria-labelledby="experience-title">
        <p className="eyebrow">04 / Experience</p>
        <h2 id="experience-title">Learning beyond the screen.</h2>
        <div className="resume-job">
          <div>
            <Briefcase size={24} aria-hidden="true" />
            <h3>Chick-fil-A</h3>
            <p>Kitchen Team Member</p>
            <p className="resume-job-date">
              August 2025 – March 2026
              <br />
              Magnolia, Texas
            </p>
          </div>
          <ul>
            <li>
              Worked in a fast-paced environment while maintaining accuracy and
              efficiency.
            </li>
            <li>
              Collaborated with team members to ensure excellent customer
              service.
            </li>
            <li>
              Developed strong time management and problem-solving skills.
            </li>
          </ul>
        </div>
      </section>
      <div className="resume-bottom-grid">
        <section>
          <p className="eyebrow">05 / Beyond the classroom</p>
          <h2>Activities & achievements</h2>
          <ul className="resume-achievements">
            <li>National Honor Society Member</li>
            <li>UIL Computer Science Team Member</li>
            <li>5th Place – UIL Computer Science Invitational</li>
            <li>36+ Volunteer Hours Completed</li>
          </ul>
        </section>
        <section>
          <p className="eyebrow">06 / Credentials</p>
          <h2>Certifications</h2>
          <ul className="resume-certifications">
            {certifications.map(([name, file]) => (
              <li key={name}>
                <a
                  href={`/certifications/${file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {name}
                  <ArrowUpRight size={17} aria-hidden="true" />
                  <span className="sr-only"> (PDF, opens in new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
