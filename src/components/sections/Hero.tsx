'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import { createStaggerContainer, fadeInVariant } from '@/lib/motion'
import { ScrambleText } from '@/components/animations/ScrambleText'

// ─── Animation variants ───────────────────────────────────────────────────────

const stagger = createStaggerContainer(0.08, 0.3)

const lineUp = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const fadeIn = fadeInVariant

const floatUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 1.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

// ─── Tech stack badges ────────────────────────────────────────────────────────

const techBadges = [
  { name: 'Laravel', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
  { name: 'PHP', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
  { name: 'Node.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'MySQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
]

// ─── Component ────────────────────────────────────────────────────────────────

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col overflow-hidden"
    >
      {/* ── Full-bleed background photo ──────────────────────────────────── */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/hero-workspace.png"
          alt="Cinematic developer workspace at night — laptop with code, amber desk lamp, books"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        {/* Dark scrim for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/65" />
        {/* Subtle dot grid overlay for technical feel */}
        <div className="absolute inset-0 dot-grid opacity-40" />
      </div>

      {/* ── Nav spacer ───────────────────────────────────────────────────── */}
      <div className="h-16 shrink-0" />

      {/* ── Content column ───────────────────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex flex-col max-w-[1400px] w-full mx-auto px-6 md:px-12 lg:px-20">

        {/* Push headline toward lower-center of viewport */}
        <div className="flex-[1.15]" />

        {/* ── Mono tagline ─────────────────────────────────────────────── */}


        {/* ── Headline — massive serif, tight tracking ───────────────── */}
        <motion.h1
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="mb-8 md:mb-10"
        >
          {[
            'Backend',
            'Developer',
          ].map((line, i) => (
            <motion.span
              key={i}
              variants={lineUp}
              className="block font-serif font-black text-white tracking-tightest"
              style={{
                fontSize: 'clamp(3rem, 7.5vw, 7.5rem)',
                lineHeight: '0.98',
              }}
            >
              <ScrambleText text={line} />
            </motion.span>
          ))}
        </motion.h1>

        {/* ── CTA row ─────────────────────────────────────────────────── */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.9 }}
          className="flex items-center gap-5 mt-4"
        >
          <a
            href="#work"
            className="inline-flex items-center justify-center font-mono text-[12px] md:text-[13px] uppercase tracking-widest font-medium text-white bg-white/5 border border-white/30 px-7 py-3 hover:bg-white/10 hover:border-white transition-all duration-200 focus-ring rounded-sm backdrop-blur-sm"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center font-mono text-[12px] md:text-[13px] uppercase tracking-widest font-medium text-white/60 hover:text-white transition-colors duration-200 focus-ring group"
          >
            Contact <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>

        {/* Spacer before bottom descriptor */}
        <div className="flex-[0.55]" />

        {/* ── Bottom row: tech badges (left) + descriptor text (right) ── */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-10 md:pb-16">
          {/* Tech badges — CLI/kbd style */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-wrap gap-3 order-2 md:order-1"
          >
            {techBadges.map((badge, i) => (
              <motion.span
                key={badge.name}
                custom={i}
                variants={floatUp}
                initial="hidden"
                animate="visible"
                className="bg-white/5 border border-white/20 px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-white/90 flex items-center gap-2 rounded-sm shadow-[0_2px_0_0_rgba(255,255,255,0.1)] backdrop-blur-sm"
              >
                <img src={badge.iconUrl} alt={badge.name} className="w-3.5 h-3.5 object-contain" />
                {badge.name}
              </motion.span>
            ))}
          </motion.div>

        </div>
      </div>

      {/* ── Scroll indicator ────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] text-white/40 tracking-widest uppercase">
          scroll
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/50 to-transparent animate-scroll-bounce" />
      </motion.div>
    </section>
  )
}
