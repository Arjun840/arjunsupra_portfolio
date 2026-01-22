import NavBar from "../components/NavBar";
import Section from "../components/Section";
import { hero, skills } from "../content/data";

export default function HomePage() {
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

        <Section id="about" eyebrow="" title="" style={{ marginTop: "3rem" }}>
          <div className="about-content">
            <div className="about-image">
              <img 
                src="/images/profile.jpg" 
                alt="Arjun Supramaniam" 
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              />
            </div>
            <div className="about-text">
              <h2 style={{ margin: "0 0 1rem", fontSize: "1.25rem", fontWeight: 400, letterSpacing: "-0.02em" }}>about</h2>
              <p style={{ fontSize: "15px", lineHeight: "1.6", margin: 0 }}>
                I'm an Informatics and Data Science student at the University of Washington. My interests include full-stack development, backend systems, applied machine learning, cloud infrastructure, and AI-powered applications. I build production-grade software using Python, Java, C#, TypeScript, and SQL, and have hands-on experience with FastAPI, React, AWS, Docker, and CI pipelines. I've worked on real-time VR systems, Retrieval-Augmented Generation (RAG) tooling, and scalable research platforms, focusing on performance optimization, reliability, and data-driven system design.
              </p>
            </div>
          </div>
        </Section>

        <Section id="skills" eyebrow="" title="languages" style={{ marginTop: "3rem" }}>
          <div className="skills">
            {skills?.languages?.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            )) || []}
          </div>
        </Section>

        <Section id="frameworks" eyebrow="" title="frameworks/libraries" style={{ marginTop: "3rem" }}>
          <div className="skills">
            {skills?.frameworks?.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            )) || []}
          </div>
        </Section>

        <Section id="tools" eyebrow="" title="tools & technologies" style={{ marginTop: "3rem" }}>
          <div className="skills">
            {skills?.tools?.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            )) || []}
          </div>
        </Section>

        <Section id="databases" eyebrow="" title="databases & cloud" style={{ marginTop: "3rem" }}>
          <div className="skills">
            {skills?.databases?.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            )) || []}
          </div>
        </Section>
      </main>
    </>
  );
}
