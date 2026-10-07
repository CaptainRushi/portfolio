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
import Curtain from "@/components/Curtain";
import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";
import { EASE } from "@/lib/motion";

function FramedShot({ src, alt, caption, index }: { src: string; alt: string; caption?: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [30, -30]);
  return (
    <div ref={ref}>
      <Reveal index={index}>
        <div className="overflow-hidden rounded-[6px] bg-white p-3 shadow-[0_10px_30px_rgba(0,0,0,.08)]">
          <motion.div style={reduce ? undefined : { y }} className="overflow-hidden rounded-[4px]">
            <Image src={src} alt={alt} width={1200} height={750} loading="lazy" className="w-full object-cover" />
          </motion.div>
          {caption && (
            <p className="mx-auto max-w-xl px-3 py-5 text-center text-[clamp(16px,1.3vw,20px)] leading-[1.65] text-[#555]">
              {caption}
            </p>
          )}
        </div>
      </Reveal>
    </div>
  );
}

export default function WorkDetail({ project, others }: { project: Project; others: Project[] }) {
  const reduce = useReducedMotion();

  return (
    <>
      <PageTransition />
      <Curtain
        content={
          <main className="bg-[#F6F6F6]">
            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.03, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease: EASE, delay: reduce ? 0 : 0.35 }}
            >
              {/* top row */}
              <div className="flex items-center justify-between px-[clamp(20px,6.4vw,100px)] pt-8">
                <Link
                  href="/"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-black/[.04] bg-white px-4 py-2 text-[clamp(13px,1.1vw,17px)] font-medium shadow-[0_4px_14px_rgba(0,0,0,.06)]"
                >
                  ← Back
                </Link>
                <StatusPill text={profile.availability} />
              </div>

              {/* header */}
              <div className="grid gap-10 px-[clamp(20px,6.4vw,100px)] py-12 md:grid-cols-[1fr_220px]">
                <motion.div
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, ease: EASE, delay: reduce ? 0 : 0.5 }}
                >
                  <div className="flex gap-2">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-black/[.04] bg-white px-3 py-1 text-[12px] shadow-[0_4px_14px_rgba(0,0,0,.06)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h1 className="mt-4 text-[clamp(32px,3.6vw,56px)] font-medium leading-tight text-[#1A1A1A]">
                    {project.title}{" "}
                    <span className="align-baseline text-[24px] font-normal text-[#8A8A8A]">/{project.kind}</span>
                  </h1>
                  <p className="mt-4 max-w-[520px] text-[18px] leading-[1.65] text-[#555]">{project.description}</p>
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
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, ease: EASE, delay: reduce ? 0 : 0.65 }}
                  className="space-y-5 text-right max-md:text-left"
                >
                  {[
                    ["Service", project.service],
                    ["Timeline", project.timeline],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <dt className="text-[14px] uppercase tracking-wider text-[#B0B0B0]">{k}</dt>
                      <dd className="mt-1 text-[clamp(20px,1.7vw,26px)] font-semibold text-[#8A8A8A]">{v}</dd>
                    </div>
                  ))}
                  <div>
                    <dt className="text-[14px] uppercase tracking-wider text-[#B0B0B0]">Tools</dt>
                    <dd className="mt-2 flex justify-end gap-1.5 max-md:justify-start">
                      {project.tools.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          title={t}
                          className="flex h-10 w-10 items-center justify-center rounded-lg border border-black/[.04] bg-white text-[11px] font-bold text-[#1A1A1A] shadow-[0_4px_14px_rgba(0,0,0,.06)]"
                        >
                          {t.slice(0, 2)}
                        </span>
                      ))}
                    </dd>
                  </div>
                </motion.dl>
              </div>

              {/* body */}
              <div className="space-y-6 px-[clamp(20px,6.4vw,100px)] pb-4">
                <FramedShot src={project.images[0]} alt={`${project.title} overview`} caption={project.caption} index={0} />
                <FramedShot src={project.images[1] ?? project.images[0]} alt={`${project.title} detail`} index={1} />
              </div>

              {/* more work */}
              <div className="px-5 py-14 md:px-10">
                <div className="text-center">
                  <SectionTitle text="MORE WORK" align="center" />
                </div>
                <div className="mx-auto mt-8 grid max-w-[1007px] grid-cols-1 gap-[50px] sm:grid-cols-2">
                  {others.map((p, i) => (
                    <WorkCard key={p.slug} project={p} index={i} />
                  ))}
                </div>
              </div>
            </motion.div>
          </main>
        }
        footer={<CurtainFooter />}
      />
    </>
  );
}
