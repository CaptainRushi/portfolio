"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/** White 54px cursor bubble with ↗. Hidden on touch / reduced-motion. */
export default function CursorBubble({ visible }: { visible: boolean }) {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 400, damping: 35, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 400, damping: 35, mass: 0.6 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-50 hidden md:block"
      style={{ x: sx, y: sy, opacity: visible ? 1 : 0 }}
      animate={{ scale: visible ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <div className="flex h-[54px] w-[54px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xl text-[#1A1A1A] shadow-[0_10px_24px_rgba(0,0,0,.25)]">
        ↗
      </div>
    </motion.div>
  );
}
