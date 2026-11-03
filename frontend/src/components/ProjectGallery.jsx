import { ArrowUpRight } from "lucide-react";
import { getProjectPhotos } from "../data/projectPhotos.js";

export default function ProjectGallery({ project }) {
  const photos = getProjectPhotos(project.slug).slice(1);
  if (!photos.length) return null;

  return (
    <section className="detail-gallery" aria-labelledby="gallery-title">
      <div className="detail-section-heading">
        <p className="detail-eyebrow">A closer look at the work</p>
        <h2 id="gallery-title">Project gallery</h2>
      </div>
      <div className="detail-gallery-grid">
        {photos.map((photo, index) => (
          <figure
            key={photo.filename}
            className={
              photo.height > photo.width ? "gallery-photo-portrait" : ""
            }
          >
            <a href={photo.src} target="_blank" rel="noopener noreferrer">
              <img
                src={photo.src}
                alt={
                  photo.alt ?? `${project.title} — project image ${index + 2}`
                }
                width={photo.width ?? 1600}
                height={photo.height ?? 1000}
                loading="lazy"
                decoding="async"
              />
              <span>
                Open full image <ArrowUpRight size={16} aria-hidden="true" />
                <span className="sr-only"> (opens in new tab)</span>
              </span>
            </a>
            {photo.caption && (
              <figcaption>
                <h3>{photo.title}</h3>
                <p>{photo.caption}</p>
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}
