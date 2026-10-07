"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useReducedMotion, type MotionValue } from "framer-motion";
import { SPRINGS } from "@/lib/motion";

/** Shared cursor-follow preview: 330×250, rest tilt +7°, live tilt from velocityX. */
export function useCursorPreview() {
  const [preview, setPreview] = useState<string | null>(null);
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, SPRINGS.preview);
  const py = useSpring(my, SPRINGS.preview);
  const tiltRaw = useMotionValue(7);
  const tilt = useSpring(tiltRaw, SPRINGS.preview);
  const lastX = useRef(0);

  const onMove = (e: React.MouseEvent) => {
    if (reduce) return;
    const dx = e.clientX - lastX.current;
    lastX.current = e.clientX;
    tiltRaw.set(Math.max(-12, Math.min(12, 7 + dx * 0.6)));
    mx.set(e.clientX);
    my.set(e.clientY);
  };
  return { preview, setPreview, onMove, px, py, tilt, reduce };
}

import { useRef } from "react";

export default function FloatingPreview({
  src,
  x,
  y,
  tilt,
  visible,
}: {
  src: string;
  x: MotionValue<number>;
  y: MotionValue<number>;
  tilt: MotionValue<number>;
  visible: boolean;
}) {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-40 hidden lg:block"
      style={{ x, y, rotate: tilt, opacity: visible ? 1 : 0 }}
    >
      <div className="h-[250px] w-[330px] -translate-x-1/2 -translate-y-[110%] overflow-hidden rounded-[4px] border border-white bg-white shadow-[0_20px_50px_rgba(0,0,0,.3)]">
        <Image src={src} alt="" width={330} height={250} className="h-full w-full object-cover" />
      </div>
    </motion.div>
  );
}
