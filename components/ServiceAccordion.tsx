"use client";
import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { services } from "@/data/services";
import SectionTitle from "./SectionTitle";
import GhostWatermark from "./GhostWatermark";
import Reveal from "./Reveal";
import { EASE } from "@/lib/motion";

export default function ServiceAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 250, damping: 24, mass: 0.7 });
  const py = useSpring(my, { stiffness: 250, damping: 24, mass: 0.7 });

  return (
    <section id="service" aria-labelledby="service-title" className="relative bg-[#F5F5F5] px-5 py-16 md:px-10 md:py-24">
      <GhostWatermark text="SERVICE" />
      <div className="relative">
        <span id="service-title">
          <SectionTitle text="SERVICE" />
        </span>
      </div>
      <div
        className="relative mx-auto mt-8 max-w-4xl"
        onMouseMove={(e) => {
          if (reduce) return;
          mx.set(e.clientX);
          my.set(e.clientY);
        }}
        onMouseLeave={() => setPreview(null)}
      >
        {services.map((s, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={s.title} index={i}>
              <div className="border-b border-[#E3E3E3]">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  onMouseEnter={() => !reduce && setPreview(s.preview)}
                  className={`flex w-full items-center justify-between gap-4 py-6 text-left transition-colors ${
                    preview === s.preview && !isOpen ? "bg-black/[.02]" : ""
                  }`}
                >
                  <span className="font-[Inter] text-[22px] uppercase text-[#1A1A1A] md:text-[34px]">
                    {s.title}
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/[.04] bg-white text-lg shadow-[0_4px_14px_rgba(0,0,0,.06)]"
                  >
                    {isOpen ? "✕" : "↗"}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <div className="mb-6 flex flex-col gap-5 rounded-2xl bg-[#2A2A2A] p-6 text-white md:flex-row md:items-center md:justify-between md:p-8">
                        <div>
                          <h3 className="font-[Inter] text-xl uppercase">{s.title}</h3>
                          {s.description.map((d) => (
                            <p key={d} className="mt-2 max-w-md text-[13px] leading-relaxed text-[#9A9A9A]">
                              {d}
                            </p>
                          ))}
                        </div>
                        <div
                          className="relative h-36 w-52 shrink-0 overflow-hidden rounded-lg shadow-[0_20px_50px_rgba(0,0,0,.4)]"
                          style={{ transform: reduce ? undefined : "rotate(6deg)" }}
                        >
                          <Image src={s.preview} alt={`${s.title} preview`} fill className="object-cover" loading="lazy" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
        {/* floating cursor preview */}
        {!reduce && preview && open === null && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none fixed left-0 top-0 z-40 hidden md:block"
            style={{ x: px, y: py }}
          >
            <div className="h-40 w-56 -translate-x-1/2 -translate-y-[110%] rotate-[-6deg] overflow-hidden rounded-lg bg-white shadow-[0_20px_50px_rgba(0,0,0,.3)]">
              <Image src={preview} alt="" width={224} height={160} className="h-full w-full object-cover" />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
