# Hilman Nidal Hamzi — Portfolio Design System
## Core Memory & Coding Guide

> **Status**: Source of truth for all portfolio UI development.
> **Last updated**: 2026-06-26
> **Owner**: Hilman Nidal Hamzi (kaz-hero123)
> **Direction**: Dark Editorial + Warm Technical

---

## 0. Project Brief

| Field          | Value                                                                 |
|----------------|-----------------------------------------------------------------------|
| **Subject**    | Hilman Nidal Hamzi — Backend Developer, Laravel/Full-Stack Engineer   |
| **Audience**   | Technical leads, HRD, freelance clients, potential remote employers   |
| **Page's job** | Convince a visitor in 30 seconds that Hilman is competent, real, and worth contacting |
| **Tone**       | Confident, direct, technically credible. Not corporate. Not try-hard. |
| **NOT this**   | Playful, bubbly, generic dev dark portfolio with neon green           |

---

## 1. Tech Stack (Locked)

| Layer              | Technology              | Version  | Notes                                                   |
|--------------------|-------------------------|----------|---------------------------------------------------------|
| **Framework**      | Next.js                 | 14+ (App Router) | SSG for SEO. Portfolio must be indexable.        |
| **Language**       | TypeScript              | 5+       | Strict mode ON. `noImplicitAny: true`. No `any`.        |
| **Styling**        | Tailwind CSS            | 3.x      | JIT. Do NOT upgrade to v4 yet — API breaking changes.   |
| **Animation**      | Framer Motion           | Latest   | Scroll reveals + micro-interactions only. Not everywhere. |
| **Icons**          | lucide-react            | Latest   | Only icon library. `strokeWidth={1.5}` default.        |
| **Font Loading**   | `next/font/google`      | —        | Built-in Next.js font optimization. No CDN `<link>`.    |

```bash
# Project init
npx create-next-app@latest hilman-portfolio --typescript --tailwind --app --src-dir

# Dependencies
npm install framer-motion lucide-react clsx tailwind-merge
```

### Why Next.js over Vite?
Porto adalah dokumen publik yang harus bisa diindex Google. Vite (plain React)
menghasilkan SPA yang tidak SEO-friendly secara default. Next.js dengan static
export menghasilkan HTML statis yang bisa diindex, di-deploy gratis ke Vercel,
dan loading-nya lebih cepat karena tidak menunggu JS bundle.

---

## 2. Design Tokens

### 2.1 Color Palette

Tiga warna dari README dipakai **secara semantik**, bukan dekoratif.
Masing-masing punya peran yang tidak boleh ditukar.

| Token       | Hex       | Semantic Role                                          |
|-------------|-----------|--------------------------------------------------------|
| `coral`     | `#F2966B` | Primary accent — CTA, hover state, nama/headline       |
| `lavender`  | `#B3A0D6` | Secondary — tech tags, labels, secondary links         |
| `mint`      | `#7FCBA0` | Status/availability — "available" badge, success states|
| `bg`        | `#0f0f0f` | Page background (near-black, bukan pure black)         |
| `surface`   | `#1a1a1a` | Card/panel background                                  |
| `border`    | `#2a2a2a` | Dividers, card borders                                 |
| `text`      | `#f0ece4` | Primary text (warm white — bukan pure white)           |
| `muted`     | `#6b6b6b` | Secondary text, placeholders, timestamps               |

**Hard constraint:**
- Jangan gunakan `#000000` (pure black) atau `#ffffff` (pure white) di manapun.
- `coral` adalah satu-satunya warna yang boleh dipakai untuk CTA dan headline emphasis.
- `mint` hanya untuk status indicators dan success states. Jangan dipakai dekoratif.
- `lavender` hanya untuk tags, labels, dan secondary UI elements.

### 2.2 Typography

| Role         | Font              | Weight    | Use case                                    |
|--------------|-------------------|-----------|---------------------------------------------|
| Display      | Space Grotesk     | 700–800   | Nama, section headings besar, hero text     |
| Body         | Inter             | 400–500   | Paragraf, deskripsi, navigasi               |
| Mono         | JetBrains Mono    | 400–500   | Tech tags, role label di hero, code snippets|

