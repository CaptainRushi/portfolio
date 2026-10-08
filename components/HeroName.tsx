"use client";
import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";

/** Giant hero name: first word outlined, last word solid. Letter-staggered reveal. */
export default function HeroName({ first, last }: { first: string; last: string }) {
  const reduce = useReducedMotion();
  const word = (text: string, outline: boolean, base: number) => (
    <span
      className={outline ? "text-outline font-[Poppins]" : "font-[Poppins] text-[#262626] [-webkit-text-stroke:1px_#3A3A3A]"}
    >
      {text.split("").map((c, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: base + i * 0.03 }}
        >
          {c}
        </motion.span>
      ))}
    </span>
  );
  return (
    <h1
      aria-label={`${first} ${last}`}
      className="text-center font-extrabold uppercase leading-[0.95] tracking-[0.04em] text-[clamp(48px,11.5vw,180px)]"
    >
      <span className="block">{word(first, true, 0.2)}</span>
      <span className="block">{word(last, false, 0.35)}</span>
    </h1>
  );
}
