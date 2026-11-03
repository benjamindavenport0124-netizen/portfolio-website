export function resolveProjectPhotos(files, slug, catalog = {}) {
  return Object.entries(files)
    .map(([path, src]) => {
      const filename = path.split("/").pop();
      const metadata = catalog[filename.toLowerCase()];
      const registered = metadata?.slug === slug;
      const stem = filename.slice(0, filename.lastIndexOf(".")).toLowerCase();
      let index = null;

      if (registered) {
        index = metadata.order;
      } else if (stem === slug) {
        index = 0;
      } else if (stem.startsWith(`${slug}-`)) {
        const suffix = stem.slice(slug.length + 1);
        if (/^[1-9]\d*$/.test(suffix)) index = Number(suffix);
      }

      return { ...(registered ? metadata : {}), src, filename, index };
    })
    .filter((photo) => photo.index !== null)
    .sort((a, b) => a.index - b.index || a.filename.localeCompare(b.filename));
}