```tsx
// app/layout.tsx
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
```

**Type Scale (mobile-first):**

```
Display XL : text-5xl  → md:text-7xl  → lg:text-8xl   (nama hero)
Display L  : text-4xl  → md:text-5xl                   (section heading besar)
H2         : text-2xl  → md:text-3xl
H3         : text-lg   → md:text-xl
Body L     : text-base → md:text-lg
Body S     : text-sm
Mono       : text-xs   → md:text-sm                    (tags, labels)
```

---

## 3. Tailwind Config

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        coral:    '#F2966B',
        lavender: '#B3A0D6',
        mint:     '#7FCBA0',
        bg:       '#0f0f0f',
        surface:  '#1a1a1a',
        border:   '#2a2a2a',
        text:     '#f0ece4',
        muted:    '#6b6b6b',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body:    ['var(--font-body)',    'sans-serif'],
        mono:    ['var(--font-mono)',    'monospace'],
      },
      borderRadius: {
        DEFAULT: '6px',
        md:  '8px',
        lg:  '12px',
        xl:  '16px',
      },
      boxShadow: {
        card:       '0 0 0 1px #2a2a2a',
        cardHover:  '0 0 0 1px #F2966B',
        glow:       '0 0 24px rgba(242, 150, 107, 0.15)',
        glowStrong: '0 0 40px rgba(242, 150, 107, 0.25)',
      },
      animation: {
        blink: 'blink 1.2s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## 4. Global CSS

```css
/* src/app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: #0f0f0f;
    color: #f0ece4;
    font-family: var(--font-body), sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-display), sans-serif;
    font-weight: 700;
    color: #f0ece4;
    line-height: 1.1;
  }

  ::selection {
    background-color: rgba(242, 150, 107, 0.3);
    color: #f0ece4;
  }

  /* Scrollbar */
  ::-webkit-scrollbar        { width: 6px; }
  ::-webkit-scrollbar-track  { background: #0f0f0f; }
  ::-webkit-scrollbar-thumb  { background: #2a2a2a; border-radius: 3px; }
  ::-webkit-scrollbar-thumb:hover { background: #F2966B; }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
}
```

---

## 5. Project Structure

```
src/
├── app/
│   ├── layout.tsx          ← Font loading, metadata, global providers
│   ├── page.tsx            ← Menyusun semua sections
│   └── globals.css
├── components/
│   ├── ui/                 ← Atoms: Button, Badge, Tag, Divider
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── Tag.tsx
│   │   └── index.ts
│   ├── sections/           ← Section-level components (satu file per section)
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Stack.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Achievements.tsx
│   │   └── Contact.tsx
│   └── layout/
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       └── SectionWrapper.tsx
├── lib/
│   └── utils.ts            ← cn() helper
├── data/                   ← Semua konten statis disini, bukan di komponen
│   ├── projects.ts
│   ├── stack.ts
│   ├── experience.ts
│   └── achievements.ts
└── types/
    └── index.ts
```

**Rule penting**: Semua teks konten (nama proyek, deskripsi, tech stack, dll)
harus ada di folder `data/`, bukan hardcoded di dalam JSX. Ini membuat update
konten tidak perlu sentuh komponen.

---

## 6. Section Map & Layout

Urutan section ini sudah dipertimbangkan dari sudut pandang visitor:
*siapa → bisa apa → buktinya → pengalaman → cara contact.*

```
┌─────────────────────────────────────────────────────┐
│  NAVBAR    — name left, nav links right, sticky      │
├─────────────────────────────────────────────────────┤
│  HERO      — full viewport height                    │
│              nama besar (Display XL)                 │
│              role di bawahnya (Mono, coral)          │
│              status: "> available for internship ■"  │
│              dua CTA button                          │
├─────────────────────────────────────────────────────┤
│  ABOUT     — dua kolom: teks kiri, foto kanan        │
│              3–4 kalimat, bukan bullet points        │
│              currently building badge (mint)         │
├─────────────────────────────────────────────────────┤
│  STACK     — dikelompok per layer, bukan icon dump   │
│              Languages / Frontend / Backend / Tools  │
├─────────────────────────────────────────────────────┤
│  PROJECTS  — 3 featured project cards (full-width)   │
│              setiap card: judul, problem statement,  │
│              tech tags, link                         │
├─────────────────────────────────────────────────────┤
│  EXPERIENCE — timeline, 2 entries                    │
├─────────────────────────────────────────────────────┤
│  ACHIEVEMENTS — 3-col compact grid                   │
├─────────────────────────────────────────────────────┤
│  CONTACT   — satu headline, 3 link cards (email,     │
│              LinkedIn, GitHub)                       │
├─────────────────────────────────────────────────────┤
│  FOOTER    — minimal: name + year                    │
└─────────────────────────────────────────────────────┘
```

---

## 7. The Signature Element

**Hero status indicator** — ini satu-satunya elemen yang "bold" dan harus
dieksekusi dengan presisi.

```tsx
// Contoh implementasi di Hero.tsx
<p className="font-mono text-sm text-mint flex items-center gap-2">
  <span className="text-muted">›</span>
  available for internship
  <span className="animate-blink text-mint">■</span>
</p>
```

Ini bukan gimmick — blinking cursor menyampaikan informasi nyata (availability)
dalam bahasa visual yang relevan untuk seorang developer. Mint dipakai di sini
dan hanya di sini untuk status aktif.

---

## 8. Component Patterns

### 8.1 cn() Utility

```ts
// src/lib/utils.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### 8.2 SectionWrapper

Semua section dibungkus dengan ini untuk spacing yang konsisten.

```tsx
// src/components/layout/SectionWrapper.tsx
import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  id?: string;
}

