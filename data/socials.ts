import { profile } from "./profile";

export interface Social {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "dev" | "mail";
}

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/CaptainRushi", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rushikeshbodakhe/", icon: "linkedin" },
  { label: "DEV", href: "https://dev.to/rushikesh_bodakhe_db28644", icon: "dev" },
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
];
