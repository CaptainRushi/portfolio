"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/projects";
import CursorBubble from "./CursorBubble";
import { EASE } from "@/lib/motion";

export default function WorkCard({ project, index = 0 }: { project: Project; index?: number }) {
  const [hover, setHover] = useState(false);
  const reduce = useReducedMotion();
  return (
    <>
      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: EASE, delay: index * 0.08 }}
      >
        <Link
          href={`/work/${project.slug}`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="group block rounded-[6px] bg-[#F6F6F6] p-[6px] shadow-[0_10px_30px_rgba(0,0,0,.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(0,0,0,.12)]"
          aria-label={`${project.cardTitle} — ${project.kind}`}
        >
          <div className="relative aspect-[7/5] overflow-hidden rounded-[4px]">
            <Image
              src={project.cover}
              alt={`${project.cardTitle} preview`}
              fill
              loading={index < 2 ? "eager" : "lazy"}
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <span className="absolute left-3 top-3 inline-flex h-[28px] items-center rounded-full bg-white px-3 text-[12px] font-semibold uppercase tracking-[0.02em] text-[#1A1A1A] shadow">
              {project.kind}
            </span>
          </div>
          <h3 className="px-[10px] pt-[16px] text-[25px] font-medium leading-[1.4] text-[#1A1A1A]">
            {project.cardTitle}
          </h3>
          <div className="flex gap-2 px-[10px] pb-[10px] pt-[14px]">
            {project.chips.map((t) => (
              <span
                key={t}
                className="rounded-full border border-black/[.04] bg-white px-3 py-1 text-[12px] text-[#1A1A1A] shadow-[0_4px_14px_rgba(0,0,0,.06)]"
              >
                {t}
              </span>
            ))}
          </div>
        </Link>
      </motion.div>
      {!reduce && <CursorBubble visible={hover} />}
    </>
  );
}