export function SectionWrapper({ id, className, children, ...props }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn('py-24 px-6 max-w-5xl mx-auto', className)}
      {...props}
    >
      {children}
    </section>
  );
}
```

### 8.3 SectionLabel (Eyebrow text)

Digunakan sebagai label kecil di atas setiap section heading.

```tsx
// src/components/ui/SectionLabel.tsx
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs text-muted uppercase tracking-widest mb-3">
      {children}
    </p>
  );
}

// Usage:
// <SectionLabel>Projects</SectionLabel>
// <h2 className="font-display text-4xl text-text">What I've built</h2>
```

### 8.4 Button

```tsx
// src/components/ui/Button.tsx
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  asChild?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary: cn(
    'bg-coral text-bg font-body font-medium',
    'hover:bg-coral/90',
    'focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2',
    'focus-visible:ring-offset-bg',
  ),
  ghost: cn(
    'bg-transparent text-text border border-border font-body',
    'hover:border-coral hover:text-coral',
    'focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2',
    'focus-visible:ring-offset-bg',
  ),
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', className, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center gap-2',
        'px-6 py-3 rounded-md text-sm min-h-[48px]',
        'transition-all duration-150 cursor-pointer',
        'select-none outline-none',
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
);
Button.displayName = 'Button';
```

### 8.5 Tag (Tech Stack / Skill Labels)

```tsx
// src/components/ui/Tag.tsx
import { cn } from '@/lib/utils';

type TagColor = 'lavender' | 'coral' | 'mint' | 'default';

interface TagProps {
  children: React.ReactNode;
  color?: TagColor;
}

const colorStyles: Record<TagColor, string> = {
  lavender: 'bg-lavender/10 text-lavender border-lavender/20',
  coral:    'bg-coral/10    text-coral    border-coral/20',
  mint:     'bg-mint/10     text-mint     border-mint/20',
  default:  'bg-surface     text-muted    border-border',
};

export function Tag({ children, color = 'default' }: TagProps) {
  return (
    <span
      className={cn(
        'font-mono text-xs px-2.5 py-1 rounded border',
        'inline-flex items-center',
        colorStyles[color],
      )}
    >
      {children}
    </span>
  );
}
```

### 8.6 Project Card

Card ini adalah elemen terpenting di portfolio. Harus menyampaikan *problem
statement*, bukan hanya nama proyek + tech list.

```tsx
// src/components/ui/ProjectCard.tsx
import { cn } from '@/lib/utils';
import { Tag } from './Tag';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title:          string;
  role:           string;           // "Backend Developer · Internship"
  problem:        string;           // SATU kalimat: masalah yang diselesaikan
  outcome:        string;           // SATU kalimat: hasilnya / impact-nya
  stack:          string[];
  githubUrl?:     string;
  liveUrl?:       string;
  isPrivate?:     boolean;
  featured?:      boolean;
}

