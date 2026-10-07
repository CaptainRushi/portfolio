"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";
import { EASE } from "@/lib/motion";

/**
 * Grayscale portrait with a cursor-following color reveal.
 * Mask position lerps 0.15/frame toward the cursor via rAF.
 */
export default function PortraitReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const colorRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 50, y: 50, inside: false });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    let raf = 0;
    const cur = { x: 50, y: 50, a: 0 };
    const tick = () => {
      cur.x += (target.current.x - cur.x) * 0.15;
      cur.y += (target.current.y - cur.y) * 0.15;
      cur.a += ((target.current.inside ? 1 : 0) - cur.a) * 0.15;
      const el = colorRef.current;
      if (el) {
        el.style.setProperty("--mx", `${cur.x}%`);
        el.style.setProperty("--my", `${cur.y}%`);
        el.style.opacity = String(cur.a);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduce]);

  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 120 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: EASE, delay: 0.55 }}
    >
      <div
        ref={ref}
        className="relative mx-auto h-[300px] w-[240px] md:h-[420px] md:w-[330px]"
        onMouseMove={(e) => {
          if (reduce || !ref.current) return;
          const r = ref.current.getBoundingClientRect();
          target.current.x = ((e.clientX - r.left) / r.width) * 100;
          target.current.y = ((e.clientY - r.top) / r.height) * 100;
          target.current.inside = true;
        }}
        onMouseLeave={() => (target.current.inside = false)}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center rounded-full bg-[#E3E3E3] font-[Poppins] text-6xl font-extrabold text-[#8A8A8A]"
        >
          {profile.firstName[0]}
          {profile.lastName[0]}
        </div>
        <Image
          src={profile.portrait}
          alt={`Portrait of ${profile.firstName} ${profile.lastName}`}
          fill
          priority
          className="object-contain grayscale"
          onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
        />
        {!reduce && (
          <div ref={colorRef} className="portrait-color absolute inset-0 opacity-0" aria-hidden="true">
            <Image
              src={profile.portraitColor}
              alt=""
              fill
              className="object-contain"
              onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}
