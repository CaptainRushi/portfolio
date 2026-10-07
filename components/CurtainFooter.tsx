import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import StatusPill from "./StatusPill";
import PillButton from "./PillButton";
import SocialIcon from "./SocialIcon";
import Reveal from "./Reveal";

/**
 * Curtain footer: rendered behind the sheet; sheet scrolls up to uncover it.
 * Keep in normal flow at page end with negative margin trick handled in page.tsx.
 */
export default function CurtainFooter() {
  return (
    <footer id="contact" className="relative overflow-hidden px-5 py-20 text-center md:py-28" aria-label="Contact">
      {/* translucent veil over clouds */}
      <div aria-hidden="true" className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />
      <div className="relative">
        <Reveal>
          <div className="flex justify-center">
            <StatusPill text={profile.availability} />
          </div>
          <h2 className="mx-auto mt-6 max-w-2xl font-[Inter] text-[32px] font-bold uppercase leading-tight text-[#1A1A1A] md:text-[44px]">
            {profile.ctaProject}
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[13px] leading-relaxed text-[#8A8A8A]">
            {profile.ctaSub[0]}
            <br />
            {profile.ctaSub[1]}
          </p>
          <div className="mt-6">
            <PillButton href={`mailto:${profile.email}`}>Contact Me</PillButton>
          </div>
        </Reveal>
        <Reveal index={1}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#1A1A1A] px-4 py-2 text-[12px] font-medium text-white shadow-[0_10px_24px_rgba(0,0,0,.25)]">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#8A8A8A] font-[Poppins] text-[10px] font-bold">
                {profile.firstName[0]}
              </span>
              {profile.firstName} {profile.lastName}
            </span>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-black/[.04] bg-white px-4 py-2 text-[12px] font-medium text-[#1A1A1A] shadow-[0_4px_14px_rgba(0,0,0,.06)] transition-transform hover:-translate-y-0.5"
              >
                <SocialIcon icon={s.icon} />
                {s.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