export function ProjectCard({
  title, role, problem, outcome,
  stack, githubUrl, liveUrl, isPrivate, featured,
}: ProjectCardProps) {
  return (
    <article
      className={cn(
        'group p-6 md:p-8 rounded-lg border border-border bg-surface',
        'transition-all duration-200',
        'hover:border-coral/50 hover:shadow-glow',
        featured && 'border-coral/30',
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="font-display text-xl text-text mb-1">{title}</h3>
          <p className="font-mono text-xs text-muted">{role}</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          {isPrivate && (
            <span className="font-mono text-xs text-muted">private repo</span>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} on GitHub`}
              className="text-muted hover:text-coral transition-colors"
            >
              <Github size={18} strokeWidth={1.5} />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} live`}
              className="text-muted hover:text-coral transition-colors"
            >
              <ExternalLink size={18} strokeWidth={1.5} />
            </a>
          )}
        </div>
      </div>

      {/* Problem + Outcome */}
      <p className="font-body text-sm text-muted mb-1 leading-relaxed">
        <span className="text-text/80">Problem: </span>{problem}
      </p>
      <p className="font-body text-sm text-muted mb-5 leading-relaxed">
        <span className="text-text/80">Outcome: </span>{outcome}
      </p>

      {/* Stack tags */}
      <div className="flex flex-wrap gap-2">
        {stack.map((tech) => (
          <Tag key={tech} color="lavender">{tech}</Tag>
        ))}
      </div>
    </article>
  );
}
```

### 8.7 Badge (Status / Availability)

```tsx
// src/components/ui/Badge.tsx
import { cn } from '@/lib/utils';

type BadgeVariant = 'available' | 'building' | 'default';

const variantStyles: Record<BadgeVariant, string> = {
  available: 'bg-mint/10 text-mint border-mint/20',
  building:  'bg-coral/10 text-coral border-coral/20',
  default:   'bg-surface text-muted border-border',
};

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  dot?: boolean;
}

