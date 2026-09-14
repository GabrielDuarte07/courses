export interface Track {
  key: "frontend" | "backend" | "platform";
  label: string;
  color: string;
  tagline: string;
}

export interface KnowledgePoint {
  week: number;
  frontend: number;
  backend: number;
  platform: number;
}

export const tracks: Track[] = [
  {
    key: "frontend",
    label: "Frontend & Client",
    color: "#a78bfa",
    tagline: "TS, React, Next.js",
  },
  {
    key: "backend",
    label: "Backend & Data",
    color: "#e879f9",
    tagline: "Node, Go, PostgreSQL",
  },
  {
    key: "platform",
    label: "Platform & Cloud",
    color: "#a1a1aa",
    tagline: "Docker, K8s, AWS",
  },
];

export const knowledge: KnowledgePoint[] = [
  { week: 0, frontend: 0, backend: 0, platform: 0 },
  { week: 1, frontend: 9, backend: 5, platform: 2 },
  { week: 2, frontend: 19, backend: 13, platform: 6 },
  { week: 3, frontend: 31, backend: 23, platform: 12 },
  { week: 4, frontend: 44, backend: 34, platform: 20 },
  { week: 5, frontend: 55, backend: 46, platform: 30 },
  { week: 6, frontend: 64, backend: 56, platform: 42 },
  { week: 7, frontend: 72, backend: 64, platform: 54 },
  { week: 8, frontend: 79, backend: 71, platform: 65 },
  { week: 9, frontend: 85, backend: 77, platform: 74 },
  { week: 10, frontend: 90, backend: 83, platform: 81 },
  { week: 11, frontend: 94, backend: 88, platform: 87 },
  { week: 12, frontend: 97, backend: 93, platform: 92 },
];

export interface Milestone {
  week: number;
  title: string;
  body: string;
}

export const milestones: Milestone[] = [
  {
    week: 3,
    title: "Typed groundwork",
    body: "Generics, type narrowing, and patterns from TypeScript Done Right — everything else builds on this.",
  },
  {
    week: 5,
    title: "Ship your first full-stack app",
    body: "React From Scratch meets Node.js In-Depth: a real app with a real API, running end to end.",
  },
  {
    week: 8,
    title: "Deploy to the cloud",
    body: "Containerize with Docker, orchestrate with Kubernetes, and wire up a resilient AWS pipeline.",
  },
  {
    week: 12,
    title: "Production-ready portfolio",
    body: "Systems programming in Rust, GraphQL APIs, and clean architecture — a portfolio that proves mastery.",
  },
];
