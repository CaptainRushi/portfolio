export const EASE = [0.22, 1, 0.36, 1] as const;

/** Spring presets — tune cursor-follow feel here (see README). */
export const SPRINGS = {
  preview: { stiffness: 220, damping: 24 },
  bubble: { stiffness: 400, damping: 35, mass: 0.6 },
  portrait: { stiffness: 200, damping: 25 },
};

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
