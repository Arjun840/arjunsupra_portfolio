export type Project = {
  title: string;
  summary: string;
  tech: string[];
  githubLink: string;
  deployedLink?: string;
  note?: string;
};

export const hero = {
  name: "Arjun Supramaniam",
  title: "Developer & student building thoughtful digital experiences.",
  blurb:
    "I'm a third-year student studying informatics and data science at the University of Washington. I love developing systems, whether they're full-stack projects or tools used for medical trials.",
  location: "Based wherever the wifi is strong."
};

export const skills = {
  languages: [
    "Python",
    "TypeScript",
    "Java",
    "C#",
    "SQL",
    "JavaScript"
  ],
  frameworks: [
    "React",
    "Next.js",
    "FastAPI",
    "Flask",
    "Node.js",
    "Express",
    "Pandas",
    "NumPy"
  ],
  tools: [
    "Git",
    "GitHub",
    "Docker",
    "CI/CD",
    "LLMs",
    "RAG",
    "ChromaDB"
  ],
  databases: [
    "PostgreSQL",
    "AWS",
    "AWS S3",
    "AWS EC2",
    "AWS Lambda"
  ]
};

export const projects: Project[] = [
  {
    title: "PortfolioMax",
    summary:
      "AI Investment Platform — Built an end-to-end ML system that forecasts asset returns and optimizes portfolios with real risk constraints and live cloud deployment.",
    tech: ["React", "FastAPI", "AWS", "ML", "Production"],
    githubLink: "https://github.com/Arjun840/portfolio-optimization",
    deployedLink: "https://portfolio-max-chi.vercel.app"
  },
  {
    title: "RAG Codebase Tool",
    summary:
      "Developer Productivity CLI — Built a semantic search and QA system over large codebases using vector databases and modular LLM inference.",
    tech: ["Python", "Vector DB", "Retrieval", "Systems"],
    githubLink: "https://github.com/Arjun840/codebase-rag",
    deployedLink: "https://github.com/Arjun840/codebase-rag"
  },
  {
    title: "UrbanResponse AI",
    summary:
      "AI-Powered Emergency Response Platform — Built a real-time multi-agent disaster coordination system for triage, dispatch, resource allocation, and live 3D map visualization.",
    tech: ["Python", "FastAPI", "Multi-Agent Systems", "LLMs", "Geospatial Visualization"],
    githubLink: "https://github.com/tpradosh/UrbanResponseAi",
    deployedLink: "https://github.com/tpradosh/UrbanResponseAi"
  },
  {
    title: "Bon AiPPETIT",
    summary:
      "Multimodal AI App (DubHacks Winner) — Built a computer vision pipeline for food recognition and deployed a full-stack LLM-powered recommendation system.",
    tech: ["ML", "APIs", "CV", "Deployment"],
    githubLink: "https://github.com/stevezhuyc/BON-AiPPETIT",
    deployedLink: "https://github.com/stevezhuyc/BON-AiPPETIT",
    note: "Link to teammate's repository"
  }
];

export const timeline = [
  {
    role: "Undergraduate Researcher",
    org: "UW Medicine",
    time: "Oct 2025 — Present",
    detail: "Built real-time data pipelines and calibration systems for VR eye-tracking experiments."
  },
  {
    role: "Software Developer",
    org: "Sensors Lab",
    time: "Dec 2024 — Sep 2025",
    detail: "Built research management platform used by 150+ users and reduced data latency by 40%."
  },
  {
    role: "Teaching Assistant",
    org: "UW ECE",
    time: "Mar 2025 — Jun 2025",
    detail: "Built automation tools to scale grading and participation tracking."
  }
];

export const contact = {
  email: "arjunsupra1@gmail.com",
  github: "https://github.com/Arjun840",
  linkedin: "https://www.linkedin.com/in/arjun-supramaniam",
  resume: "/resume/arjunsupra_resume.pdf" // Add your resume PDF link here
};
