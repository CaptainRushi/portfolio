"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, type ProjectType } from "@/data/projects";
import SectionTitle from "./SectionTitle";
import GhostWatermark from "./GhostWatermark";
import WorkCard from "./WorkCard";
import PillButton from "./PillButton";
import Reveal from "./Reveal";
import { EASE } from "@/lib/motion";

const tabs: ("All" | ProjectType)[] = ["All", "Real Project", "Exploration"];

export default function SelectedWork({ limit = 4 }: { limit?: number }) {
  const [tab, setTab] = useState<(typeof tabs)[number]>("All");
  const filtered = projects.filter((p) => tab === "All" || p.type === tab).slice(0, limit);

  return (
    <section id="work" aria-labelledby="work-title" className="relative bg-[#F5F5F5] px-5 py-16 md:px-10 md:py-24">
      <GhostWatermark text="PORTFOLIO" />
      <div className="relative text-center">
        <span id="work-title">
          <SectionTitle text="SELECTED WORK" />
        </span>
      </div>
      <div className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-between gap-3">
        <div role="tablist" aria-label="Filter projects" className="flex gap-4 text-[13px]">
          {tabs.map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={tab === t}
              onClick={() => setTab(t)}
              className={`min-h-[44px] transition-opacity hover:opacity-70 ${
                tab === t ? "font-bold text-[#1A1A1A]" : "font-normal text-[#8A8A8A]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <PillButton href="#work" variant="light">
          View All Work
        </PillButton>
      </div>
      <motion.div layout className="mx-auto mt-8 grid max-w-[850px] grid-cols-1 gap-[22px] sm:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5, ease: EASE, delay: i * 0.06 }}
            >
              <Reveal index={i}>
                <WorkCard project={p} index={i} />
              </Reveal>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
