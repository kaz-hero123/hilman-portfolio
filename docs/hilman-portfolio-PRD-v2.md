# HILMAN PORTFOLIO — ENGINEERING SPEC v2
**Author:** Hilman Nidal Hamzi | **Stack:** Next.js 14 App Router · TypeScript strict · Tailwind CSS · Framer Motion
**Audience:** Technical hiring managers evaluating backend/full-stack internship candidates

---

## ⛔ SECTION 0 — FORBIDDEN PATTERNS (READ BEFORE WRITING ANY CODE)

These were all present in the broken v1 build. If any of these appear in the output, the build is wrong.

| # | Forbidden | Why |
|---|---|---|
| 1 | Infinite scrolling marquee/ticker of skill words | Template default. Brief explicitly bans this. |
| 2 | Stats counter (X Projects, X Years, X Industries) | Vanity widget. Brief explicitly bans this. |
| 3 | Blinking cursor `›available for internship■` | Already on existing site. Cannot be the "signature element." |
| 4 | Rounded service/project cards with icon + "Learn more" | Olivia Smith template pattern. |
| 5 | Floating circular "Hire Me" badge | Template default. |
| 6 | Cursive/script signature font | Template default. |
| 7 | Single flat background color for whole page | Core layout requirement is alternating dark/light bands per section. |
| 8 | Project sections as shallow card (title + 1-line problem + 1-line outcome + tag row) | Existing v1 did exactly this. Case studies need full pages. |
| 9 | Third accent color of any kind | Palette is one hue family, two lightness values. No purple, teal, red, etc. |
| 10 | Numbered project markers (01, 02, 03) on Selected Work index | Projects are parallel, not sequential. No numbering. |
| 11 | Jelajah Madura or UiVault presented as finished case studies | Both in progress. They belong in "Now" section only. |
| 12 | Invented metrics, testimonials, or quotes not in this spec | Never fabricate a number or outcome. |
| 13 | TODO placeholders in shipped output | Fill with [PLACEHOLDER: description] if content is missing, never ship raw TODOs. |
| 14 | `<div onClick>` instead of `<button>` | Accessibility violation. |
| 15 | Ps/Ai/Id software icon badges | Graphic designer signifier. Hilman is a backend engineer. |
| 16 | Parallax, scroll-jacking, per-letter stagger animations | Brief explicitly bans all three. |
| 17 | Three equal-weight icon buttons in contact (GitHub / LinkedIn / Email as peers) | Email is primary. GitHub/LinkedIn are secondary text links. |

---

## 1. DESIGN TOKENS — NON-NEGOTIABLE, USE EXACTLY THESE VALUES

These have been contrast-verified. Do not substitute. Do not eyeball new grays.

### Tailwind Config Extension

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'band-dark':     '#10231B',   // dark section bg — deep pine, not neutral black
        'band-light':    '#EEF0EA',   // light section bg — sage-tinted paper, NOT cream

        // Text on dark band
        'text-primary-dark':  '#F2EFE6',  // 14.29:1 on band-dark — AAA
        'text-muted-dark':    '#9AA89E',  // 6.63:1 on band-dark — AA
        'accent-dark':        '#B8862E',  // 5.08:1 on band-dark — AA links/CTA
        'border-dark':        '#6B7569',  // 3.42:1 on band-dark — interactive borders only

        // Text on light band
        'text-primary-light': '#10231B',  // 14.31:1 on band-light — AAA (same value as band-dark)
        'text-muted-light':   '#5B6258',  // 5.49:1 on band-light — AA
        'accent-light':       '#8A5E1C',  // 4.94:1 on band-light — AA links/CTA (darker shade — do NOT reuse accent-dark here)
        'border-light':       '#727A6A',  // 3.88:1 on band-light — interactive borders only
      },
      fontFamily: {
        mono:  ['IBM Plex Mono', 'monospace'],
        sans:  ['IBM Plex Sans', 'sans-serif'],
        serif: ['IBM Plex Serif', 'serif'],
      },
      fontSize: {
        'display':   ['clamp(2rem, 6vw, 4.5rem)', { lineHeight: '1.05', fontWeight: '700' }],
        'eyebrow':   ['0.8125rem', { lineHeight: '1.4', letterSpacing: '0.06em' }],
        'body':      ['1.0625rem', { lineHeight: '1.6' }],
        'editorial': ['1.3125rem', { lineHeight: '1.5' }],
      },
    },
  },
  plugins: [],
}

