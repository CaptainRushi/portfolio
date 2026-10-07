# Portfolio

Single-page portfolio + `/work/[slug]` detail pages. Next.js App Router + TypeScript + Tailwind v4 + Framer Motion + Lenis.

## Run

```bash
npm install
npm run dev    # http://localhost:3000
npm run build && npm start
```

## Edit content (no components needed)

| File | What |
|---|---|
| `data/profile.ts` | Name, role, description, status, email, footer copy, asset paths |
| `data/projects.ts` | The 4 projects: titles, kinds, chips, timeline, tools, highlights |
| `data/services.ts` | The 4 service rows + descriptions + preview images |
| `data/expertise.ts` | The 4 expertise rows + blurbs + preview images |
| `data/experience.ts` | Experience rows (org/role/dates/points) + meta line |
| `data/writing.ts` | DEV posts (title/date/url); section hides when empty |
| `data/experience.ts` | Experience rows + years label |
| `data/socials.ts` | Social links (icons: github, linkedin, x, mail) |

## Swap assets

| Slot | Path | Spec |
|---|---|---|
| Portrait | `public/portrait.png` | Transparent-bg cutout, 720px wide; doubles as the color-reveal copy (base layer grayscaled in CSS) |
| Clouds | add `public/clouds.jpg` | Grayscale mid-gray photo; fixed backdrop (gradient fallback until added) |
| Projects | `public/work/*.svg` | 4 screenshots ~1200×900; referenced from `data/projects.ts` |

If portrait files are missing, an initials monogram shows instead — nothing breaks.

## Structure

`app/` (routes + `globals.css` + `template.tsx` fade) · `components/` (`Sheet`, `CloudBackground`, `Curtain`, `Pill`, `PillButton`≡Button, `StatusPill`, `SectionTitle`, `GhostWatermark`, `HeroName`, `PortraitReveal`, `WorkCard`, `CursorBubble`, `FloatingPreview`, `ServiceAccordion`, `ExperienceRow`, `CurtainFooter`, `PageTransition`, `MobileMenu`, `Hero`, `SelectedWork`, `Experience`, `Reveal`) · `data/` · `lib/` (`motion.ts`: easing + `SPRINGS`; `scroll.ts`: sheet scroll helpers).

## TODO placeholders (intentional, muted — not broken)

- Project screenshots: `images: []` for all 4 projects. Add PNGs under `public/projects/<slug>/` and list them in `data/projects.ts`.
- Project covers: generated PNG placeholders at `public/projects/*/cover.png` — replace with real screenshots.
- Mission Control: caption + 3 highlights are `TODO` lines (verify the $0/month claim before keeping it).
- Trueframe: accuracy-numbers `TODO` + missing repo link (`liveUrl` unset, so no Live Preview button renders).
- Optional extras (APES OS, Trace Dev): no detail pages until details are added.
- Portrait: live at `public/portrait.png`.

Note: the `portfolio-content-prompt.md` "verify" list wasn't supplied, so QA was done against section 8 of the build prompt instead: numbers match exactly (170+ commits, 4 tiers, 3 workflows, Dec 2025, Oct 2025, Aug 2025, May 2025, Jun 2026), no phone number, no revenue/customer claims, all external links open in a new tab with `rel="noopener noreferrer"`.

## Tune springs

`lib/motion.ts` → `SPRINGS`: `preview` (floating images, default `{220, 24}`), `bubble` (card ↗), `portrait` (legacy). Portrait color-reveal uses rAF lerp `0.15`/frame in `PortraitReveal.tsx`; mask radius lives in `globals.css` (`.portrait-color`, currently `60px`).

## Notes

- Cursor effects (color reveal, card ↗, tilted previews) are disabled on touch devices and under `prefers-reduced-motion`.
- Focus rings: 2px visible on all interactive elements; sticky footer never covers focused content.
- Nav counters derive from data: Work `[projects.length]`, Service `[4]`, Experience `[roles]`.
