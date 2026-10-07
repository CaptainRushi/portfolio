"use client";
import type Lenis from "lenis";
import { createRef, type RefObject } from "react";

/** Scroll container of the fixed sheet — lets distant components hook scroll. */
export const scrollContainerRef: RefObject<HTMLDivElement | null> = createRef<HTMLDivElement | null>();

let lenis: Lenis | null = null;

export function setLenis(instance: Lenis | null) {
  lenis = instance;
}

/** Smooth-scroll to a section inside the sheet (Lenis if active, native fallback). */
export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenis) lenis.scrollTo(el as HTMLElement);
  else el.scrollIntoView({ behavior: "smooth" });
}
