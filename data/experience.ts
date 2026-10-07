export interface Experience {
  org: string;
  role: string;
  dates: string;
  points: string[];
  preview: string;
}

export const experience: Experience[] = [
  {
    org: "Vizora (Independent SaaS Product)",
    role: "Founder & Full-Stack Developer",
    dates: "Dec 2025 - Now",
    points: [
      "Shipped a production multi-tenant SaaS end to end: 170+ commits and a live 4-tier (Free/Pro/Teams/Business) billing structure on React, Node.js/Express and Supabase with Row-Level Security.",
      "Built a generative-AI documentation engine on the OpenAI API with multi-level (database, table, relationship) explanations.",
      "Shipped workspace collaboration, versioned schema history with diffing, RBAC and Google/GitHub OAuth.",
    ],
    preview: "/work/vizora.svg",
  },
  {
    org: "Tata Group — Tata iQ (via Forage)",
    role: "AI & Data Analytics Virtual Intern",
    dates: "Oct 2025",
    points: [
      "Proposed two collections-function deliverables: a no-code predictive framework and an agentic-AI collections strategy, using GenAI-driven EDA with ethical-AI and compliance safeguards.",
    ],
    preview: "/work/apes-os.svg",
  },
  {
    org: "Deloitte Australia (via Forage)",
    role: "Data Analytics Virtual Intern",
    dates: "Oct 2025",
    points: [
      "Delivered forensic data-analysis findings in a client-ready Tableau dashboard and an Excel-based classification model.",
    ],
    preview: "/work/trueframe.svg",
  },
  {
    org: "Nutan College of Engineering and Research, Pune",
    role: "B.Tech, Computer Science & Engineering (AI)",
    dates: "Graduated Jun 2026",
    points: [
      "Coursework: DSA, DBMS, OS, Machine Learning, Deep Learning, Advanced ML, NLP.",
      "Certifications: Machine Learning I (Columbia+, edX, Jul 2025); Create an Azure AI Search Solution (Microsoft, Jul 2025).",
    ],
    preview: "/work/markontop.svg",
  },
];

export const experienceMeta = "170+ commits shipped to production";
