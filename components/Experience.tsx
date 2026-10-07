"use client";
import { motion, useReducedMotion } from "framer-motion";
import { experience, yearsOfExperience } from "@/data/experience";
import SectionTitle from "./SectionTitle";
import GhostWatermark from "./GhostWatermark";
import FloatingPreview, { useCursorPreview } from "./FloatingPreview";
import { EASE } from "@/lib/motion";

export function ExperienceRow({ e, index }: { e: (typeof experience)[number]; index: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: reduce ? 0 : 0.45, y: reduce ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: EASE, delay: index * 0.07 }}
      className="flex items-baseline justify-between gap-4 border-b border-[#3A3A3A] py-8 lg:py-9"
    >
      <div>
        <p className="text-[clamp(19px,1.6vw,25px)] font-medium leading-[1.5] text-white">{e.company}</p>
        <p className="mt-1 text-[clamp(16px,1.6vw,25px)] font-normal leading-[1.5] text-[#8F8F8F]">{e.role}</p>
      </div>
      <p className="shrink-0 pr-[14px] text-right text-[clamp(15px,1.4vw,22px)] text-[#9A9A9A]">{e.dates}</p>
    </motion.div>
  );
}

export default function Experience() {
  const { preview, setPreview, onMove, px, py, tilt, reduce } = useCursorPreview();

  return (
    <section
      id="experience"
      aria-labelledby="exp-title"
      className="relative rounded-b-[8px] rounded-t-[8px] bg-[#262626] px-5 py-16 md:px-10 md:py-24"
      onMouseMove={onMove}
    >
      <div className="relative mx-auto max-w-[1000px]">
        <GhostWatermark text="EXPERIENCE" dark />
        <div className="relative flex flex-wrap items-baseline justify-between gap-3">
          <span id="exp-title">
            <SectionTitle text="EXPERIENCE" dark />
          </span>
          <p className="text-[clamp(15px,1.3vw,20px)] text-[#9A9A9A]">{yearsOfExperience}</p>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-[1000px]">
        {experience.map((e, i) => (
          <div
            key={e.company}
            onMouseEnter={() => !reduce && setPreview(e.preview)}
            onMouseLeave={() => !reduce && setPreview(null)}
          >
            <ExperienceRow e={e} index={i} />
          </div>
        ))}
      </div>
      {!reduce && preview && <FloatingPreview src={preview} x={px} y={py} tilt={tilt} visible />}
    </section>
  );
}
