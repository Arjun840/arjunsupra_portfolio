import NavBar from "../../components/NavBar";
import Section from "../../components/Section";
import ChatPanel from "../../components/ChatPanel";
import { hero } from "../../content/data";

export default function AIPage() {
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

        <Section id="ai" eyebrow="" title="AI" style={{ marginTop: "3rem" }}>
          <ChatPanel />
        </Section>
      </main>
    </>
  );
}
