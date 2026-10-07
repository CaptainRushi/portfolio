"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useReducedMotion, useMotionTemplate } from "framer-motion";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { experience, yearsOfExperience } from "@/data/experience";
import StatusPill from "./StatusPill";
import PillButton from "./PillButton";
import SocialIcon from "./SocialIcon";
import { EASE } from "@/lib/motion";

function Letters({ text, outline, delay }: { text: string; outline?: boolean; delay: number }) {
  const reduce = useReducedMotion();
  return (
    <span className={outline ? "text-outline font-[Poppins]" : "text-[#262626] font-[Poppins]"}>
      {text.split("").map((c, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: delay + i * 0.035 }}
        >
          {c}
        </motion.span>
      ))}
    </span>
  );
}

function Portrait() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const sx = useSpring(mx, { stiffness: 200, damping: 25 });
  const sy = useSpring(my, { stiffness: 200, damping: 25 });
  const reduce = useReducedMotion();
  const mask = useMotionTemplate`radial-gradient(circle 70px at ${sx}% ${sy}%, black 55%, transparent 75%)`;

  return (
    <div
      ref={ref}
      className="relative mx-auto h-[300px] w-[240px] md:h-[420px] md:w-[330px]"
      onMouseMove={(e) => {
        if (reduce || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        mx.set(((e.clientX - r.left) / r.width) * 100);
        my.set(((e.clientY - r.top) / r.height) * 100);
        setActive(true);
      }}
      onMouseLeave={() => setActive(false)}
    >
      {/* grayscale base */}
      <Image
        src={profile.portrait}
        alt={`Portrait of ${profile.firstName} ${profile.lastName}`}
        fill
        priority
        className="object-contain grayscale"
        onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
      />
      {/* monogram fallback behind image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 flex items-center justify-center rounded-full bg-[#E3E3E3] font-[Poppins] text-6xl font-extrabold text-[#8A8A8A]"
      >
        {profile.firstName[0]}
        {profile.lastName[0]}
      </div>
      {/* color copy masked to cursor */}
      {!reduce && active && (
        <motion.div
          className="absolute inset-0"
          style={{
            WebkitMaskImage: mask,
            maskImage: mask,
          } as never}
        >
          <Image
            src={profile.portraitColor}
            alt=""
            aria-hidden="true"
            fill
            className="object-contain"
            onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
          />
        </motion.div>
      )}
    </div>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <header className="relative overflow-hidden bg-white px-5 pb-0 pt-6 md:px-10 md:pt-8">
      {/* top bar */}
      <motion.nav
        aria-label="Primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between gap-3"
      >
        <StatusPill text={profile.availability} />
        <div className="hidden items-center gap-5 text-[13px] font-medium text-[#1A1A1A] lg:flex">
          <Link href="#work" className="hover:opacity-60">
            Work <span className="text-[#8A8A8A]">[{projects.length}]</span>
          </Link>
          <Link href="#service" className="hover:opacity-60">
            Service <span className="text-[#8A8A8A]">[{services.length}]</span>
          </Link>
          <Link href="#experience" className="hover:opacity-60">
            Experience <span className="text-[#8A8A8A]">[{experience.length}]</span>
          </Link>
          <Link href="#contact" className="hover:opacity-60">
            Contact
          </Link>
        </div>
        <PillButton href="#contact">Let&apos;s Talk</PillButton>
      </motion.nav>

      {/* giant name */}
      <h1
        aria-label={`${profile.firstName} ${profile.lastName}`}
        className="mt-8 text-center font-extrabold uppercase leading-[0.95] tracking-[0.04em] text-[11vw]"
      >
        <Letters text={profile.firstName} outline delay={0.15} />
        <br />
        <Letters text={profile.lastName} delay={0.35} />
      </h1>

      {/* portrait overlapping name bottom */}
      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.55 }}
        className="-mb-6 -mt-[4vw] md:-mt-[3vw]"
      >
        <Portrait />
      </motion.div>

      {/* bottom row */}
      <div className="relative flex flex-col gap-6 pb-8 md:flex-row md:items-end md:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.85 }}
        >
          <p className="text-[19px] font-semibold text-[#1A1A1A]">{profile.role}</p>
          <p className="mt-1 text-[13px] leading-relaxed text-[#8A8A8A]">
            {profile.description[0]}
            <br />
            {profile.description[1]}
          </p>
          <div className="mt-4">
            <PillButton href="#contact">Let&apos;s collaborate</PillButton>
          </div>
        </motion.div>
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.95 }}
          className="flex flex-row flex-wrap gap-2 md:flex-col md:items-end"
        >
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-black/[.04] bg-white px-4 py-2 text-[12px] font-medium text-[#1A1A1A] shadow-[0_4px_14px_rgba(0,0,0,.06)] transition-transform hover:-translate-y-0.5"
              >
                <SocialIcon icon={s.icon} />
                {s.label}
              </a>
            </li>
          ))}
        </motion.ul>
      </div>
      <span className="sr-only">{yearsOfExperience}</span>
    </header>
  );
}
