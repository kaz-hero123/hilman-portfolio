# Hilman Nidal Hamzi — Portfolio Design System
## Core Memory & Coding Guide — v2 DRAFT

> **Status**: DRAFT — menggantikan `hilman-porto-design-system.md` (v1, dark mode). Belum jadi source of truth sampai di-review & dipindah manual oleh Hilman.
> **Supersedes**: v1 (Dark Editorial + Warm Technical), skor audit 39/70 — lihat `design_critique.md`
> **Direction**: Light Editorial + Warm Technical
> **Last updated**: 2026-06-29
> **Owner**: Hilman Nidal Hamzi (kaz-hero123)

### Rebrand Context (kenapa dokumen ini ada)

v1 di-audit dan dapat skor 39/70 — masalah utamanya bukan di warna/tipografi (keduanya 7/10), tapi di: seragamitas section, zero personality, avatar placeholder "HN" dipakai dua kali, TODO placeholder di production, mobile nav rusak. Rebrand ini ambil **struktur** dari referensi Olivia Smith (Figma UI/UX portfolio template) — alternating section background, stats besar, foto-driven hero — TAPI **bukan clone 1:1**: palette orisinal, audience/tone tetap job-seeking developer (bukan freelance/jasa), section "Services" di-drop.

---

## 0. Project Brief

| Field          | Value                                                                 |
|----------------|-----------------------------------------------------------------------|
| **Subject**    | Hilman Nidal Hamzi — Backend Developer, Laravel/Full-Stack Engineer   |
| **Audience**   | Technical leads, HRD, potential remote employers                      |
| **Page's job** | Convince a visitor in 30 seconds that Hilman is competent, real, and worth contacting |
| **Tone**       | Confident, direct, technically credible. Not corporate. Not try-hard. |
| **NOT this**   | Playful/bubbly product-designer pitch tone (services cards, "Hire Me" framing). Generic templated look — referensi struktural diadaptasi, bukan di-clone 1:1. |

---

## 1. Tech Stack (Locked — unchanged dari v1)

| Layer              | Technology              | Version  | Notes                                                   |
|--------------------|-------------------------|----------|---------------------------------------------------------|
| **Framework**      | Next.js                 | 14+ (App Router) | Static export (`output: 'export'`) untuk SEO.    |
| **Language**       | TypeScript              | 5+       | Strict mode ON. `noImplicitAny: true`. No `any`.        |
| **Styling**        | Tailwind CSS            | 3.x      | JIT. Tidak upgrade ke v4.                                |
| **Animation**      | Framer Motion           | Latest   | Scroll reveals + micro-interactions only.                |
| **Icons**          | lucide-react            | Latest   | `strokeWidth={1.5}` default.                             |
| **Font Loading**   | `next/font/google`      | —        | No CDN `<link>`.                                         |

---

## 2. Design Tokens

### 2.1 Color Palette

Sembilan token semantik + dua varian "deep" untuk koreksi kontras (lihat §13). Setiap token punya **satu** peran — gak ditukar antar konteks.

| Token       | Hex       | Semantic Role                                              |
|-------------|-----------|-------------------------------------------------------------|
| `forest`    | `#173328` | Dark section band background (Stats, Contact) — bukan full-page bg |
| `ember`     | `#E8893C` | Primary accent — **background fill CTA only**, atau foreground di atas `forest`. Lihat §13 untuk batasan keras: tidak valid sebagai foreground/text/icon di atas `paper`/`panel`. |
| `gold`      | `#D9A441` | Tag/label background-tint & icon accent; foreground text **di atas `forest`** |
| `goldDeep`  | `#91681D` | Tag/label TEXT **di atas `paper`/`panel`** (light-context only — gagal kontras di atas `forest`) |
| `sage`      | `#7C9473` | Status dot, "currently building" tidak dipakai di sini (lihat Badge §8); foreground text **di atas `forest`** (large text only, lihat §13) |
| `sageDeep`  | `#61755A` | Status TEXT **di atas `paper`/`panel`** (light-context only) |
| `paper`     | `#F7F3EC` | Page background (warm cream — bukan pure white)              |
| `panel`     | `#FCFAF6` | Card/panel background                                        |
| `line`      | `#DDD5C7` | Divider/border di atas light bg (dekoratif, lihat §13) — **dual-role**: jadi muted-text-on-dark kalau dipakai di atas `forest` (kontras 9.36) |
| `ink`       | `#231F1B` | Primary text di atas light bg (warm near-black — bukan `#000`) |
| `dust`      | `#756F65` | Secondary/muted text **di atas light bg only** — gagal kontras di atas `forest`, jangan dipakai di situ |

