"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/** Spring-smoothed cursor follower. Renders nothing on touch / reduced-motion. */
export default function CursorFollower({
  children,
  visible,
}: {
  children: React.ReactNode;
  visible: boolean;
}) {
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
      animate={{ scale: visible ? 1 : 0.5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="-translate-x-1/2 -translate-y-1/2">{children}</div>
    </motion.div>
  );
}