export function Badge({ children, variant = 'default', dot = false }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full',
        'font-mono text-xs border',
        variantStyles[variant],
      )}
    >
      {dot && (
        <span
          className={cn(
            'w-1.5 h-1.5 rounded-full',
            variant === 'available' && 'bg-mint animate-pulse',
            variant === 'building'  && 'bg-coral animate-pulse',
            variant === 'default'   && 'bg-muted',
          )}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
```

---

## 9. Data Layer

Semua konten ada di sini. Komponen hanya render — tidak menyimpan teks.

```ts
// src/data/projects.ts
export interface Project {
  id:          string;
  title:       string;
  role:        string;
  problem:     string;
  outcome:     string;
  stack:       string[];
  githubUrl?:  string;
  liveUrl?:    string;
  isPrivate?:  boolean;
  featured?:   boolean;
}

export const projects: Project[] = [
  {
    id: 'rfid-attendance',
    title: 'RFID Attendance System',
    role: 'Backend Developer · HummaTech Indonesia',
    problem:
      'School needed separate tracking for gate entry and per-lesson attendance — a single pipeline could not handle both reliably.',
    outcome:
      'Dual-pipeline architecture deployed to production; Python/openpyxl tooling cut manual import time significantly.',
    stack: ['Laravel', 'PHP', 'MySQL', 'Python', 'Postman'],
    isPrivate: true,
    featured: true,
  },
  {
    id: 'rapor-ai',
    title: 'Rapor AI',
    role: 'Solo Developer · Google JuaraVibeCoding 2026',
    problem:
      'Indonesian school report cards contain dense structured data that parents and students interpret differently.',
    outcome:
      'Vision-language model produces two distinct summaries from a single report card photo — one for students, one for parents.',
    stack: ['Node.js', 'Express', 'Gemini Vision API'],
    githubUrl: 'https://github.com/kaz-hero123/rapor-ai',
    featured: true,
  },
  {
    id: 'owlbook',
    title: 'OwlBook — Digital Library',
    role: 'Solo Developer · Final Exam Project (UKK)',
    problem:
      'Manual library management led to stock errors, late-return fines going untracked, and no reporting capability.',
    outcome:
      'Full borrowing lifecycle with state machine, automated PDF reporting, and RBAC across 7-table schema.',
    stack: ['Laravel', 'Tailwind CSS', 'DomPDF', 'MySQL'],
    featured: false,
  },
];
```

```ts
// src/data/stack.ts
export interface StackGroup {
  layer: string;
  items: string[];
}

export const stackGroups: StackGroup[] = [
  {
    layer: 'Languages',
    items: ['PHP', 'JavaScript', 'Python'],
  },
  {
    layer: 'Frontend',
    items: ['HTML', 'CSS', 'Tailwind CSS', 'Alpine.js', 'Livewire'],
  },
  {
    layer: 'Backend',
    items: ['Laravel', 'Node.js', 'Express'],
  },
  {
    layer: 'Databases',
    items: ['MySQL'],
  },
  {
    layer: 'Tools & Cloud',
    items: ['Git', 'GitHub', 'Postman', 'GCP / Cloud Run'],
  },
];
```

---

## 10. Animation Rules

| Use Case                    | Library       | Rule                                                    |
|-----------------------------|---------------|---------------------------------------------------------|
| Scroll-triggered section reveal | Framer Motion | `fadeInUp` — `y: 24 → 0`, `opacity: 0 → 1`, 0.4s ease |
| Card hover                  | Tailwind CSS  | `transition-all duration-200` — border color + shadow  |
| Hero status cursor          | Tailwind CSS  | `animate-blink` — CSS keyframe, no JS needed           |
| Navbar scroll state         | Framer Motion | Background opacity change on scroll                    |
| Page load                   | Framer Motion | Staggered hero elements, 0.1s delay each               |

**Hard limits on animation:**
- Maksimal 3 Framer Motion `motion.div` per section.
- Tidak ada parallax, tidak ada scroll-jacking.
- Semua animasi harus dicegah oleh `prefers-reduced-motion` — global CSS sudah menangani ini.
- Tidak ada animasi yang berjalan terus-menerus kecuali blinking cursor di hero.

```tsx
// Reusable scroll reveal variant
// src/lib/motion.ts
export const fadeInUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.4, ease: 'easeOut' } },
};

export const staggerContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};
```

---

## 11. Copy & Content Rules

Teks di porto ini adalah design material, bukan filler. Aturan per element:

| Element            | Rule                                                                        |
|--------------------|-----------------------------------------------------------------------------|
| Hero headline      | Bukan "Hi, I'm X" — tapi statement yang langsung positioning: nama + apa yang kamu bikin |
| Role subtitle      | Spesifik dan teknikal: `Backend Developer · Laravel & Full-Stack`           |
| About paragraph    | Max 3–4 kalimat. Tidak ada bullet points. Ceritakan konteks, bukan list skill |
| Project problem    | Satu kalimat. Awali dengan konteks masalahnya, bukan solusinya              |
| Project outcome    | Satu kalimat. Harus ada impact atau hasil konkret, bukan deskripsi fitur   |
| CTA button         | Spesifik: `View Projects` dan `Get in touch` — bukan `Learn More`          |
| Section labels     | Lowercase, mono font: `projects` / `experience` / `stack`                  |

**Yang harus dihindari:**
- ❌ "Passionate developer who loves to code"
- ❌ "I am a hardworking and dedicated individual"
- ❌ Bullet points di section About
- ❌ "etc." di tech stack

---

## 12. Naming Conventions

| Subject                 | Convention         | Example                                      |
|-------------------------|--------------------|----------------------------------------------|
| Components              | PascalCase         | `ProjectCard`, `HeroSection`, `SectionLabel` |
| Props interfaces        | `[Name]Props`      | `ProjectCardProps`, `ButtonProps`            |
| Data types/interfaces   | PascalCase         | `Project`, `StackGroup`, `Experience`        |
| Data arrays             | camelCase plural   | `projects`, `stackGroups`, `experiences`     |
| Event handlers          | `handle[Action]`   | `handleSubmit`, `handleNavToggle`            |
| Boolean props           | `is` / `has`       | `isPrivate`, `featured`, `hasLink`           |
| CSS custom properties   | `--font-[role]`    | `--font-display`, `--font-body`, `--font-mono`|
| Section IDs             | kebab-case         | `#projects`, `#about`, `#contact`            |

