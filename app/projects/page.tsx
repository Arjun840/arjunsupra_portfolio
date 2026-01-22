import NavBar from "../../components/NavBar";
import Section from "../../components/Section";
import ProjectCard from "../../components/ProjectCard";
import { hero, projects } from "../../content/data";

export default function ProjectsPage() {
  return (
    <>
      <main>
        <section className="hero">
          <h1 className="headline">{hero.name}</h1>
          <p className="muted" style={{ fontSize: "14px", marginTop: "0.5rem", marginBottom: "2rem" }}>
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </section>

        <NavBar />

        <Section id="projects" eyebrow="" title="Selected Work" style={{ marginTop: "3rem" }}>
          <div className="grid projects">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} index={0} />
            ))}
          </div>
        </Section>
      </main>
    </>
  );
}
