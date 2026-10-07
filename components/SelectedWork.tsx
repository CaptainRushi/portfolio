"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, type ProjectKind } from "@/data/projects";
import SectionTitle from "./SectionTitle";
import GhostWatermark from "./GhostWatermark";
import WorkCard from "./WorkCard";
import PillButton from "./PillButton";
import { EASE } from "@/lib/motion";

const tabs: ("All" | ProjectKind)[] = ["All", "Real Project", "Exploration"];

export default function SelectedWork({ limit = 4 }: { limit?: number }) {
  const [tab, setTab] = useState<(typeof tabs)[number]>("All");
  const filtered = projects.filter((p) => tab === "All" || p.kind === tab).slice(0, limit);

  return (
    <section id="work" aria-labelledby="work-title" className="relative bg-[#F6F6F6] px-5 py-16 md:px-10 md:py-24">
      <GhostWatermark text="PORTFOLIO" align="center" />
      <div className="relative text-center">
        <span id="work-title">
          <SectionTitle text="SELECTED WORK" align="center" />
        </span>
      </div>
      <div className="mx-auto mt-8 flex max-w-[1007px] flex-wrap items-center justify-between gap-3">
        <div role="tablist" aria-label="Filter projects" className="flex gap-7">
          {tabs.map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={tab === t}
              onClick={() => setTab(t)}
              className={`min-h-[44px] text-[clamp(13px,1.1vw,17px)] transition-opacity hover:opacity-70 ${
                tab === t ? "font-medium text-[#1A1A1A]" : "font-normal text-[#6B6B6B]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <PillButton href="https://github.com/CaptainRushi" variant="light" external>
          View All Work
        </PillButton>
      </div>
      <motion.div layout className="mx-auto mt-8 grid max-w-[1007px] grid-cols-1 gap-[50px] sm:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <WorkCard project={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      <span className="sr-only">{filtered.length} projects shown</span>
    </section>
  );
}