**Hard constraints (unchanged dari v1):**
- Jangan gunakan `#000000` atau `#ffffff` di manapun — prinsip "warm, not harsh", independen dari light/dark mode.
- `ember` adalah satu-satunya warna untuk CTA dan headline emphasis — TAPI **hanya sebagai background fill atau di atas `forest`**, tidak pernah sebagai text/icon/ring color di atas `paper`/`panel` (kontras maksimal cuma ~2.5, gagal WCAG bahkan untuk non-text). Ini batasan baru yang gak ada di v1 karena v1 cuma punya satu background gelap.
- `sage`/`sageDeep` hanya untuk status/availability. `gold`/`goldDeep` hanya untuk tags/labels.

### Dual Context Rule (BARU di v2)

v1 cuma punya satu background di seluruh halaman, jadi satu set token (`muted`, `text`) cukup. v2 punya dua konteks (light band vs `forest` dark band), jadi ada dua set token paralel:

| Role              | Di atas `paper`/`panel` (light)   | Di atas `forest` (dark)        |
|-------------------|------------------------------------|----------------------------------|
| Primary text      | `ink`                               | `paper`                          |
| Secondary/muted   | `dust`                               | `line`                           |
| Tag/label text    | `goldDeep`                           | `gold`                           |
| Status text       | `sageDeep`                           | `sage` *(large text only — 4.12, gagal di teks kecil)* |
| Accent/CTA        | `ember` (background fill only)       | `ember` (boleh jadi foreground)  |

**Jangan pernah pakai varian `Deep` di atas `forest`, atau varian non-`Deep` sebagai text di atas `paper`/`panel`.**

### 2.2 Typography (unchanged dari v1)

| Role         | Font              | Weight    | Use case                                    |
|--------------|-------------------|-----------|---------------------------------------------|
| Display      | Space Grotesk     | 700–800   | Nama, section headings besar, hero text     |
| Body         | Inter             | 400–500   | Paragraf, deskripsi, navigasi               |
| Mono         | JetBrains Mono    | 400–500   | Tech tags, role label di hero, code snippets|

Tidak berubah dari v1 — typography independen dari color mode, dan gak pernah di-flag sebagai masalah di audit (skor 7/10).

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
        forest:   '#173328',
        ember:    '#E8893C',
        gold:     '#D9A441',
        goldDeep: '#91681D',
        sage:     '#7C9473',
        sageDeep: '#61755A',
        paper:    '#F7F3EC',
        panel:    '#FCFAF6',
        line:     '#DDD5C7',
        ink:      '#231F1B',
        dust:     '#756F65',
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
        card:     '0 0 0 1px #DDD5C7',
        cardLift: '0 8px 24px -4px rgba(35, 31, 27, 0.12)',
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

