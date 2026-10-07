import Link from "next/link";
import type { ReactNode } from "react";
import { scrollToId } from "@/lib/scroll";

interface Props {
  href: string;
  children: ReactNode;
  variant?: "dark" | "light";
  className?: string;
  external?: boolean;
  ring?: boolean;
}

export default function PillButton({ href, children, variant = "dark", className = "", external, ring }: Props) {
  const base =
    "group inline-flex min-h-[46px] items-center gap-2 rounded-full px-5 text-[clamp(13px,1.1vw,17px)] font-medium transition-all duration-300 hover:-translate-y-px";
  const skin =
    variant === "dark"
      ? "bg-[#1A1A1A] text-white shadow-[0_6px_16px_rgba(0,0,0,.22)]"
      : "bg-white text-[#1A1A1A] border border-black/[.04] shadow-[0_4px_14px_rgba(0,0,0,.06)]";
  const ringCls = ring ? "ring-4 ring-[rgba(38,38,38,.35)]" : "";
  const inner = (
    <>
      {children}
      <span aria-hidden="true" className="inline-block text-[16px] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
    </>
  );
  const cls = `${base} ${skin} ${ringCls} ${className}`;
  if (href.startsWith("#")) {
    return (
      <button onClick={() => scrollToId(href.slice(1))} className={cls}>
        {inner}
      </button>
    );
  }
  return external ? (
    <a href={href} className={cls} target="_blank" rel="noreferrer">
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
