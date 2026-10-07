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
| `data/profile.ts` | Name, role, description, email, portrait paths |
| `data/projects.ts` | The 4 projects: titles, badges, tags, timeline, tools, captions |
| `data/services.ts` | The 4 service rows + descriptions + preview images |
| `data/experience.ts` | Experience rows + years label |
| `data/socials.ts` | Social links (icons: github, linkedin, x, mail) |

## Swap assets

| Slot | Path | Spec |
|---|---|---|
| Portrait (gray base) | `public/portrait.svg` → replace with `portrait.png` | Transparent-bg PNG cutout, ~660×840 |
| Portrait (color reveal) | `public/portrait-color.svg` → `portrait-color.png` | Same crop as base; shown in 60px cursor circle |
| Clouds | add `public/clouds.jpg` | Grayscale mid-gray photo; fixed backdrop (gradient fallback until added) |
| Projects | `public/work/*.svg` | 4 screenshots ~1200×900; referenced from `data/projects.ts` |

If portrait files are missing, an initials monogram shows instead — nothing breaks.

## Structure

`app/` (routes + `globals.css` + `template.tsx` fade) · `components/` (`Sheet`, `CloudBackground`, `Curtain`, `Pill`, `PillButton`≡Button, `StatusPill`, `SectionTitle`, `GhostWatermark`, `HeroName`, `PortraitReveal`, `WorkCard`, `CursorBubble`, `FloatingPreview`, `ServiceAccordion`, `ExperienceRow`, `CurtainFooter`, `PageTransition`, `MobileMenu`, `Hero`, `SelectedWork`, `Experience`, `Reveal`) · `data/` · `lib/` (`motion.ts`: easing + `SPRINGS`; `scroll.ts`: sheet scroll helpers).

## Tune springs

`lib/motion.ts` → `SPRINGS`: `preview` (floating images, default `{220, 24}`), `bubble` (card ↗), `portrait` (legacy). Portrait color-reveal uses rAF lerp `0.15`/frame in `PortraitReveal.tsx`; mask radius lives in `globals.css` (`.portrait-color`, currently `60px`).

## Notes

- Cursor effects (color reveal, card ↗, tilted previews) are disabled on touch devices and under `prefers-reduced-motion`.
- Focus rings: 2px visible on all interactive elements; sticky footer never covers focused content.
- Nav counters derive from data: Work `[projects.length]`, Service `[4]`, Experience `[roles]`.
