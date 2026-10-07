"use client";
import { useEffect, useRef, useState } from "react";

/** Curtain reveal: content overlaps the sticky footer by its measured height. */
export default function Curtain({ content, footer }: { content: React.ReactNode; footer: React.ReactNode }) {
  const footRef = useRef<HTMLDivElement>(null);
  const [h, setH] = useState(0);

  useEffect(() => {
    const el = footRef.current;
    if (!el) return;
    const measure = () => setH(el.offsetHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <>
      <div
        className="relative z-10 rounded-b-[8px] shadow-[0_30px_60px_rgba(0,0,0,.28)]"
        style={h ? { marginBottom: -h } : undefined}
      >
        {content}
      </div>
      <div ref={footRef} className="sticky bottom-0 z-0">
        {footer}
      </div>
    </>
  );
}
