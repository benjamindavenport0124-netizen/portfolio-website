import { resolveProjectPhotos } from "./photoMatching.js";
import { photoCatalog } from "./photoCatalog.js";

// Vite discovers these files when building the site. No missing-image requests
// are made when a project has no photos yet.
const photoFiles = import.meta.glob(
  "../assets/projects/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}",
  { eager: true, query: "?url", import: "default" },
);

export function getProjectPhotos(slug) {
  return resolveProjectPhotos(photoFiles, slug, photoCatalog);
}
