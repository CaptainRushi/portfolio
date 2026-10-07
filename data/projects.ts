export type ProjectKind = "Real Project" | "Exploration";

export interface Project {
  slug: string;
  title: string;
  kind: ProjectKind;
  tags: string[];
  cover: string;
  images: string[];
  timeline: string;
  tools: string[];
  service: string;
  description: string;
  caption: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "trueframe",
    title: "Trueframe deepfake detection platform",
    kind: "Real Project",
    tags: ["AI Safety", "Solo build"],
    cover: "/work/trueframe.svg",
    images: ["/work/trueframe.svg", "/work/trueframe.svg"],
    timeline: "6 Weeks",
    tools: ["Next.js", "Python", "Supabase"],
    service: "Full-Stack SaaS, AI Systems",
    description: "Upload a clip, get a verdict. Trueframe scores video for synthetic manipulation and explains why.",
    caption: "Upload-to-verdict flow with confidence scoring and shareable reports.",
    liveUrl: "#",
  },
  {
    slug: "vizora",
    title: "Vizora schema intelligence SaaS",
    kind: "Real Project",
    tags: ["DevTool", "Solo build"],
    cover: "/work/vizora.svg",
    images: ["/work/vizora.svg", "/work/vizora.svg"],
    timeline: "4 Weeks",
    tools: ["Next.js", "Postgres", "Tailwind"],
    service: "UI/UX Design, Web Design",
    description: "Point Vizora at a database and it maps every table, relation, and orphan column.",
    caption: "Auto-mapped ERDs, drift alerts, and docs that write themselves.",
    liveUrl: "#",
  },
  {
    slug: "apes-os",
    title: "APES OS mission control for agents",
    kind: "Exploration",
    tags: ["Agentic", "Team build"],
    cover: "/work/apes-os.svg",
    images: ["/work/apes-os.svg", "/work/apes-os.svg"],
    timeline: "8 Weeks",
    tools: ["Next.js", "MCP", "Docker"],
    service: "Multi-Agent Systems, Infra",
    description: "One dashboard to launch, watch, and intervene in fleets of parallel coding agents.",
    caption: "Parallel runs, checkpoints, and cost tracking in one dark console.",
    liveUrl: "#",
  },
  {
    slug: "markontop",
    title: "MarkOnTop pay-to-rank marketing",
    kind: "Exploration",
    tags: ["Marketplace", "Solo build"],
    cover: "/work/markontop.svg",
    images: ["/work/markontop.svg", "/work/markontop.svg"],
    timeline: "3 Weeks",
    tools: ["Next.js", "Stripe", "Vercel"],
    service: "Web Design & Dev, Branding",
    description: "Brands bid for top placement; rankings update live with receipts.",
    caption: "Live bidding, transparent sponsored slots, and Stripe checkout.",
    liveUrl: "#",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