export default config
```

### CSS Custom Properties (add to `globals.css`)

```css
:root {
  --band-dark:          #10231B;
  --band-light:         #EEF0EA;
  --text-primary-dark:  #F2EFE6;
  --text-muted-dark:    #9AA89E;
  --accent-dark:        #B8862E;
  --border-dark:        #6B7569;
  --text-primary-light: #10231B;
  --text-muted-light:   #5B6258;
  --accent-light:       #8A5E1C;
  --border-light:       #727A6A;
}
```

**Contrast rules:**
- Body text / labels: minimum 4.5:1 against their background. No exceptions.
- Decorative dividers (no interactive meaning): can be lower-contrast.
- Interactive borders (button outlines, input borders, focus rings): minimum 3:1.
- Before adding ANY new gray value: compute its contrast ratio first.

---

## 2. TYPOGRAPHY SPEC

**One type family, three cuts: IBM Plex Mono / Sans / Serif.** Load via `next/font/google`. Never use a CDN `<link>`.

```ts
// src/lib/fonts.ts
import { IBM_Plex_Mono, IBM_Plex_Sans, IBM_Plex_Serif } from 'next/font/google'

export const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-mono',
})

export const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-sans',
})

export const plexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-serif',
})
```

| Role | Face | Size (desktop / mobile) | Weight | Usage rule |
|---|---|---|---|---|
| Display headline | IBM Plex Mono | 56–72px / 32–40px | Bold | Max 6–8 words per line. Never mono for body/paragraph text. |
| Body | IBM Plex Sans | 17px / 16px | Regular | Line-height 1.6 |
| Eyebrow / label / date | IBM Plex Mono | 13px, UPPERCASE, +0.06em tracking | Medium | Section labels, status tags, timeline dates |
| Editorial moment | IBM Plex Serif | 21px | Regular | **Used exactly once** — opening line of "How I Build" section only. Never used elsewhere. |

---

## 3. PAGE ARCHITECTURE

### Routes

```
/                          → Single scroll page (Hero → How I Build → Selected Work → Capability Map → Trajectory → Now → Contact)
/work/rfid-attendance      → Case study: RFID Attendance System
/work/rapor-ai             → Case study: Rapor AI
/work/owlbook              → Case study: OwlBook — Digital Library
```

### Alternating Band Pattern — MANDATORY

Every section alternates band color. **This is non-negotiable.**

```
Section 1: Hero               → bg-band-dark
Section 2: How I Build        → bg-band-light
Section 3: Selected Work      → bg-band-dark
Section 4: Capability Map     → bg-band-light  ← NOT a flat skill tag wall
Section 5: Trajectory         → bg-band-dark
Section 6: Now                → bg-band-light
Section 7: Contact            → bg-band-dark
```

Case study page interior: starts `bg-band-light`, diagram block can break to `bg-band-dark` band within the page.

---

## 4. TYPESCRIPT DATA TYPES

All content lives in `src/data/`. Never hardcode copy in JSX.

```ts
// src/data/types.ts

export type ProjectStatus = 'production' | 'prototype' | 'in-progress'

export interface Project {
  slug: string
  functionTag: string         // e.g. "DUAL-PIPELINE ATTENDANCE SYSTEM" — uppercase
  title: string
  subtitle: string            // role + context
  status: ProjectStatus
  stack: string[]
  repoUrl?: string
  // Case study fields — all required for shipped projects
  problem: string             // the actual engineering problem, not a buzzword
  constraints: string         // what was fixed/given that couldn't be changed
  decision: string            // what was built and why
  rejectedPath: string        // what was considered and explicitly not chosen
  outcome: string             // qualitative only — never invent a metric
  reflection: string          // what would be changed now
}

export interface TimelineEvent {
  date: string                // e.g. "Jan 2025"
  label: string
  org: string
  type: 'internship' | 'competition' | 'exam' | 'education'
}

export interface CapabilityGroup {
  tier: 'confident' | 'building' | 'exploring'
  label: string               // display label
  items: string[]
}

