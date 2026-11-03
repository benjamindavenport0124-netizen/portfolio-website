import { useState } from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  Video,
  Mic,
  Crosshair,
  Globe,
  Server,
  Box,
  Fish,
  Glasses,
} from "lucide-react";
import { getProjectPhotos } from "../data/projectPhotos.js";
import "../ProjectDetail.css";

const icons = {
  video: Video,
  mic: Mic,
  crosshair: Crosshair,
  globe: Globe,
  server: Server,
  box: Box,
  fish: Fish,
  glasses: Glasses,
};

export default function ProjectCard({ project }) {
  const Icon = icons[project.icon];
  const photo = getProjectPhotos(project.slug)[0];
  const [failedSource, setFailedSource] = useState(null);
  return (
    <Link className="detail-related-card" to={`/projects/${project.slug}`}>
      {photo && failedSource !== photo.src && (
        <div
          className={`detail-card-photo${photo.height > photo.width ? " detail-card-photo-portrait" : ""}`}
        >
          <img
            src={photo.src}
            alt=""
            width="1200"
            height="750"
            loading="lazy"
            decoding="async"
            onError={() => setFailedSource(photo.src)}
            style={photo.fit ? { objectFit: photo.fit } : undefined}
          />
        </div>
      )}
      <Icon size={24} aria-hidden="true" />
      <span className="detail-eyebrow">{project.category}</span>
      <h3>{project.title}</h3>
      {project.status && (
        <span className="detail-status">{project.status}</span>
      )}
      <p>{project.summary}</p>
      <span className="detail-card-link">
        Explore project <ArrowRight size={17} aria-hidden="true" />
      </span>
    </Link>
  );
}
