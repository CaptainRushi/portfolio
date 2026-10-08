export type ProjectKind = "Real Project" | "Exploration";

export interface Project {
  slug: string;
  cardTitle: string;
  title: string;
  kind: ProjectKind;
  chips: string[];
  timeline: string;
  service: string;
  tools: string[];
  description: string;
  caption: string;
  highlights: string[];
  liveUrl?: string;
  cover: string;
  images: string[];
}

export const projects: Project[] = [
  {
    slug: "vizora",
    cardTitle: "Vizora — AI Schema Documentation Platform",
    title: "Vizora",
    kind: "Real Project",
    chips: ["SaaS Platform", "Solo Founder"],
    timeline: "Dec 2025 – Present",
    service: "Backend, Full-Stack, AI",
    tools: ["React", "TypeScript", "Node.js", "Supabase", "OpenAI", "Stripe", "Playwright", "Vercel"],
    description:
      "Turns SQL, Prisma and Drizzle schemas into interactive ER diagrams, AI-verified documentation and version-tracked schema history — without ever connecting to your database.",
    caption: "A production multi-tenant SaaS built solo, from architecture to billing to deployment.",
    highlights: [
      "Multi-tenant access control with Supabase PostgreSQL and Row-Level Security.",
      "OpenAI-powered explanations at database, table and relationship level.",
      'Verified "Ask Schema": AI answers that can be audited against the schema.',
      "Stripe billing across Free / Pro / Teams / Business with webhooks and lifecycle management.",
      "Workspace collaboration, versioned schema history with diffing, RBAC, Google/GitHub OAuth, team activity log, downloadable docs PDF.",
      "170+ commits. Playwright E2E tests. Deployed on Vercel + Render.",
    ],
    liveUrl: "https://vizora1.vercel.app",
    cover: "/projects/vizora/cover.png",
    images: [],
  },
  {
    slug: "mission-control",
    cardTitle: "Mission Control — 7-Agent Squad That Runs a SaaS Solo",
    title: "Mission Control",
    kind: "Real Project",
    chips: ["Multi-Agent System", "Solo Build"],
    timeline: "2026",
    service: "AI Agents, Infrastructure",
    tools: ["LLM agents", "MCP", "Scheduled jobs", "Dashboard"],
    description:
      "Seven specialised AI agents and one dashboard handling content, ops and launch work for a solo-founder SaaS — no employees.",
    caption: "TODO: one line on how the agents coordinate and what they automate.",
    highlights: [
      "TODO: agent roles and responsibilities.",
      "TODO: orchestration, memory and tool-calling approach.",
      "TODO: cost and reliability notes (my post claims $0/month; keep only if accurate).",
    ],
    liveUrl:
      "https://dev.to/rushikesh_bodakhe_db28644/how-i-built-a-mission-control-system-to-run-my-saas-solo-7-ai-agents-dashboard-53fi",
    cover: "/projects/mission-control/cover.png",
    images: [],
  },
  {
    slug: "trueframe",
    cardTitle: "Trueframe — Deepfake Video Detection",
    title: "Trueframe",
    kind: "Exploration",
    chips: ["Deep Learning", "Computer Vision"],
    timeline: "Aug 2025",
    service: "Machine Learning, Web App",
    tools: ["Python", "TensorFlow / PyTorch", "OpenCV", "dlib / MTCNN", "Flask"],
    description:
      "A CNN-LSTM pipeline that detects AI-generated deepfake videos using CNN feature extraction and LSTM temporal modeling with attention.",
    caption: "Evaluated on FaceForensics++ and DFDC, with a CLI and a Flask web app.",
    highlights: [
      "Real-time inference with confidence scoring.",
      "Accepts MP4, AVI, MOV, MKV and WebM.",
      "TODO: add accuracy numbers only if I have measured results.",
    ],
    liveUrl: undefined,
    cover: "/projects/trueframe/cover.png",
    images: [],
  },
  {
    slug: "workflow-agent",
    cardTitle: "AI Workflow Automation Agent in n8n",
    title: "Workflow Automation Agent",
    kind: "Exploration",
    chips: ["AI Agent", "Automation"],
    timeline: "May 2025",
    service: "AI Agents, Automation",
    tools: ["n8n", "OpenAI API", "JavaScript"],
    description:
      "A 3-workflow AI agent covering email automation, research assistance and calendar scheduling, with the OpenAI LLM API as the decision layer.",
    caption: "n8n's node-based actions act as the agent's tool-calling interface.",
    highlights: ["Email automation workflow.", "Research assistance workflow.", "Calendar scheduling workflow."],
    liveUrl: undefined,
    cover: "/projects/workflow-agent/cover.png",
    images: [],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