export interface NowItem {
  project: string
  description: string
  deadline?: string
}
```

---

## 5. CONTENT DATA

This is the canonical content. Use verbatim. Do not rephrase or add to it.

```ts
// src/data/projects.ts
export const projects: Project[] = [
  {
    slug: 'rfid-attendance',
    functionTag: 'DUAL-PIPELINE ATTENDANCE SYSTEM',
    title: 'RFID Attendance System',
    subtitle: 'Backend Developer · HummaTech Indonesia',
    status: 'production',
    stack: ['Laravel', 'PHP', 'MySQL', 'Python', 'Postman'],
    repoUrl: undefined, // private repo

    problem: 'A school needed to track gate entry and per-lesson attendance separately. A single pipeline could not reliably handle both — the entry timestamp and the teacher-verified attendance had different authorities, different triggers, and different failure modes.',
    constraints: 'Production deployment to an active school environment. The gate RFID hardware was fixed and non-negotiable. The system had to stay up during the school day.',
    decision: 'Dual-pipeline architecture: one pipeline exclusively for RFID gate entry (attendance_rfids table), one for teacher-managed per-lesson cross-check (attendances table). Cross-check is the sole source of truth for final attendance status. Flags computed as JOIN outputs, not stored state. Python/openpyxl tooling for the Excel import workflow that previously required manual re-entry.',
    rejectedPath: 'A single unified pipeline that attempted to reconcile gate entry and teacher records in real time. Rejected because the two data sources have different latencies, different error rates, and different correction authorities — forcing them into one flow would have required complex conflict resolution logic that would be brittle in production.',
    outcome: 'Deployed to production at the school. The Python tooling substantially reduced the manual effort required for Excel import — the workflow that previously required manual re-entry was automated. The dual-pipeline design remained stable through the internship period.',
    reflection: 'I would add an explicit reconciliation audit log — a record of cases where gate entry and teacher cross-check disagreed, and how they were resolved. That data would surface patterns (habitual late entries, specific classrooms with unreliable reads) that the current design discards.',
  },
  {
    slug: 'rapor-ai',
    functionTag: 'VISION-LANGUAGE REPORT SUMMARISER',
    title: 'Rapor AI',
    subtitle: 'Solo Developer · Google JuaraVibeCoding 2026',
    status: 'prototype',
    stack: ['Node.js', 'Express', 'Gemini Vision API'],
    repoUrl: 'https://github.com/kaz-hero123/rapor-ai',

    problem: 'Indonesian school report cards (rapor) contain dense structured data. Students and parents need different things from the same document — a student needs to understand what to improve; a parent needs a clear status signal without decoding table rows.',
    constraints: 'Solo, time-boxed to a competition. The report card format varies across schools — the solution had to work from a photo, not a structured data export.',
    decision: 'A single vision-language model call (Gemini Vision API) that accepts a report card photo and returns two distinct summaries in one response: a student-facing summary focused on actionable improvement areas, and a parent-facing summary focused on overall status and notable results.',
    rejectedPath: 'Two separate API calls with different prompts. Rejected for cost and latency — a single well-structured prompt with explicit output schema is cheaper and faster, and the model has full context for both summaries in one pass.',
    outcome: 'Prototype produces two meaningfully different summaries from the same report card image. The student summary and parent summary have different registers and different information emphasis. Submitted and completed for Google JuaraVibeCoding 2026.',
    reflection: 'The prompt is doing a lot of work that should probably be schema-enforced — structured output (JSON mode) would make the two summaries more reliably distinct and easier to render. The current implementation parses freeform text, which is fragile.',
  },
  {
    slug: 'owlbook',
    functionTag: 'LIBRARY LIFECYCLE STATE MACHINE',
    title: 'OwlBook — Digital Library',
    subtitle: 'Solo Developer · Final Competency Exam (UKK)',
    status: 'production',
    stack: ['Laravel', 'Tailwind CSS', 'DomPDF', 'MySQL'],
    repoUrl: undefined,

    problem: 'Manual library management at a school caused stock errors (books marked available when borrowed) and untracked fines (no systematic record of late returns). Reporting was done manually in spreadsheets.',
    constraints: 'Solo exam project with a fixed deadline. The schema had to support RBAC across at least three roles (admin, librarian, student). PDF reporting was a hard requirement.',
    decision: 'Full borrowing lifecycle modelled as a state machine: available → borrowed → returned (on-time) / returned (late). Fines computed from state transition timestamps, not stored. RBAC across a 7-table schema using Laravel middleware. Automated PDF reporting via DomPDF triggered from the admin panel.',
    rejectedPath: 'Storing fine amounts as a column that gets updated on return. Rejected because it creates an audit gap — if the fine is updated after the fact, there is no record of the original due date or when the calculation was applied. Deriving fines from timestamps keeps the source of truth in the transition record.',
    outcome: 'Completed and passed the UKK final exam. Full borrowing lifecycle functional. PDF reports generating correctly. RBAC working across admin, librarian, and student roles.',
    reflection: 'The state machine logic lives in the controller, which made it hard to test in isolation. I would extract it to a dedicated BorrowingLifecycle service class if rebuilding — that is the one place where a service layer would have been justified.',
  },
]
```

```ts
// src/data/timeline.ts
export const timelineEvents: TimelineEvent[] = [
  { date: 'Early 2025', label: 'Backend Developer Intern', org: 'HummaTech Indonesia', type: 'internship' },
  { date: 'Jun 2025',   label: 'Final Competency Exam (UKK) — OwlBook', org: 'SMK RPL/PPLG', type: 'exam' },
  { date: 'Jun 2026',   label: 'Google JuaraVibeCoding 2026 — Rapor AI', org: 'Google', type: 'competition' },
  { date: 'Jul 2026',   label: 'IT Fest 2026 — Jelajah Madura', org: 'Team project', type: 'competition' },
  { date: 'Aug 2026',   label: 'D4 Software Engineering — Semester 1', org: 'PENS Surabaya', type: 'education' },
]
```

```ts
// src/data/capabilities.ts
export const capabilities: CapabilityGroup[] = [
  {
    tier: 'confident',
    label: 'Confident',
    items: ['Laravel', 'PHP', 'MySQL', 'REST API design', 'RBAC', 'Python scripting'],
  },
  {
    tier: 'building',
    label: 'Building',
    items: ['Node.js services', 'Vision model integration', 'Express'],
  },
  {
    tier: 'exploring',
    label: 'Exploring',
    items: ['Livewire / Alpine.js', 'Frontend systems', 'Full-stack architecture'],
  },
]
```

```ts
// src/data/now.ts
export const nowItems: NowItem[] = [
  {
    project: 'Jelajah Madura',
    description: 'Laravel tourism platform for IT Fest 2026. Backend developer and PM on a team of three.',
    deadline: 'Aug 5, 2026',
  },
  {
    project: 'PENS Surabaya',
    description: 'Starting D4 Software Engineering in August 2026.',
    deadline: 'Aug 2026',
  },
  {
    project: 'UiVault',
    description: 'Personal UI moodboard tool built in Laravel/Livewire. Two-person project, ongoing.',
  },
]
```

```ts
// src/data/hero.ts
export const hero = {
  // Display Mono headline — a thesis statement, not "Hi I'm X"
  headline: 'I build systems\nthat hold when the\nedge cases hit.',

  // One factual proof line
  proof: '3 systems shipped to production — 1 more in progress.',

  // Two text links (NOT button-shaped CTAs)
  primaryLink: { label: 'View case studies', href: '#selected-work' },
  secondaryLink: { label: 'Email me', href: 'mailto:hilmannidal@gmail.com' },
}
```

---

## 6. SECTION SPECS

### Section 1: Hero (dark band)

```
Layout: asymmetric — text left (60%), photo treatment right (40%)
Photo: color-overlay duotone using accent-dark (#B8862E) — NOT a centered neutral headshot
Headline: hero.headline using font-mono text-display font-bold text-text-primary-dark
          Render with whitespace-pre-line to preserve the line breaks
Proof line: hero.proof using font-mono text-eyebrow uppercase text-muted-dark
Links: plain text links, not buttons — underline draws left-to-right in accent-dark on hover (~150ms)

EXPLICITLY FORBIDDEN in this section:
- No blinking cursor
- No "available for internship" badge
- No button-shaped CTAs (rounded pill buttons = forbidden)
- No stats counter
- No marquee
```

### Section 2: How I Build (light band)

```
Content: 2 short paragraphs, Plex Sans body text, text-text-primary-light
Opening line: rendered in font-serif text-editorial — this is the ONLY place serif is used
No bullet points. No "passionate about" language. No "I love working with" constructions.

Suggested opening (can be edited for voice, but preserve the register):
SERIF LINE: "Backend engineering, for me, is mostly about what happens after you ship."
BODY: "At HummaTech, I learned what it means to build something schools depend on daily.
       That experience shaped how I think about architecture: not 'what's the simplest
       thing that could work' but 'what's the simplest thing that stays maintainable
       when someone else touches it at 2am.'"
BODY: "I hold a backend developer and project manager role on team projects — not
       because I had to, but because the systems thinking that makes good backend work
       also makes good coordination. The same instinct that tells you to separate
       concerns in code tells you to separate concerns in a team."
```

### Section 3: Selected Work (dark band)

```
Layout: vertical stack of case study entries — NOT a card grid
Each entry has:
  - functionTag (font-mono text-eyebrow uppercase text-muted-dark)
  - title (font-mono text-display font-bold text-text-primary-dark — smaller than hero, ~32-40px)
  - status badge (font-mono text-eyebrow uppercase: "PRODUCTION" / "PROTOTYPE" / "IN PROGRESS")
  - 1-sentence problem statement (font-sans text-muted-dark)
  - stack tags (font-mono text-eyebrow, NOT pill badges — plain text separated by · )
  - "Read case study →" text link in accent-dark

DO NOT number the entries (01, 02, 03). They are parallel, not sequential.
DO NOT include Jelajah Madura or UiVault here.

Entries: projects array, status !== 'in-progress' only (so: rfid-attendance, rapor-ai, owlbook)
```

### Section 4: Capability Map (light band)

```
Layout: three horizontal groups — NOT a flat skill logo/tag wall
Each group header: tier label in font-mono text-eyebrow uppercase
Tier labels: "Confident" / "Building" / "Exploring"
Items within each group: plain list, font-sans text-body text-text-primary-light

The three groups must be visually distinct from each other — use spacing, not color,
to distinguish them. No progress bars, no skill level percentages, no pie charts.
Source: capabilities array from src/data/capabilities.ts
```

### Section 5: Trajectory (dark band)

```
Layout: vertical timeline, left-anchored
Markers: diamond (◆) or tick (—) in accent-dark, with date label in font-mono text-eyebrow
Date label: text-muted-dark uppercase
Event label: font-sans text-body text-text-primary-dark font-medium
Org label: font-sans text-eyebrow text-muted-dark

Source: timelineEvents array — render in chronological order (earliest first)
This is the ONE place numbered/dated ordering is justified — it's a real sequence.
```

### Section 6: Now (light band)

```
Intro line: "What's actively in progress right now."
Each item:
  - Project name: font-mono text-eyebrow uppercase text-accent-light
  - Description: font-sans text-body text-text-primary-light
  - Deadline (if present): font-mono text-eyebrow text-muted-light

Source: nowItems array from src/data/now.ts
This is where in-progress work lives. Never move Jelajah Madura or UiVault to Selected Work.
```

### Section 7: Contact (dark band)

```
Primary action: email link — hilmannidal@gmail.com
  Rendered as large text link in accent-dark, font-mono text-display
  NOT an <input> form. NOT a contact form. Just the link.

Secondary links (text only, NOT icon buttons):
  - GitHub: github.com/kaz-hero123
  - LinkedIn: linkedin.com/in/hilman-nidal

Layout: treat this section as its own designed moment — not a footer afterthought.
Asymmetric: primary email dominates the left; secondary links sit quietly right or below.

FORBIDDEN here:
- Three equal-weight icon buttons (Email / GitHub / LinkedIn as visual peers)
- A form with name/message/subject fields
- "Let's work together" as the heading (overused)
```

---

## 7. CASE STUDY PAGE SPEC (`/work/[slug]`)

Each case study page follows this exact structure. No exceptions.

```
1. CONTEXT      → functionTag + title + subtitle + status + stack
2. CONSTRAINTS  → project.constraints — what was fixed/given
3. DECISION     → project.decision — what was built and why
4. DIAGRAM      → Architecture diagram (see Section 8 below) — this is the page's hero element
5. REJECTED PATH → project.rejectedPath — what was considered and not chosen
6. OUTCOME      → project.outcome — qualitative only. No invented metrics.
7. REFLECTION   → project.reflection — what would be changed now

Band pattern within page:
  - Sections 1–3: bg-band-light
  - Section 4 (diagram): bg-band-dark — this is the visual break
  - Sections 5–7: bg-band-light
```

---

## 8. SIGNATURE ELEMENT — ARCHITECTURE DIAGRAMS

One diagram per case study. This is the memorable element. Everything else is quiet.

**Visual language (apply consistently across all three):**
- Stroke weight: ~1.5px
- Node shapes: rectangles with 2px border-radius (not fully rounded, not sharp corners)
- Active path highlighted in `accent-dark` (#B8862E)
- Inactive / context nodes in `border-dark` (#6B7569)
- Labels: IBM Plex Mono, 11px, `text-primary-dark`
- Background: `band-dark` (#10231B)
- Connectors: straight lines with small arrowheads, no bezier curves

**Per-project diagram spec:**

```
RFID Attendance System:
  Two parallel vertical pipelines side by side.
  Left: RFID gate scan → attendance_rfids table → (read-only)
  Right: Teacher records → attendances table → source of truth
  JOIN arrow connecting right pipeline output to "Final Status" node
  Label at top of each column: "GATE ENTRY PIPELINE" / "CROSS-CHECK PIPELINE"
  Active path (accent): the cross-check pipeline, since it's sole source of truth

Rapor AI:
  Linear left-to-right: Photo input → Gemini Vision API → Single structured prompt →
  Parallel outputs: [Student Summary] / [Parent Summary]
  Active path (accent): the single prompt → dual output split

OwlBook:
  State machine: horizontal flow with state nodes
  available → borrowed → [returned on-time] (branch up) / [returned late → fine computed] (branch down)
  Each state transition: labeled with the action that triggers it
  Active path (accent): the late return path (most non-trivial case)
```

**Scroll trigger:** Diagram strokes draw in when ~40% of the diagram is in the viewport. This is the ONLY scroll animation on the site.

If diagram quality cannot be precise and clean, use a simplified geometric flow rather than a sloppy execution.

---

## 9. MOTION RULES

```
Page load:    Hero headline — single 8px rise + fade, ~250ms, fires once.
              No per-letter stagger. No cascade of elements flying in.

Scroll:       ONLY the case study diagrams animate on scroll (stroke draw-in at 40% viewport).
              Nothing else scroll-animates.

Hover:        Text link underlines draw left-to-right in accent color, ~150ms.
              No scale transforms. No box-shadow blooms.

Forbidden:    Infinite marquee, parallax, scroll-jacking, per-letter stagger,
              background gradient shifts on scroll, floating elements with continuous animation.

Reduced motion: prefers-reduced-motion: reduce → disable draw-in and rise, use instant opacity fade.
```

Framer Motion: max **3 `motion.div`** per section. Not more.

---

## 10. ENGINEERING PRACTICES

```ts
// Required patterns
import { cn } from '@/lib/utils'         // className merging utility (clsx + twMerge)
import { forwardRef } from 'react'       // on all form elements

// Naming
// Components:    PascalCase — ProjectCard, TimelineEvent, CapabilityGroup
// Interfaces:    [Name]Props — ProjectCardProps, HeroProps
// Event handlers: handle[Action] — handleEmailClick, handleNavOpen
// Section IDs:   kebab-case — #selected-work, #capability-map, #contact

// TypeScript
// strict: true in tsconfig — no `any`, no implicit returns
```

### Accessibility floor (every interactive element)

- Visible focus ring on all interactive elements (outline: 2px accent color, offset: 2px)
- Skip-to-content link as first DOM element
- `min-h-[48px]` touch targets on all clickable elements
- `aria-hidden="true"` on decorative icons
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<time>` — not `<div>` for structure
- Descriptive `aria-label` on icon-only links
- `<button>` elements — never `<div onClick>`

---

## 11. BUILD PHASE ORDER

Build and validate each phase before starting the next. Do not build the whole site in one pass.

```
Phase 1:  Tailwind config (Section 1 of this spec) + globals.css + font setup
          Validate: open browser, confirm colors and fonts load correctly

Phase 2:  Layout shell — alternating band structure with section placeholders
          Validate: 7 colored bands visible, alternating dark/light correctly

Phase 3:  Hero section only — get this right before moving on
          Validate: asymmetric layout, Mono display type, no forbidden elements

Phase 4:  "How I Build" section
          Validate: Serif used exactly once (opening line only)

Phase 5:  Selected Work index — 3 entries, no cards, no numbering
          Validate: functionTags visible, status tags correct, no grid layout

Phase 6:  Case study pages — one at a time, starting with RFID
          Validate: Context → Constraints → Decision → Diagram → Rejected → Outcome → Reflection

Phase 7:  Capability Map + Trajectory + Now
          Validate: 3 capability tiers distinct, timeline in chronological order

Phase 8:  Contact section
          Validate: email is primary, GitHub/LinkedIn are secondary text links only

Phase 9:  Motion — apply ONLY what's in Section 9, nothing extra
          Validate: reduced-motion respected

Phase 10: Accessibility audit + mobile responsive check
```

---

## 12. WHAT THIS SITE IS NOT

This is a backend engineer's portfolio, not a creative agency page. The visual design serves one purpose: demonstrate that Hilman builds systems with genuine engineering judgment. Every element should support that claim or be removed.

The site is not:
- A showcase of visual design skill
- A services page
- A resume in web format
- A template with Hilman's name in it

If any section starts to feel like "look how cool this website is," it has gone wrong.
