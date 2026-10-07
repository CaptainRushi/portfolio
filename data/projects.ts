export type ProjectType = "Real Project" | "Exploration";

export interface Project {
  slug: string;
  title: string;
  type: ProjectType;
  tags: [string, string];
  timeline: string;
  service: string;
  tools: string[];
  description: string[];
  caption: string;
  image: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "trueframe",
    title: "Trueframe deepfake detection platform",
    type: "Real Project",
    tags: ["AI Safety", "Solo build"],
    timeline: "6 Weeks",
    service: "Full-Stack SaaS, AI Systems",
    tools: ["Next.js", "Python", "Supabase"],
    description: [
      "Upload a clip, get a verdict. Trueframe scores video for synthetic manipulation and explains why.",
      "Detector ensemble plus a review UI built for trust, not fear.",
    ],
    caption:
      "A deepfake detection platform with an upload-to-verdict flow, confidence scoring, and shareable reports.",
    image: "/work/trueframe.svg",
    liveUrl: "#",
  },
  {
    slug: "vizora",
    title: "Vizora schema intelligence SaaS",
    type: "Real Project",
    tags: ["DevTool", "Solo build"],
    timeline: "4 Weeks",
    service: "UI/UX Design, Web Design",
    tools: ["Next.js", "Postgres", "Tailwind"],
    description: [
      "Point Vizora at a database and it maps every table, relation, and orphan column.",
      "Schema diffs read like a changelog instead of a migration panic.",
    ],
    caption:
      "Schema intelligence for teams: auto-mapped ERDs, drift alerts, and docs that write themselves.",
    image: "/work/vizora.svg",
    liveUrl: "#",
  },
  {
    slug: "apes-os",
    title: "APES OS mission control for agents",
    type: "Exploration",
    tags: ["Agentic", "Team build"],
    timeline: "8 Weeks",
    service: "Multi-Agent Systems, Infra",
    tools: ["Next.js", "MCP", "Docker"],
    description: [
      "One dashboard to launch, watch, and intervene in fleets of parallel coding agents.",
      "Worktrees, checkpoints, and cost guards built in.",
    ],
    caption:
      "Mission control for parallel AI coding agents — parallel runs, checkpoints, and cost tracking.",
    image: "/work/apes-os.svg",
    liveUrl: "#",
  },
  {
    slug: "markontop",
    title: "MarkOnTop pay-to-rank marketing",
    type: "Exploration",
    tags: ["Marketplace", "Solo build"],
    timeline: "3 Weeks",
    service: "Web Design & Dev, Branding",
    tools: ["Next.js", "Stripe", "Vercel"],
    description: [
      "Brands bid for top placement; rankings update live with receipts.",
      "Transparent sponsored slots without the dark patterns.",
    ],
    caption:
      "A pay-to-rank marketing platform with live bidding, transparent sponsored slots, and Stripe checkout.",
    image: "/work/markontop.svg",
    liveUrl: "#",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
