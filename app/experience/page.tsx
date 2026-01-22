import NavBar from "../../components/NavBar";
import Section from "../../components/Section";
import { hero, timeline } from "../../content/data";

export default function ExperiencePage() {
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

        <Section id="experience" eyebrow="" title="Experience" style={{ marginTop: "3rem" }}>
          <div className="timeline">
            {timeline.map((item) => (
              <div key={item.role} className="timeline-item">
                <div className="timeline-bullet" />
                <div>
                  <div style={{ fontSize: "15px" }}>
                    <strong>{item.role}</strong>
                    <span className="muted"> • {item.org}</span>
                  </div>
                  <div className="muted" style={{ fontSize: "14px", marginTop: "0.25rem" }}>
                    {item.time}
                  </div>
                  <p style={{ margin: "0.5rem 0 0", fontSize: "15px" }}>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </main>
    </>
  );
}
