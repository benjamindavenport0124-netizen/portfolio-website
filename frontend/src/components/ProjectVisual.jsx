import { useState } from "react";
import {
  ArrowRight,
  AudioLines,
  Film,
  Glasses,
  Server,
  Fish,
  Box,
  Globe,
  Crosshair,
} from "lucide-react";
import { getProjectPhotos } from "../data/projectPhotos.js";
import { projectBySlug } from "../data/projects.js";
const visualInfo = {
  airanker: {
    icon: Film,
    title: "Find the moments that matter",
    input: "Gameplay + voice",
    middle: "Local AI",
    output: "Ranked highlights",
    code: ["01 / TRANSCRIBE", "02 / SYNCHRONIZE", "03 / RANK"],
  },
  voicecalculator: {
    icon: AudioLines,
    title: "From spoken words to mathematics",
    input: "Voice input",
    middle: "Parser",
    output: "Result",
    code: ["(tan(4 + (5 - 2)) + 6) * 2", "GROUP → PARSE → SOLVE"],
  },
  aicoach: {
    icon: Crosshair,
    title: "A second perspective on the game",
    input: "Frame / every 5s",
    middle: "Ollama",
    output: "Spoken feedback",
    code: ["CAPTURE → REVIEW", "FEEDBACK / ON REQUEST"],
  },
  jarvis: {
    icon: Glasses,
    title: "A conversation, wherever I look",
    input: "Glasses + iPhone",
    middle: "Python",
    output: "Voice response",
    code: ["“Hey Jarvis”", "VOICE / VISION / CONTEXT"],
  },
  whale: {
    icon: Fish,
    title: "A lighter approach to robotics",
    input: "Helium envelope",
    middle: "ESP32",
    output: "Flapping fins",
    code: ["BUOYANCY + BALANCE + MOTION", "PROTOTYPE / FLIGHT TESTS AHEAD"],
  },
  aiserver: {
    icon: Server,
    title: "A home for local experiments",
    input: "Ubuntu",
    middle: "Ollama",
    output: "AI workflows",
    code: ["i5-11600KF / GTX 1660 SUPER", "LOCAL COMPUTE / SELF-HOSTED"],
  },
  "3dmodeling": {
    icon: Box,
    title: "Ideas, shaped in three dimensions",
    input: "Concept",
    middle: "CAD",
    output: "Digital form",
    code: ["FORM / STRUCTURE / DETAIL", "BLENDER · AUTOCAD · REVIT · MAYA"],
  },
  website: {
    icon: Globe,
    title: "One place for everything I build",
    input: "React",
    middle: "Responsive UI",
    output: "Portfolio",
    code: ["<Curiosity />", "DESIGN → BUILD → REFINE"],
  },
};
export default function ProjectVisual({ slug }) {
  const [failedSource, setFailedSource] = useState(null);
  const visual = visualInfo[slug] ?? visualInfo.website;
  const Icon = visual.icon;
  const photo = getProjectPhotos(slug)[0];
  if (photo && failedSource !== photo.src) {
    return (
      <figure
        className={`project-photo${photo.height > photo.width ? " project-photo-portrait" : ""}`}
      >
        <a
          className="project-photo-media"
          href={photo.src}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open full image: ${photo.title ?? projectBySlug[slug]?.title ?? "Project"} (opens in new tab)`}
        >
          <img
            src={photo.src}
            alt={
              photo.alt ??
              `${projectBySlug[slug]?.title ?? "Project"} — project photo`
            }
            width={photo.width ?? 1600}
            height={photo.height ?? 1000}
            decoding="async"
            onError={() => setFailedSource(photo.src)}
          />
        </a>
        {photo.caption && (
          <figcaption>
            <strong>{photo.title}</strong>
            <span>{photo.caption}</span>
          </figcaption>
        )}
      </figure>
    );
  }
  return (
    <div className={`project-art project-art-${slug}`} aria-hidden="true">
      <div className="art-topline">
        <span>System overview</span>
        <span>/{slug === "whale" ? "prototype" : "concept"}</span>
      </div>
      <div className="art-core">
        <span className="art-orbit art-orbit-one" />
        <span className="art-orbit art-orbit-two" />
        <div className="art-symbol">
          <Icon strokeWidth={1.1} />
        </div>
        <span className="art-point" />
      </div>
      <div className="art-readout">
        {visual.code.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </div>
      <p className="art-title">{visual.title}</p>
      <div className="art-flow">
        <span>{visual.input}</span>
        <ArrowRight size={15} />
        <span>{visual.middle}</span>
        <ArrowRight size={15} />
        <span>{visual.output}</span>
      </div>
      <span className="art-caption">Illustrative workflow</span>
    </div>
  );
}
