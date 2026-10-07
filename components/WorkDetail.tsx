"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { profile } from "@/data/profile";
import type { Project } from "@/data/projects";
import StatusPill from "@/components/StatusPill";
import PillButton from "@/components/PillButton";
import SectionTitle from "@/components/SectionTitle";
import WorkCard from "@/components/WorkCard";
import CurtainFooter from "@/components/CurtainFooter";
import Reveal from "@/components/Reveal";
import { EASE } from "@/lib/motion";

function FramedShot({ src, alt, caption, index }: { src: string; alt: string; caption?: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [30, -30]);
  return (
    <Reveal index={index}>
      <div ref={ref} className="overflow-hidden rounded-xl bg-white p-3 shadow-[0_10px_30px_rgba(0,0,0,.08)]">
        <motion.div style={{ y }} className="overflow-hidden rounded-lg">
          <Image src={src} alt={alt} width={1200} height={750} loading="lazy" className="w-full object-cover" />
        </motion.div>
        {caption && (
          <p className="mx-auto max-w-xl px-3 py-5 text-center text-[13px] leading-relaxed text-[#8A8A8A]">{caption}</p>
        )}
      </div>
    </Reveal>
  );
}

export default function WorkDetail({ project, others }: { project: Project; others: Project[] }) {
  const reduce = useReducedMotion();

  return (
    <div className="relative">
      {/* enter streaks */}
      {!reduce && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-50 bg-gradient-to-br from-transparent via-white/60 to-transparent"
          initial={{ x: "-100%", opacity: 1 }}
          animate={{ x: "100%", opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      )}
      <main className="relative z-10 mx-auto max-w-[1240px] overflow-hidden rounded-lg bg-[#F5F5F5] shadow-[0_30px_80px_rgba(0,0,0,.35)] md:mx-[8%] md:mt-[95px] max-md:m-3 max-md:mt-3">
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          {/* top row */}
          <div className="flex items-center justify-between px-5 pt-6 md:px-10 md:pt-8">
            <Link
              href="/#work"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-black/[.04] bg-white px-4 py-2 text-[12px] font-medium shadow-[0_4px_14px_rgba(0,0,0,.06)]"
            >
              ← Back
            </Link>
            <StatusPill text={profile.availability} />
          </div>

          {/* header */}
          <div className="grid gap-10 px-5 py-10 md:grid-cols-[1fr_220px] md:px-10 md:py-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
            >
              <div className="flex gap-2">
                {[project.tags[0], project.tags[1]].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-black/[.04] bg-white px-3 py-1 text-[11px] shadow-[0_4px_14px_rgba(0,0,0,.06)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h1 className="mt-4 text-[28px] font-medium leading-tight text-[#1A1A1A] md:text-[40px]">
                {project.title} <span className="text-[16px] text-[#8A8A8A] md:text-[20px]">/{project.type}</span>
              </h1>
              {project.description.map((d) => (
                <p key={d} className="mt-3 max-w-xl text-[13px] leading-relaxed text-[#8A8A8A]">
                  {d}
                </p>
              ))}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.liveUrl && (
                  <PillButton href={project.liveUrl} external>
                    Live Preview
                  </PillButton>
                )}
                <PillButton href={`mailto:${profile.email}`} variant="light">
                  Contact Me
                </PillButton>
              </div>
            </motion.div>
            <motion.dl
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.25 }}
              className="space-y-5 text-right max-md:text-left"
            >
              {[
                ["Service", project.service],
                ["Timeline", project.timeline],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-[11px] uppercase tracking-wider text-[#8A8A8A]">{k}</dt>
                  <dd className="mt-1 text-[14px] font-medium text-[#1A1A1A]">{v}</dd>
                </div>
              ))}
              <div>
                <dt className="text-[11px] uppercase tracking-wider text-[#8A8A8A]">Tools</dt>
                <dd className="mt-2 flex justify-end gap-1.5 max-md:justify-start">
                  {project.tools.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      title={t}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-black/[.04] bg-white text-[11px] font-bold text-[#1A1A1A] shadow-[0_4px_14px_rgba(0,0,0,.06)]"
                    >
                      {t.slice(0, 2)}
                    </span>
                  ))}
                </dd>
              </div>
            </motion.dl>
          </div>

          {/* body */}
          <div className="space-y-6 px-5 pb-4 md:px-10">
            <FramedShot src={project.image} alt={`${project.title} overview`} caption={project.caption} index={0} />
            <FramedShot src={project.image} alt={`${project.title} detail`} caption={project.description[1]} index={1} />
          </div>

          {/* more work */}
          <div className="px-5 py-14 md:px-10">
            <div className="text-center">
              <SectionTitle text="MORE WORK" />
            </div>
            <div className="mx-auto mt-8 grid max-w-[850px] grid-cols-1 gap-[22px] sm:grid-cols-2">
              {others.map((p, i) => (
                <Reveal key={p.slug} index={i}>
                  <WorkCard project={p} index={i} />
                </Reveal>
              ))}
            </div>
          </div>
          <div aria-hidden="true" className="relative h-6 bg-[#F5F5F5] shadow-[0_18px_40px_rgba(0,0,0,.25)]" />
        </motion.div>
      </main>
      <div className="sticky bottom-0 z-0 -mt-6">
        <CurtainFooter />
      </div>
    </div>
  );
}