---

## 13. Accessibility Floor

| Requirement              | Implementation                                                 |
|--------------------------|----------------------------------------------------------------|
| Keyboard navigation      | `focus-visible:ring-2 focus-visible:ring-coral` semua elemen interaktif |
| Skip to content          | Link tersembunyi di awal `<body>`: `<a href="#main">Skip to main content</a>` |
| Touch targets            | `min-h-[48px]` semua button dan link                          |
| Decorative icons         | `aria-hidden="true"` dan tidak ada `alt` teks                 |
| External links           | `rel="noopener noreferrer"` + `aria-label` deskriptif         |
| Color contrast           | `text` (`#f0ece4`) on `bg` (`#0f0f0f`) — melewati WCAG AA    |
| Reduced motion           | Sudah ditangani di `globals.css`                              |
| Semantic HTML            | `<nav>`, `<main>`, `<section>`, `<article>` — bukan `<div>` semua |
| Metadata                 | `<title>` dan `<meta name="description">` di `layout.tsx`    |

---

## 14. Absolute Rules (Do / Don't)

### DO
- Selalu gunakan `font-display` untuk H1–H3. `font-mono` untuk labels/tags. `font-body` untuk paragraf.
- Selalu set `strokeWidth={1.5}` pada setiap icon lucide-react.
- Selalu gunakan `cn()` untuk semua className concatenation.
- Selalu gunakan `forwardRef` untuk semua form elements.
- Selalu letakkan konten teks di `src/data/` — bukan hardcoded di JSX.
- Selalu export komponen dari barrel `index.ts` di folder masing-masing.

### DON'T
- ❌ Jangan gunakan `#000000` atau `#ffffff`.
- ❌ Jangan gunakan `coral` untuk apapun selain CTA, headline emphasis, dan hover states.
- ❌ Jangan gunakan `mint` untuk dekorasi — hanya untuk status/availability.
- ❌ Jangan hardcode warna sebagai value inline tanpa token.
- ❌ Jangan gunakan `any` di TypeScript.
- ❌ Jangan load font dari CDN Google Fonts — gunakan `next/font/google`.
- ❌ Jangan tambahkan animasi Framer Motion tanpa mempertimbangkan `prefers-reduced-motion`.
- ❌ Jangan buat komponen class-based. Functional + hooks only.
- ❌ Jangan gunakan `<div onClick>` untuk tombol. Selalu `<button>`.
- ❌ Jangan letakkan konten teks langsung di dalam komponen section.

---

## 15. Scaffold Checklist (Per Component)

Sebelum commit komponen baru, verifikasi:

- [ ] File ada di folder yang benar (`ui/`, `sections/`, atau `layout/`)
- [ ] Props interface didefinisikan dengan nama yang benar
- [ ] `cn()` digunakan untuk semua className
- [ ] `forwardRef` digunakan jika form element
- [ ] Font class eksplisit: `font-display`, `font-body`, atau `font-mono`
- [ ] `strokeWidth` di-set pada semua icons
- [ ] `aria-hidden="true"` pada semua elemen dekoratif
- [ ] Touch target `min-h-[48px]` jika interaktif
- [ ] Mobile-first responsive classes
- [ ] Konten teks berasal dari `data/` bukan hardcoded
- [ ] Exported dari barrel `index.ts`

---

## 16. Out of Scope

- **Light mode**: Tidak didukung. Dark palette adalah identitas visual, bukan preferensi.
- **Multi-language (i18n)**: Porto ini berbahasa Inggris. Tidak perlu i18n.
- **CMS / dynamic content**: Konten statis di `data/`. Tidak perlu database atau headless CMS.
- **Blog**: Di luar scope v1. Bisa ditambah di Next.js sebagai `/blog` route di masa depan.
