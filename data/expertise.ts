export interface Expertise {
  title: string;
  blurb: string;
  preview: string;
}

export const expertise: Expertise[] = [
  {
    title: "BACKEND & MULTI-TENANT SAAS",
    blurb:
      "Node.js/Express APIs, Supabase (PostgreSQL, Row-Level Security, Auth), Stripe billing, RBAC and OAuth — shipped end to end in Vizora.",
    preview: "/work/vizora.svg",
  },
  {
    title: "AI AGENTS & LLM SYSTEMS",
    blurb:
      "Tool-calling agents, multi-agent orchestration and prompt-engineered LLM pipelines. OpenAI API, n8n, MCP, scheduled agent workflows.",
    preview: "/work/apes-os.svg",
  },
  {
    title: "DEEP LEARNING & VISION",
    blurb:
      "CNN-LSTM deepfake detection on FaceForensics++ and DFDC with real-time inference and confidence scoring.",
    preview: "/work/trueframe.svg",
  },
  {
    title: "FULL-STACK PRODUCT ENGINEERING",
    blurb:
      "React, TypeScript, Vite, Tailwind and ReactFlow frontends, Playwright E2E tests, deployed on Vercel and Render.",
    preview: "/work/markontop.svg",
  },
];
