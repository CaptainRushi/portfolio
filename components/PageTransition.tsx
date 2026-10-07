"use client";
import { motion, useReducedMotion } from "framer-motion";

/** Diagonal light-streak overlay sweeping across on page enter (~1s). */
export default function PageTransition() {
  const reduce = useReducedMotion();
  if (reduce) return null;
  return (
    <motion.div
      aria-hidden="true"
      className="streaks pointer-events-none fixed inset-0 z-50"
      initial={{ x: "-100%", opacity: 1 }}
      animate={{ x: "100%", opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    />
  );
}
