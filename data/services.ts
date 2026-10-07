export interface Service {
  title: string;
  description: string[];
  preview: string;
}

export const services: Service[] = [
  {
    title: "Full-Stack SaaS Development",
    description: [
      "Next.js apps with auth, billing, and Postgres — from idea to production URL.",
      "You get the repo, the deploy, and docs you can hand to anyone.",
    ],
    preview: "/work/vizora.svg",
  },
  {
    title: "Multi-Agent AI Systems",
    description: [
      "Fleets of coding and research agents with checkpoints, reviews, and cost guards.",
      "Parallel work without the chaos.",
    ],
    preview: "/work/apes-os.svg",
  },
  {
    title: "Agentic Infrastructure & MCP",
    description: [
      "Tool servers, sandboxes, and protocols so agents act safely in your stack.",
      "MCP servers, evals, and guardrails included.",
    ],
    preview: "/work/trueframe.svg",
  },
  {
    title: "AI Automation",
    description: [
      "Pipelines that draft, file, and follow up while you sleep.",
      "Measured in hours returned, not demos shown.",
    ],
    preview: "/work/markontop.svg",
  },
];
