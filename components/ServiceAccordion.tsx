"use client";
import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { expertise } from "@/data/expertise";
import SectionTitle from "./SectionTitle";
import GhostWatermark from "./GhostWatermark";
import FloatingPreview, { useCursorPreview } from "./FloatingPreview";
import { EASE } from "@/lib/motion";

export default function ServiceAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  const { preview, setPreview, onMove, px, py, tilt, reduce } = useCursorPreview();
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="expertise"
      aria-labelledby="expertise-title"
      className="relative bg-[#F6F6F6] px-5 py-16 md:px-10 md:py-24"
      onMouseMove={onMove}
    >
      <div className="relative mx-auto max-w-[1000px]">
        <GhostWatermark text="EXPERTISE" />
        <span id="expertise-title" className="relative block">
          <SectionTitle text="EXPERTISE" />
        </span>
      </div>
      <div className="mx-auto mt-10 max-w-[1000px]">
        {expertise.map((s, i) => {
          const isOpen = open === i;
          return (
            <motion.div
              key={s.title}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -32, clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ opacity: 1, x: 0, clipPath: "inset(0 0% 0 0)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.07 }}
              className="border-b border-[#D9D9D9]"
            >
              <motion.div
                animate={{ backgroundColor: isOpen ? "#2A2A2A" : "#F6F6F6", borderRadius: isOpen ? 6 : 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="relative"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  onMouseEnter={() => !reduce && !isOpen && setPreview(s.preview)}
                  onMouseLeave={() => !reduce && setPreview(null)}
                  className={`flex min-h-[140px] w-full items-center justify-between gap-4 py-8 pr-[clamp(8px,3vw,40px)] text-left transition-colors lg:min-h-[188px] ${
                    preview === s.preview && !isOpen ? "bg-[#EFEFEF]" : ""
                  } ${isOpen ? "px-6 md:px-8" : ""}`}
                >
                  <span className="font-[Inter] text-[clamp(28px,3.8vw,60px)] uppercase leading-none tracking-[-0.01em] text-[#1A1A1A]">
                    {isOpen ? (
                      <span className="block text-white">
                        {s.title}
                        <span className="mt-3 block max-w-xl text-[17px] normal-case leading-[1.65] tracking-normal text-[#BDBDBD]">
                          {s.blurb}
                        </span>
                      </span>
                    ) : (
                      s.title
                    )}
                  </span>
                  <motion.span
                    aria-hidden="true"
                    animate={{ rotate: isOpen ? 0 : 0 }}
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[26px] transition-colors ${
                      isOpen ? "bg-transparent text-white" : "border border-black/[.04] bg-white text-[#1A1A1A] shadow-[0_4px_14px_rgba(0,0,0,.06)]"
                    }`}
                  >
                    {isOpen ? "✕" : "↗"}
                  </motion.span>
                </button>
                {/* tilted preview breaking out of the panel top */}
                <AnimatePresence>
                  {isOpen && !reduce && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, rotate: 12 }}
                      animate={{ opacity: 1, y: 0, rotate: 7 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease: EASE }}
                      className="pointer-events-none absolute -top-[50px] right-8 hidden w-[330px] md:block"
                      aria-hidden="true"
                    >
                      <div className="h-[250px] w-[330px] overflow-hidden rounded-[4px] border border-white shadow-[0_20px_50px_rgba(0,0,0,.4)]">
                        <Image src={s.preview} alt="" width={330} height={250} className="h-full w-full object-cover" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
      {!reduce && preview && open === null && (
        <FloatingPreview src={preview} x={px} y={py} tilt={tilt} visible />
      )}
    </section>
  );
}
