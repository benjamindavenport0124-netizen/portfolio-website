import { Link } from "react-router";

export default function NotFound({
  title = "Let’s find your way back.",
  description = "This page is not available. There is plenty to explore in the projects.",
}) {
  return (
    <main className="page-container" id="main-content" tabIndex={-1}>
      <div className="page-heading">
        <p className="eyebrow">404 / A little off course</p>
        <h1>{title}</h1>
        <p>{description}</p>
        <Link className="button button-primary" to="/projects">
          Explore projects
        </Link>
      </div>
    </main>
  );
}
