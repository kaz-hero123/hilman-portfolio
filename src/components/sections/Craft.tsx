'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

// ─── Animation ────────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

// ─── Icons — editorial line-weight SVGs matching the design ───────────────────

function TypographyIcon({ className }: { className?: string }) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Letter A with baseline */}
      <path d="M8 28L18 6L28 28" />
      <path d="M12 20H24" />
      <line x1="4" y1="32" x2="32" y2="32" />
    </svg>
  )
}

function CodeIcon({ className }: { className?: string }) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Compass / scissors — design tool figure */}
      <circle cx="18" cy="8" r="3" />
      <path d="M18 11V20" />
      <path d="M18 20L10 32" />
      <path d="M18 20L26 32" />
    </svg>
  )
}

function ArchitectureIcon({ className }: { className?: string }) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Compass / divider figure */}
      <circle cx="18" cy="8" r="3" />
      <path d="M18 11V18" />
      <path d="M12 32L18 18L24 32" />
    </svg>
  )
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Globe with grid lines */}
      <circle cx="18" cy="18" r="14" />
      <ellipse cx="18" cy="18" rx="6" ry="14" />
      <line x1="4" y1="18" x2="32" y2="18" />
      <path d="M6 10H30" />
      <path d="M6 26H30" />
    </svg>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: TypographyIcon,
    title: 'Editorial design and art direction',
    description:
      'Grid systems, typographic hierarchy, and visual pacing for long-form narratives and brand storytelling.',
  },
  {
    icon: CodeIcon,
    title: 'Front-end development and systems',
    description:
      'Clean, semantic code with a focus on performance, accessibility, and component-driven architecture.',
  },
  {
    icon: ArchitectureIcon,
    title: 'Content architecture and strategy',
    description:
      'Structuring information so it breathes. Sitemaps, taxonomies, and content models that scale.',
  },
  {
    icon: GlobeIcon,
    title: 'Brand identity and visual language',
    description:
      'Logos, color systems, and typography palettes that work as hard as the words they frame.',
  },
]

// ─── Component ────────────────────────────────────────────────────────────────

export function Craft() {
  return (
    <section id="craft" className="bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-28 pb-24">
        {/* ── Header — split layout ──────────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16 md:mb-20"
        >
          {/* Left: label + heading */}
          <div>
            <p className="font-body text-[11px] font-semibold tracking-[0.12em] uppercase text-ink mb-5">
              Craft
            </p>
            <h2
              className="font-serif font-black text-ink tracking-tight"
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
                lineHeight: '1.05',
              }}
            >
              The tools are simple but the execution is not
            </h2>
          </div>

          {/* Right: descriptor paragraph */}
          <div className="md:pt-8">
            <p className="font-body text-[16px] leading-[1.7] text-dim max-w-[480px]">
              I work with a small set of disciplines. I know them cold. The goal
              is always structural integrity and a clean read.
            </p>
          </div>
        </motion.div>

        {/* ── Hairline ───────────────────────────────────────────────────── */}
        <hr className="border-0 border-t border-[#E5E5E5] mb-14" />

        {/* ── 4-column service cards ──────────────────────────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-20"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={fadeUp}>
              {/* Icon */}
              <service.icon className="text-ink mb-6 w-9 h-9" />

              {/* Title */}
              <h3 className="font-serif font-bold text-[1.35rem] leading-[1.15] tracking-tight text-ink mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-body text-[14px] leading-[1.7] text-dim">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Bottom CTA row ─────────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center gap-6"
        >
          <a
            href="#work"
            className="font-body text-[14px] font-medium text-ink border border-ink px-8 py-3 hover:bg-ink hover:text-white transition-colors duration-200 focus-ring"
          >
            Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 font-body text-[14px] font-medium text-ink hover:text-dim transition-colors duration-150 focus-ring"
          >
            Contact
            <ChevronRight size={14} strokeWidth={1.75} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
