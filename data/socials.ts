import { profile } from "./profile";

export interface Social {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "x" | "mail";
}

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: "linkedin" },
  { label: "X", href: "https://x.com/", icon: "x" },
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
];
