"use client";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { scrollContainerRef } from "@/lib/scroll";

/** Ghost word behind a section title; fades in and drifts ~30px with scroll. */
export default function GhostWatermark({
  text,
  dark = false,
  align = "left",
}: {
  text: string;
  dark?: boolean;
  align?: "left" | "center";
}) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll({ container: scrollContainerRef as never });
  const y = useTransform(scrollY, [0, 2000], [0, 30]);

  return (
    <motion.span
      aria-hidden="true"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1 }}
      style={reduce ? undefined : { y }}
      className={`pointer-events-none absolute -top-[25px] select-none whitespace-nowrap font-[Poppins] text-[clamp(72px,9vw,140px)] font-bold uppercase leading-none tracking-[0.12em] ${
        dark ? "text-white/[.045]" : "text-black/[.04]"
      } ${align === "center" ? "left-1/2 -translate-x-1/2" : "left-0"}`}
    >
      {text}
    </motion.span>
  );
}
