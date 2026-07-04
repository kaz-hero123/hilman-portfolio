'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import { createStaggerContainer, fadeInVariant } from '@/lib/motion'

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
          src="/hero-editorial.png"
          alt="Warm editorial photo — textured amber fabric on a reading chair"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        {/* Dark scrim for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/30 to-black/40" />
      </div>

      {/* ── Nav spacer ───────────────────────────────────────────────────── */}
      <div className="h-16 shrink-0" />

      {/* ── Content column ───────────────────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex flex-col max-w-[1400px] w-full mx-auto px-6 md:px-12 lg:px-20">

        {/* Push headline toward lower-center of viewport */}
        <div className="flex-[1.15]" />

        {/* ── Headline — massive serif, tight tracking ───────────────── */}
        <motion.h1
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="mb-8 md:mb-10"
        >
          {[
            'I build things',
            'that work and',
            'write them',
            'clean',
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
              {line}
            </motion.span>
          ))}
        </motion.h1>

        {/* ── CTA row — "Work" outlined + "Contact →" ghost ──────────── */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.9 }}
          className="flex items-center gap-5"
        >
          <a
            href="#work"
            className="inline-flex items-center justify-center font-body text-[14px] font-medium text-white border border-white/60 px-7 py-3 hover:bg-white/10 transition-colors duration-200 focus-ring"
          >
            Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center font-body text-[14px] font-medium text-white/70 hover:text-white transition-colors duration-200 focus-ring"
          >
            Contact →
          </a>
        </motion.div>

        {/* Spacer before bottom descriptor */}
        <div className="flex-[0.55]" />

        {/* ── Bottom-right descriptor text ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.4, ease: 'easeOut' }}
          className="flex justify-end pb-10 md:pb-16"
        >
          <p className="font-body text-[15px] md:text-[16px] leading-[1.65] text-white/75 max-w-[440px] text-right">
            A designer and developer focused on editorial craft and
            structural clarity. This is where the grid meets the sentence.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
