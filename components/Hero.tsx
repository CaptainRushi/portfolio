"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { experience } from "@/data/experience";
import { scrollToId } from "@/lib/scroll";
import { EASE } from "@/lib/motion";
import StatusPill from "./StatusPill";
import PillButton from "./PillButton";
import SocialIcon from "./SocialIcon";
import HeroName from "./HeroName";
import PortraitReveal from "./PortraitReveal";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "Work", id: "work", count: projects.length },
  { label: "Service", id: "service", count: services.length },
  { label: "Experience", id: "experience", count: `${experience.length}` },
  { label: "Contact", id: "contact" },
];

export default function Hero() {
  const [menu, setMenu] = useState(false);
  const reduce = useReducedMotion();

  return (
    <header className="relative overflow-hidden bg-[#FAFAFA]">
      {/* top bar */}
      <motion.nav
        aria-label="Primary"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="flex items-center justify-between gap-3 px-[clamp(20px,4.2vw,65px)] pt-[clamp(24px,3.5vw,56px)]"
      >
        <StatusPill text={profile.availability} />
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollToId(l.id)}
              className="text-[clamp(13px,1.1vw,17px)] font-medium text-[#1A1A1A] transition-opacity hover:opacity-60"
            >
              {l.label}{" "}
              {l.count !== undefined && <span className="text-[12px] text-[#9A9A9A]">[{l.count}]</span>}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden lg:block">
            <PillButton href="#contact">Let&apos;s Talk</PillButton>
          </div>
          <button
            onClick={() => setMenu(true)}
            aria-label="Open menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/[.04] bg-white text-lg shadow-[0_4px_14px_rgba(0,0,0,.06)] lg:hidden"
          >
            ☰
          </button>
        </div>
      </motion.nav>
      <MobileMenu open={menu} onClose={() => setMenu(false)} />

      {/* name */}
      <div className="mt-[clamp(20px,3vw,48px)] px-2">
        <HeroName first={profile.firstName} last={profile.lastName} />
      </div>

      {/* bottom row: role | portrait | socials */}
      <div className="relative flex flex-col items-center gap-8 px-[7.5%] pb-10 pt-2 lg:flex-row lg:items-end lg:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.85 }}
          className="order-2 max-w-[330px] text-center lg:order-1 lg:text-left"
        >
          <p className="text-[30px] font-semibold leading-tight text-[#1A1A1A]">{profile.role}</p>
          <p className="mt-2 text-[17px] leading-[1.65] text-[#555]">
            {profile.description[0]}
            <br />
            {profile.description[1]}
          </p>
          <div className="mt-4 flex justify-center lg:justify-start">
            <PillButton href="#contact">Let&apos;s collaborate</PillButton>
          </div>
        </motion.div>

        <div className="order-1 -mb-2 -mt-[7vw] lg:order-2 lg:-mt-[6vw]">
          <PortraitReveal />
        </div>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.95 }}
          className="order-3 flex flex-row flex-wrap justify-center gap-[14px] lg:flex-col lg:items-end"
        >
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[#EAEAEA] bg-white px-4 py-2 text-[clamp(13px,1.1vw,17px)] font-medium text-[#1A1A1A] transition-transform hover:-translate-y-0.5"
              >
                <SocialIcon icon={s.icon} />
                {s.label}
              </a>
            </li>
          ))}
        </motion.ul>
      </div>
      {!reduce && <span className="sr-only">Portrait color follows the cursor</span>}
    </header>
  );
}
