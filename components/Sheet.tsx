"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { scrollContainerRef, setLenis } from "@/lib/scroll";

/**
 * Fixed window frame. Content scrolls in the inner wrapper (Lenis-bound);
 * the cloud background never moves.
 */
export default function Sheet({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [enabled] = useState(true);

  useEffect(() => {
    const wrap = scrollContainerRef.current;
    if (!wrap || !enabled) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({
      wrapper: wrap,
      content: wrap.firstElementChild as HTMLElement,
      lerp: 0.1,
      smoothWheel: true,
    });
    setLenis(lenis);
    let raf = 0;
    const loop = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      setLenis(null);
    };
  }, [enabled]);

  // reset inner scroll on route change
  useEffect(() => {
    scrollContainerRef.current?.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname ]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-[9vh_8.1vw] overflow-hidden rounded-[8px] shadow-[0_20px_60px_rgba(0,0,0,.08)] max-lg:inset-[14px]"
    >
      <div ref={scrollContainerRef} className="sheet-scroll h-full overflow-y-auto">
        <div>{children}</div>
      </div>
    </motion.div>
  );
}
