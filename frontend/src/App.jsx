import { useEffect, useRef } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router";
import "./App.css";
import "./Visuals.css";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Resume from "./pages/Resume.jsx";
import Contact from "./pages/Contact.jsx";
import Projects from "./pages/Projects.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import AiLab from "./pages/AiLab.jsx";
import NotFound from "./pages/NotFound.jsx";
import SiteLayout from "./components/SiteLayout.jsx";
import { projectBySlug } from "./data/projects.js";

const titles = {
  "/": "Aerospace Engineering & Software Portfolio",
  "/about": "About",
  "/resume": "Resume",
  "/projects": "Projects",
  "/ai-lab": "AI Lab",
  "/contact": "Contact",
};

const legacyProjectRoutes = [
  ["voice-calculator", "voicecalculator"],
  ["ai-lab", "airanker"],
  ["ai-video-ranker", "airanker"],
  ["ai-coach", "aicoach"],
  ["ai-server", "aiserver"],
];

function RouteEffects() {
  const { pathname } = useLocation();
  const previousPath = useRef(pathname);

  useEffect(() => {
    const path = pathname.replace(/\/+$/, "") || "/";
    const slug = path.match(/^\/projects\/([^/]+)$/)?.[1];
    const projectTitle = slug ? projectBySlug[slug]?.title : undefined;
    document.title = `${titles[path] ?? projectTitle ?? "Page not found"} | Benjamin Davenport`;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    if (previousPath.current !== pathname) {
      document.getElementById("main-content")?.focus({ preventScroll: true });
    }
    previousPath.current = pathname;
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <RouteEffects />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/ai-lab" element={<AiLab />} />
          <Route path="/contact" element={<Contact />} />
          {legacyProjectRoutes.map(([oldSlug, slug]) => (
            <Route
              key={oldSlug}
              path={`/projects/${oldSlug}`}
              element={<Navigate to={`/projects/${slug}`} replace />}
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
