"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import CursorFollower from "./CursorFollower";

export default function WorkCard({ project, index = 0 }: { project: Project; index?: number }) {
  const [hover, setHover] = useState(false);
  return (
    <>
      <Link
        href={`/work/${project.slug}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="group block transition-transform duration-300 hover:-translate-y-1"
        aria-label={`${project.title} — ${project.type}`}
      >
        <div className="overflow-hidden rounded-xl bg-white shadow-[0_10px_30px_rgba(0,0,0,.08)]">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              loading={index < 2 ? "eager" : "lazy"}
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#1A1A1A] shadow">
              {project.type}
            </span>
          </div>
          <div className="p-5">
            <h3 className="text-[17px] font-medium leading-snug text-[#8A8A8A] transition-colors group-hover:text-[#1A1A1A]">
              {project.title}
            </h3>
            <div className="mt-3 flex gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-black/[.04] bg-white px-3 py-1 text-[11px] text-[#1A1A1A] shadow-[0_4px_14px_rgba(0,0,0,.06)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
      <CursorFollower visible={hover}>
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-lg text-[#1A1A1A] shadow-[0_10px_24px_rgba(0,0,0,.25)]">
          ↗
        </span>
      </CursorFollower>
    </>
  );
}
