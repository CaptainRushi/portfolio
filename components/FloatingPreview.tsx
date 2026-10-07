"use client";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Tilted floating preview that follows cursor; tilt reacts to horizontal velocity. */
export function useFloatingPreview(src: string | null) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 25, mass: 0.7 });
  const sy = useSpring(y, { stiffness: 250, damping: 25, mass: 0.7 });
  const rotate = useTransform(sx, (v) => Math.max(-8, Math.min(8, v * 0.02 - 4)));
  return { src, x, y, sx, sy, rotate };
}

export default function FloatingPreview({
  src,
  x,
  y,
  rotate,
  visible,
}: {
  src: string;
  x: ReturnType<typeof useSpring<number>>;
  y: ReturnType<typeof useSpring<number>>;
  rotate: ReturnType<typeof useTransform<number, number>>;
  visible: boolean;
}) {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-40 hidden md:block"
      style={{ x, y, rotate, opacity: visible ? 1 : 0, transition: "opacity .25s" }}
    >
      <div className="h-40 w-56 -translate-x-1/2 -translate-y-[110%] overflow-hidden rounded-lg bg-white shadow-[0_20px_50px_rgba(0,0,0,.3)]">
        <Image src={src} alt="" width={224} height={160} className="h-full w-full object-cover" />
      </div>
    </motion.div>
  );
}

export { EASE };
