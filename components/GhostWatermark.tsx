"use client";
import { motion } from "framer-motion";

export default function GhostWatermark({ text, dark = false }: { text: string; dark?: boolean }) {
  return (
    <motion.span
      aria-hidden="true"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: dark ? 0.05 : 0.04 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1 }}
      className={`pointer-events-none absolute left-1/2 top-2 -translate-x-1/2 select-none whitespace-nowrap font-[Poppins] text-[13vw] md:text-[9vw] font-extrabold uppercase leading-none ${
        dark ? "text-white" : "text-[#1A1A1A]"
      }`}
    >
      {text}
    </motion.span>
  );
}
