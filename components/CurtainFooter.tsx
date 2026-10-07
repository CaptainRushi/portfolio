import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import StatusPill from "./StatusPill";
import PillButton from "./PillButton";
import SocialIcon from "./SocialIcon";
import Reveal from "./Reveal";

/** Curtain footer: cloud veil inside the sheet, uncovered as content lifts. */
export default function CurtainFooter() {
  return (
    <footer id="contact" className="relative overflow-hidden px-5 py-20 text-center md:py-24" aria-label="Contact">
      <div aria-hidden="true" className="absolute inset-0 bg-[rgba(255,255,255,.92)]" />
      {/* soft shadow cast by the section above */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[108px] bg-gradient-to-b from-[rgba(0,0,0,.12)] to-transparent" />
      <div className="relative">
        <Reveal>
          <div className="flex justify-center">
            <StatusPill text={profile.availability} />
          </div>
          <h2 className="mx-auto mt-6 max-w-3xl font-[Manrope] text-[clamp(32px,3.7vw,58px)] font-extrabold uppercase leading-tight tracking-[-0.02em] text-[#2A2A2A]">
            {profile.ctaProject}
          </h2>
          <p className="mx-auto mt-4 max-w-[810px] text-[clamp(16px,1.3vw,20px)] leading-[1.7] text-[#6B6B6B]">
            {profile.ctaSub[0]}
            <br />
            {profile.ctaSub[1]}
          </p>
          <div className="mt-8">
            <PillButton href={`mailto:${profile.email}`} ring>
              Contact Me
            </PillButton>
          </div>
        </Reveal>
        <Reveal index={1}>
          <div className="mx-auto mt-16 flex max-w-[940px] flex-wrap items-center justify-around gap-3 pb-10">
            <span className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#2A2A2A] px-4 py-2 text-[clamp(13px,1.1vw,17px)] font-medium text-white shadow-[0_10px_24px_rgba(0,0,0,.25)]">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#8A8A8A] font-[Poppins] text-[11px] font-bold">
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
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-black/[.04] bg-white px-4 py-2 text-[clamp(13px,1.1vw,17px)] font-medium text-[#1A1A1A] shadow-[0_4px_14px_rgba(0,0,0,.06)] transition-transform hover:-translate-y-0.5"
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
