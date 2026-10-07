import Link from "next/link";
import type { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
  variant?: "dark" | "light";
  className?: string;
  external?: boolean;
}

export default function PillButton({ href, children, variant = "dark", className = "", external }: Props) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-semibold tracking-wide transition-transform duration-300 hover:-translate-y-0.5";
  const skin =
    variant === "dark"
      ? "bg-[#1A1A1A] text-white shadow-[0_10px_24px_rgba(0,0,0,.25)]"
      : "bg-white text-[#1A1A1A] border border-black/[.04] shadow-[0_4px_14px_rgba(0,0,0,.06)]";
  const inner = (
    <>
      {children}
      <span aria-hidden="true">↗</span>
    </>
  );
  const cls = `${base} ${skin} ${className}`;
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
