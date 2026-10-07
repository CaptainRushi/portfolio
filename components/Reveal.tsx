"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE } from "@/lib/motion";

export default function Reveal({
  children,
  index = 0,
  className,
}: {
  children: ReactNode;
  index?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: EASE, delay: index * 0.07 }}
    >
      {children}
    </motion.div>
  );
}
