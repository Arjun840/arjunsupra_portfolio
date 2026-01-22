import type { Project } from "../content/data";

type Props = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: Props) {
  return (
    <article className="card">
      <div style={{ marginBottom: "2rem" }}>
        <h3 style={{ margin: "0 0 0.25rem", fontWeight: 400, fontSize: "1.1rem" }}>
          {project.title}
        </h3>
        <p className="muted" style={{ margin: "0 0 0.5rem", fontSize: "14px" }}>
          {project.summary}
        </p>
        <p className="muted" style={{ margin: "0 0 0.5rem", fontSize: "14px" }}>
          {project.tech.join(", ")}
        </p>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
          {project.deployedLink && (
            <a 
              href={project.deployedLink} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ fontSize: "14px", textDecoration: "underline", color: "inherit" }}
            >
              view project →
            </a>
          )}
          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ fontSize: "14px", textDecoration: "underline", color: "inherit" }}
          >
            github →
          </a>
          {project.note && (
            <span className="muted" style={{ fontSize: "12px", fontStyle: "italic" }}>
              ({project.note})
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
