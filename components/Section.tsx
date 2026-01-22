type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export default function Section({ id, eyebrow, title, children, style }: SectionProps) {
  return (
    <section id={id} className="section" style={style}>
      {eyebrow && <div className="tag">{eyebrow}</div>}
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}
