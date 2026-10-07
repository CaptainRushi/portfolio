import type { ReactNode } from "react";

/** White pill — base for status, social, chip, badge. */
export default function Pill({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex min-h-[38px] items-center gap-2 rounded-full border border-black/[.04] bg-white px-4 text-[clamp(13px,1.1vw,17px)] font-medium text-[#1A1A1A] shadow-[0_4px_14px_rgba(0,0,0,.06)] ${className}`}
    >
      {children}
    </span>
  );
}
