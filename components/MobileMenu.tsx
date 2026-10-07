"use client";
import { AnimatePresence, motion } from "framer-motion";
import { scrollToId } from "@/lib/scroll";
import { EASE } from "@/lib/motion";

const links = [
  { label: "Work", id: "work" },
  { label: "Service", id: "service" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.nav
          aria-label="Mobile"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="absolute inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-[#F6F6F6] lg:hidden"
        >
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-black/[.04] bg-white text-xl shadow-[0_4px_14px_rgba(0,0,0,.06)]"
          >
            ✕
          </button>
          {links.map((l, i) => (
            <motion.button
              key={l.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 + i * 0.06, duration: 0.4, ease: EASE }}
              onClick={() => {
                onClose();
                setTimeout(() => scrollToId(l.id), 50);
              }}
              className="font-[Inter] text-3xl uppercase text-[#1A1A1A]"
            >
              {l.label}
            </motion.button>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
