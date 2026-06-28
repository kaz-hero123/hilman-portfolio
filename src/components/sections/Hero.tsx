'use client'

/**
 * Hero — Section 1 (dark band)
 * PRD §6.1
 *
 * Layout: asymmetric — text left (60%), photo right (40%)
 * Headline: IBM Plex Mono, display size, whitespace-pre-line
 * Proof: mono eyebrow, uppercase, text-muted-dark
 * Links: plain text, underline draws left-to-right in accent-dark
 *
 * FORBIDDEN: marquee, blinking cursor, button CTAs, badge, stats, floating avatar tags
 */

import { motion } from 'framer-motion'
import Image from 'next/image'
import { hero } from '@/data/hero'

export function Hero() {
  return (
    <section
      id="hero"
      className="bg-band-dark min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full py-24">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-16 items-center">

          {/* LEFT — text content (60%) */}
          <div className="relative z-10">
            {/* Headline — display mono, thesis statement */}
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="font-mono text-display font-bold text-text-primary-dark whitespace-pre-line mb-8"
            >
              {hero.headline}
            </motion.h1>

            {/* Proof line — one factual statement */}
            <p className="font-mono text-eyebrow uppercase text-text-muted-dark mb-10 tracking-widest">
              {hero.proof}
            </p>

            {/* Two plain text links — NOT buttons */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
              <a
                href={hero.primaryLink.href}
                className="font-mono text-eyebrow uppercase text-accent-dark link-underline min-h-[48px] flex items-center focus-visible:focus-ring"
              >
                {hero.primaryLink.label} →
              </a>
              <a
                href={hero.secondaryLink.href}
                className="font-mono text-eyebrow uppercase text-text-muted-dark link-underline min-h-[48px] flex items-center focus-visible:focus-ring"
              >
                {hero.secondaryLink.label}
              </a>
            </div>
          </div>

          {/* RIGHT — photo with duotone treatment (40%) */}
          <div
            className="hidden md:block relative"
            aria-hidden="true"
          >
            <div className="relative w-full aspect-[4/5] max-w-xs mx-auto overflow-hidden rounded-sm">
              {/* Duotone overlay using accent-dark */}
              <div
                className="absolute inset-0 z-10 mix-blend-color"
                style={{ backgroundColor: '#B8862E' }}
              />
              <Image
                src="/avatar.png"
                alt="Hilman Nidal Hamzi"
                fill
                className="object-cover object-top grayscale"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
