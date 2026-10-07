"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { experience, yearsOfExperience } from "@/data/experience";
import SectionTitle from "./SectionTitle";
import GhostWatermark from "./GhostWatermark";
import Reveal from "./Reveal";

export function ExperienceRow({ e, index }: { e: (typeof experience)[number]; index: number }) {
  return (
    <Reveal index={index}>
      <div className="flex items-baseline justify-between gap-4 border-b border-[#3A3A3A] py-6">
        <div>
          <p className="text-[17px] font-medium text-white">{e.company}</p>
          <p className="mt-1 text-[13px] text-[#9A9A9A]">{e.role}</p>
        </div>
        <p className="shrink-0 text-[13px] text-[#9A9A9A]">{e.dates}</p>
      </div>
    </Reveal>
  );
}

export default function Experience() {
  const [preview, setPreview] = useState<string | null>(null);
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 250, damping: 24, mass: 0.7 });
  const py = useSpring(my, { stiffness: 250, damping: 24, mass: 0.7 });

  return (
    <section
      id="experience"
      aria-labelledby="exp-title"
      className="relative rounded-t-[24px] bg-[#262626] px-5 py-16 md:rounded-t-[32px] md:px-10 md:py-24"
      onMouseMove={(e) => {
        if (reduce) return;
        mx.set(e.clientX);
        my.set(e.clientY);
      }}
      onMouseLeave={() => setPreview(null)}
    >
      <GhostWatermark text="EXPERIENCE" dark />
      <div className="relative flex flex-wrap items-baseline justify-between gap-3">
        <span id="exp-title">
          <SectionTitle text="EXPERIENCE" dark />
        </span>
        <p className="text-[13px] text-[#9A9A9A]">{yearsOfExperience}</p>
      </div>
      <div className="relative mx-auto mt-6 max-w-4xl">
        {experience.map((e, i) => (
          <div key={e.company} onMouseEnter={() => !reduce && setPreview(e.preview)} onMouseLeave={() => setPreview(null)}>
            <ExperienceRow e={e} index={i} />
          </div>
        ))}
      </div>
      {!reduce && preview && (
        <motion.div aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-40 hidden md:block" style={{ x: px, y: py }}>
          <div className="h-40 w-56 -translate-x-1/2 -translate-y-[110%] rotate-[6deg] overflow-hidden rounded-lg bg-white shadow-[0_20px_50px_rgba(0,0,0,.5)]">
            <Image src={preview} alt="" width={224} height={160} className="h-full w-full object-cover" />
          </div>
        </motion.div>
      )}
    </section>
  );
}
