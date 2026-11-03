# Benjamin Davenport — Portfolio Website

A React portfolio for software, local AI, robotics, and engineering projects.
The application uses Vite, React Router, Lucide icons, and CSS. Project content
and photo captions live in data files rather than separate hard-coded pages.

## Development

Use a Node.js version supported by `frontend/package.json`. The project has
been checked with Node.js 22.23.2.

```bash
cd frontend
npm ci
npm run dev
```

Open the local URL printed by Vite. No API keys or environment variables are
required for this portfolio.

## Checks before pushing

Run these from `frontend/`:

```bash
npm run lint
npm test
npm run build
```

Or run all three with `npm run check`. The production build is written to
`frontend/dist/`, which is ignored by Git. `npm run preview` serves that build
for local review. A Git push or deployment is a separate action.

## Source layout

```text
frontend/
  public/                 Certification PDFs and favicon
  src/
    assets/               Site graphics and the resume PDF
      projects/           Project photos and screenshots
    components/           Shared layout, navigation, cards, and visuals
    data/                 Project descriptions, photo metadata, and tests
    pages/                Home, about, projects, resume, contact, and AI Lab
    App.jsx               Routes, legacy redirects, titles, and focus handling
    index.css             Global design tokens and shared styles
assets/backups/resume/    Local-only resume artwork backups (ignored by Git)
```

## Updating project content

Edit `frontend/src/data/projects.js` for project titles, descriptions, tools,
workflows, related-project links, and development status. Each project has a
unique `slug` used in its `/projects/<slug>` URL. The shared detail page renders
the corresponding entry. Legacy URLs redirect to the existing canonical slugs.

The resume text is in `frontend/src/pages/Resume.jsx`; its downloadable PDF is
`frontend/src/assets/BTDResume.pdf`. Certificates are in
`frontend/public/certifications/`. The AutoCAD PDF is a privacy-redacted exam
result; keep its personal identifiers and detailed scores out of public copies.

## Adding project photos

Put photos in `frontend/src/assets/projects/`. Supported formats are JPG, JPEG,
PNG, WebP, and AVIF. Keep each file's actual extension.

| Project | Standard cover filename |
| --- | --- |
| Project Whale | `whale.jpg` |
| Jarvis | `jarvis.jpg` |
| AI Video Ranker | `airanker.jpg` |
| Voice Calculator | `voicecalculator.jpg` |
| AI FPS Coach | `aicoach.jpg` |
| Local AI Server | `aiserver.jpg` |
| Portfolio Website | `website.jpg` |
| 3D Modeling | `3dmodeling.jpg` |

For gallery images, use names such as `whale-2.jpg` and `whale-3.png`. Numbered
images are sorted numerically. If there is no cover, the first numbered image
is used. Rebuild after adding photos so Vite includes them in the output.

The existing uploads keep their original filenames. Their display order,
dimensions, captions, and image descriptions are registered in
`frontend/src/data/photoCatalog.js`. Add an entry there when a photo needs a
custom name or caption. Choose one cover per project. `fit: "contain"` keeps
wide diagrams fully visible in card thumbnails.

The code illustrations remain available for projects without photos and as
fallbacks when a cover fails to load. Original filenames and image pixels are
preserved; private capture metadata is removed before publication.

Before adding photos, remove GPS, device details, timestamps, embedded previews,
and EXIF/XMP metadata. `npm test` checks PNG and JPEG project uploads for common
private metadata blocks. Inspect and sanitize other formats separately. Review
PDF contents for identifiers as well as metadata before publishing them.

`assets/backups/` is ignored and stays local. Do not place private originals or
full-site archives in the public asset directories.

## Hosting

For Vercel, use `frontend` as the project root, `npm run build` as the build
command, and `dist` as the output directory. `frontend/vercel.json` contains
the SPA rewrite needed for direct links such as `/projects/whale`.

On another host, serve the contents of `frontend/dist/` and configure unknown
page paths to fall back to `index.html` while continuing to serve asset files.