**Catatan perubahan dari v1:** `boxShadow.glow`/`glowStrong` (colored glow shadow) DIHAPUS — efek glow cuma kerja di atas background gelap; di atas card terang hasilnya keliatan kayak noda warna, bukan "nyala". Diganti `cardLift`: neutral elevation shadow (warna `ink` di opacity rendah) untuk efek "terangkat" — pattern standar buat card hover di light mode.

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
    background-color: #F7F3EC; /* paper */
    color: #231F1B;             /* ink */
    font-family: var(--font-body), sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-display), sans-serif;
    font-weight: 700;
    color: #231F1B; /* ink */
    line-height: 1.1;
  }

  ::selection {
    background-color: rgba(232, 137, 60, 0.25); /* ember tint */
    color: #231F1B;
  }

  /* Scrollbar */
  ::-webkit-scrollbar        { width: 6px; }
  ::-webkit-scrollbar-track  { background: #F7F3EC; }
  ::-webkit-scrollbar-thumb  { background: #DDD5C7; border-radius: 3px; }
  ::-webkit-scrollbar-thumb:hover { background: #E8893C; }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
}
```

---

## 5. Project Structure (unchanged dari v1)

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── Tag.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── SectionLabel.tsx
│   │   └── index.ts
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Stats.tsx        ← BARU di v2
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
│   └── utils.ts
├── data/
│   ├── projects.ts
│   ├── stack.ts
│   ├── experience.ts
│   └── achievements.ts
└── types/
    └── index.ts
```

Tidak ada folder `services/` — section itu di-drop, Stack + Projects yang carry beban itu.

---

## 6. Section Map & Layout

```
┌─────────────────────────────────────────────────────┐
│  NAVBAR    — sticky. Mobile hamburger WAJIB ada      │
│              (bug v1: overflow horizontal di mobile) │
├─────────────────────────────────────────────────────┤
│  HERO      — bg paper. Nama besar, role mono,        │
│              status indicator (blink, sage/sageDeep) │
│              Foto: BLOCKED — placeholder generic      │
│              lucide icon (BUKAN inisial "H"), muncul  │
│              cuma sekali di sini, bukan dobel di About│
├─────────────────────────────────────────────────────┤
│  STATS     — bg forest. BARU di v2. Angka besar,     │
│  (BARU)      bold: "1 Internship · 3 Production      │
│              Systems · 2+ Years" — data yang udah ada,│
│              dipresentasikan prominent (bukan kecil   │
│              tersembunyi di About kayak v1)           │
├─────────────────────────────────────────────────────┤
│  ABOUT     — bg paper. Text-only/single-column        │
│              sampai foto ready — JANGAN duplikasi     │
│              placeholder yang sama dari Hero          │
├─────────────────────────────────────────────────────┤
│  STACK     — bg panel. Isi gak berubah dari v1        │
├─────────────────────────────────────────────────────┤
│  PROJECTS  — bg paper. ProjectCard format TIDAK       │
│              BERUBAH — ini elemen yang udah bagus     │
├─────────────────────────────────────────────────────┤
│  EXPERIENCE — bg panel                                │
├─────────────────────────────────────────────────────┤
│  ACHIEVEMENTS — bg paper                              │
├─────────────────────────────────────────────────────┤
│  CONTACT   — bg forest. Bookend sama Stats band.      │
│              3 link cards                              │
├─────────────────────────────────────────────────────┤
│  FOOTER    — minimal                                  │
└─────────────────────────────────────────────────────┘
```

**Rhythm rationale:** 3 dark band (Stats, Contact) di antara 6 light section — sesuai rekomendasi critique "minimal 2 section beda background", bukan alternating tiap section (yang malah kacau).

**Section "Services/Capabilities" — DI-DROP.** Evidence-linked capability cards sempat dipertimbangkan tapi diputuskan redundant sama Projects section. Stack + Projects yang carry positioning "bisa apa".

**Yang SENGAJA tidak diambil dari referensi Olivia:** floating decorative badge ("Hello There!" tag, role badge mengambang). Critique gak pernah merekomendasikan ini — risikonya structural kalau diambil bisa keliatan terlalu mirip template asalnya. Yang diambil cuma: alternating bg, stats prominence, foto-driven hero.

---

## 7. The Signature Element (unchanged konsepnya, token diganti)

```tsx
<p className="font-mono text-sm text-sageDeep flex items-center gap-2">
  <span className="text-dust">›</span>
  available for internship
  <span className="animate-blink text-sageDeep">■</span>
</p>
```

Status indicator blinking cursor dipertahankan — ini elemen yang udah di-approve sejak v1 dan gak pernah dikritik. Cuma token yang berubah: `mint` → `sageDeep` (karena elemen ini ada di Hero, bg `paper` — pakai varian light-context).

---

## 8. Component Patterns

### 8.1 cn() Utility — unchanged

```ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### 8.2 SectionLabel — BARU: prop `tone` untuk dual-context

```tsx
interface SectionLabelProps {
  children: React.ReactNode;
  tone?: 'light' | 'dark';
}

export function SectionLabel({ children, tone = 'light' }: SectionLabelProps) {
  return (
    <p className={cn(
      'font-mono text-xs uppercase tracking-widest mb-3',
      tone === 'light' ? 'text-dust' : 'text-line',
    )}>
      {children}
    </p>
  );
}

// Usage di section light:  <SectionLabel>Projects</SectionLabel>
// Usage di section forest: <SectionLabel tone="dark">Snapshot</SectionLabel>
```

Penambahan prop ini perlu karena v1 gak pernah punya dua background context. Default `'light'` — non-breaking buat section yang gak butuh dark variant.

### 8.3 Button

```tsx
const variantStyles: Record<Variant, string> = {
  primary: cn(
    'bg-ember text-ink font-body font-medium',
    'hover:bg-ember/90',
    'focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2',
    'focus-visible:ring-offset-paper',
  ),
  ghost: cn(
    'bg-transparent text-ink border border-line font-body',
    'hover:border-ember hover:text-ember',
    'focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2',
    'focus-visible:ring-offset-paper',
  ),
};
```

Struktur lain (`forwardRef`, `min-h-[48px]`, props interface) sama persis dengan v1.

**Catatan WCAG:** `text-ink` (bukan `text-paper`) di primary — paper-on-ember cuma kontras 2.35. `ring-ink` (bukan `ring-ember`) — ember-vs-paper sebagai ring cuma 2.35, gagal syarat non-text minimum 3.0.

### 8.4 Tag

```tsx
type TagColor = 'gold' | 'sage' | 'default';

interface TagProps {
  children: React.ReactNode;
  color?: TagColor;
}

const colorStyles: Record<TagColor, string> = {
  gold:    'bg-gold/10 text-goldDeep border-gold/20',
  sage:    'bg-sage/10 text-sageDeep border-sage/20',
  default: 'bg-panel   text-dust     border-line',
};

export function Tag({ children, color = 'default' }: TagProps) {
  return (
    <span className={cn(
      'font-mono text-xs px-2.5 py-1 rounded border inline-flex items-center',
      colorStyles[color],
    )}>
      {children}
    </span>
  );
}
```

**Perubahan dari v1:** opsi warna `lavender`/`coral` DIHAPUS dari union type. `coral`/`ember` gak pernah valid sebagai text Tag (gagal kontras + melanggar rule "ember cuma CTA/headline/hover"). Drop di level TypeScript = gak bisa ke-misuse.

### 8.5 Badge

```tsx
type BadgeVariant = 'available' | 'building' | 'default';

const variantStyles: Record<BadgeVariant, string> = {
  available: 'bg-sage/10 text-sageDeep border-sage/20',
  building:  'bg-gold/10 text-goldDeep border-gold/20',
  default:   'bg-panel   text-dust     border-line',
};

export function Badge({ children, variant = 'default', dot = false }: BadgeProps) {
  return (
    <span className={cn(
      'inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-xs border',
      variantStyles[variant],
    )}>
      {dot && (
        <span
          className={cn(
            'w-1.5 h-1.5 rounded-full',
            variant === 'available' && 'bg-sage animate-pulse',
            variant === 'building'  && 'bg-gold animate-pulse',
            variant === 'default'   && 'bg-dust',
          )}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
```

**Perbaikan kontradiksi v1:** dokumen v1 sendiri gak konsisten — §6 bilang "currently building badge (**mint**)", tapi kode component aslinya pakai `coral`. Di-resolve: `available` → `sage` family (status murni, sesuai definisi awal), `building` → `gold` family (lebih ke label deskriptif daripada status biner, dan `gold` perannya emang "labels"). `ember`/`coral` gak dipakai sama sekali di Badge.

### 8.6 ProjectCard

```tsx
export function ProjectCard({
  title, role, problem, outcome,
  stack, githubUrl, liveUrl, isPrivate, featured,
}: ProjectCardProps) {
  return (
    <article
      className={cn(
        'group p-6 md:p-8 rounded-lg border border-line bg-panel',
        'transition-all duration-200',
        'hover:border-ember/50 hover:shadow-cardLift',
        featured && 'border-ember/30',
      )}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="font-display text-xl text-ink mb-1">{title}</h3>
          <p className="font-mono text-xs text-dust">{role}</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          {isPrivate && <span className="font-mono text-xs text-dust">private repo</span>}
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer"
               aria-label={`View ${title} on GitHub`}
               className="text-dust hover:text-ink transition-colors">
              <Github size={18} strokeWidth={1.5} />
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer"
               aria-label={`View ${title} live`}
               className="text-dust hover:text-ink transition-colors">
              <ExternalLink size={18} strokeWidth={1.5} />
            </a>
          )}
        </div>
      </div>

      <p className="font-body text-sm text-dust mb-1 leading-relaxed">
        <span className="text-ink/80">Problem: </span>{problem}
      </p>
      <p className="font-body text-sm text-dust mb-5 leading-relaxed">
        <span className="text-ink/80">Outcome: </span>{outcome}
      </p>

      <div className="flex flex-wrap gap-2">
        {stack.map((tech) => <Tag key={tech} color="gold">{tech}</Tag>)}
      </div>
    </article>
  );
}
```

**Perubahan dari v1:** `hover:shadow-glow` → `hover:shadow-cardLift` (glow gak kerja di light mode). `hover:text-coral` di icon link → `hover:text-ink` (ember gagal kontras sebagai icon foreground). Tag stack pakai `color="gold"` bukan `"lavender"`. Format Problem/Outcome TIDAK BERUBAH — ini elemen terbaik dari v1, jangan disentuh strukturnya.

---

## 9. Data Layer

Struktur `Project`/`StackGroup` interface unchanged dari v1. Konten `projects.ts`/`stack.ts` tidak berubah isinya — cuma referensi `Tag color` di contoh dokumentasi yang update ke `"gold"`.

---

## 10. Animation Rules (unchanged dari v1)

Sama persis dengan v1 — max 3 `motion.div` per section, no parallax, no scroll-jacking, `prefers-reduced-motion` selalu dihandle. **Sengaja tidak menambah** floating-badge decorative motion ala referensi Olivia — itu bukan rekomendasi dari critique, dan menambahnya menaikkan risiko "keliatan kayak clone template".

---

## 11. Copy & Content Rules (unchanged dari v1)

Aturan sama — no filler phrase, no bullet di About, problem/outcome satu kalimat. Audience tetap job-seeking developer, jadi CTA tetap "View Projects" / "Get in touch", BUKAN "Hire Me" / "View My Portfolio" ala freelance framing.

---

## 12. Naming Conventions (unchanged dari v1)

---

## 13. Accessibility Floor

| Requirement              | Implementation                                                 |
|--------------------------|------------------------------------------------------------------|
| Color contrast — light context | `ink` on `paper`/`panel`: 14.8/15.7 (jauh di atas AA). `dust`: 4.50/4.78 (lolos AA-normal, dikoreksi dari draft awal yang gagal di 3.39). `goldDeep`/`sageDeep`: 4.52/4.79 (lolos, dikoreksi dari `gold`/`sage` mentah yang gagal di 2.03/2.99). |
| Color contrast — dark context (`forest`) | `paper` text: 12.32. `line` (dual-role muted): 9.36. `ember`/`gold`: 5.24/6.06. `sage`: 4.12 — **lolos cuma di large text**, gagal di teks kecil. |
| `ember` sebagai foreground | TIDAK PERNAH valid di atas `paper`/`panel` (max ~2.5 di semua skenario: text, ring, border). Cuma valid sebagai background fill, atau foreground di atas `forest`. |
| Border/divider (`line`) | Kontras vs `paper` cuma 1.32 — di bawah syarat non-text 3.0, TAPI ini konsisten dengan v1 (`border` lama vs `bg` lama juga cuma 1.34). Divider memang dekoratif by design, mengandalkan `shadow-card`/spacing buat boundary, bukan kontras warna sendirian. |
| Keyboard navigation      | `focus-visible:ring-2 focus-visible:ring-ink` (bukan `ring-ember` — lihat §8.3) |
| Touch targets            | `min-h-[48px]` — unchanged |
| Reduced motion           | unchanged, sudah di globals.css |
| Semantic HTML            | unchanged |

Semua angka di atas dihitung langsung (relative luminance + WCAG formula), bukan estimasi visual.

---

## 14. Absolute Rules (Do / Don't)

### DO (tambahan dari v1)
- Selalu pakai `goldDeep`/`sageDeep` untuk TEKS di atas `paper`/`panel`. Pakai `gold`/`sage` (non-Deep) cuma untuk background-tint, icon, atau foreground di atas `forest`.
- Selalu pakai `line` untuk muted-text kalau section-nya `forest` — JANGAN pakai `dust` di situ (gagal kontras).

### DON'T (tambahan dari v1)
- ❌ Jangan pakai `ember` sebagai text/icon/ring color di atas `paper`/`panel` — apapun konteksnya, ini selalu gagal WCAG.
- ❌ Jangan pakai varian `*Deep` (goldDeep/sageDeep) di atas `forest` — itu khusus light-context, gagal kontras di dark band.
- ❌ Jangan duplikasi placeholder foto yang sama di lebih dari satu section.
- ❌ Jangan tambah floating decorative badge ala referensi tanpa konfirmasi eksplisit — bukan bagian dari struktur yang diadaptasi.

Rules lain (no `#000000`/`#ffffff`, no `any`, no CDN font, dst) — unchanged dari v1.

---

## 15. Scaffold Checklist (Per Component) — unchanged strukturnya

Tambahan satu item: **"Kalau component dipakai di section `forest`, pastikan pakai token dark-context (lihat §2.1 Dual Context Rule), bukan token light-context default."**

---

## 16. Out of Scope

- **Light mode**: ~~Tidak didukung~~ — **ini sudah jadi mode utama di v2.** Baris ini dihapus dari restriction.
- **Clone 1:1 referensi Olivia Smith**: di luar scope, secara eksplisit. Struktur diadaptasi, palette & copy orisinal — bukan reproduksi visual template.
- **Multi-language (i18n)**: unchanged, masih di luar scope.
- **CMS / dynamic content**: unchanged, masih statis di `data/`.
- **Blog**: unchanged, masih di luar scope v1/v2.
- **Section "Services/Capabilities"**: dipertimbangkan, di-drop. Stack + Projects yang carry.

---

## Open Items (belum selesai, di luar scope dokumen ini)

- **Foto asli** — blocker buat Hero & About. Placeholder: generic lucide icon (bukan inisial), muncul sekali di Hero saja.
- **`coding-guide.md` belum diupdate** — Known Blockers Register (§7) perlu entry baru untuk foto, terpisah dari entry `experience.ts`/`achievements.ts` yang sudah ada.
- **Stats numbers** ("1 Internship · 3 Production Systems · 2+ Years") — diambil dari perbandingan di `design_critique.md`, perlu dikonfirmasi masih akurat sebelum masuk ke `data/`.