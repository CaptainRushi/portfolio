export const EASE = [0.22, 1, 0.36, 1] as const;

export const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay: i * 0.07 },
  }),
};

export const isTouchDevice = () =>
  typeof window !== "undefined" &&
  (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window);

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
