"use client";
import { motion, useReducedMotion } from "framer-motion";
import { writing } from "@/data/writing";
import SectionTitle from "./SectionTitle";
import GhostWatermark from "./GhostWatermark";
import { EASE } from "@/lib/motion";

/** /WRITING — light section reusing the service-row layout. Hidden when empty. */
export default function Writing() {
  const reduce = useReducedMotion();
  if (writing.length === 0) return null;

  return (
    <section id="writing" aria-labelledby="writing-title" className="relative bg-[#F6F6F6] px-5 py-16 md:px-10 md:py-24">
      <div className="relative mx-auto max-w-[1000px]">
        <GhostWatermark text="WRITING" />
        <span id="writing-title" className="relative block">
          <SectionTitle text="WRITING" />
        </span>
      </div>
      <div className="mx-auto mt-10 max-w-[1000px]">
        {writing.map((p, i) => (
          <motion.div
            key={p.href}
            initial={reduce ? { opacity: 0 } : { opacity: 0, x: -32, clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ opacity: 1, x: 0, clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE, delay: i * 0.07 }}
            className="border-b border-[#D9D9D9]"
          >
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[110px] w-full items-center justify-between gap-4 py-6 pr-[clamp(8px,3vw,40px)] transition-colors hover:bg-[#EFEFEF] lg:min-h-[140px]"
            >
              <span className="font-[Inter] text-[clamp(20px,2.4vw,38px)] uppercase leading-tight tracking-[-0.01em] text-[#1A1A1A]">
                {p.title}
              </span>
              <span className="flex shrink-0 items-center gap-4">
                <span className="text-[clamp(13px,1.1vw,17px)] text-[#8A8A8A]">{p.date}</span>
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-black/[.04] bg-white text-[26px] text-[#1A1A1A] shadow-[0_4px_14px_rgba(0,0,0,.06)]"
                >
                  ↗
                </span>
              </span>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
