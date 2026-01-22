import NavBar from "../../components/NavBar";
import Section from "../../components/Section";
import { hero, contact } from "../../content/data";

export default function ContactPage() {
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

        <Section id="contact" eyebrow="" title="Get in touch" style={{ marginTop: "3rem" }}>
          <p className="muted" style={{ marginBottom: "1.5rem", fontSize: "15px" }}>
            I'm always excited to discuss anything tech-related or hearing about new opportunities.
          </p>
          <div className="contact">
            <div style={{ marginBottom: "0.5rem" }}>
              <span style={{ fontSize: "15px" }}>Email: </span>
              <a href={`mailto:${contact.email}`} style={{ fontSize: "15px", textDecoration: "underline" }}>
                {contact.email}
              </a>
            </div>
            <div style={{ marginBottom: "0.5rem" }}>
              <span style={{ fontSize: "15px" }}>GitHub: </span>
              <a href={contact.github} target="_blank" style={{ fontSize: "15px", textDecoration: "underline" }}>
                @{contact.github.split('/').pop()}
              </a>
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <span style={{ fontSize: "15px" }}>LinkedIn: </span>
              <a href={contact.linkedin} target="_blank" style={{ fontSize: "15px", textDecoration: "underline" }}>
                /in/{contact.linkedin.split('/').pop()}
              </a>
            </div>
          </div>
          <p className="muted" style={{ fontSize: "15px" }}>
            Feel free to reach out on any of the platforms above!
          </p>
        </Section>
      </main>
    </>
  );
}
