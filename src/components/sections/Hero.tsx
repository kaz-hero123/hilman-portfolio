'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-surface-dark min-h-[100svh] flex items-center overflow-hidden noise"
    >
      {/* Subtle radial glow behind content */}
      <div
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(200,148,52,0.04) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 w-full pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-end">

          {/* Text content */}
          <div className="space-y-6">
            {/* Name — prominent */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans text-body text-text-secondary"
            >
              Hilman Nidal Hamzi
            </motion.p>

            {/* Thesis headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-mono text-display text-text-primary"
              style={{ textWrap: 'balance' } as React.CSSProperties}
            >
              I build systems that hold when the edge cases hit.
            </motion.h1>

            {/* Proof line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="font-sans text-body text-text-secondary max-w-lg"
            >
              Backend engineer — 3 systems shipped to production, 1 more in progress.
              <br />
              <span className="text-accent">Looking for internship opportunities, August 2026.</span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex items-center gap-8 pt-2"
            >
              <a
                href="#work"
                className="font-sans text-[0.9375rem] font-medium text-accent hover:text-accent-hover link-draw transition-colors focus-ring"
              >
                View my work &darr;
              </a>
              <a
                href="mailto:hilmannidal@gmail.com"
                className="font-sans text-[0.9375rem] text-text-secondary hover:text-text-primary link-draw transition-colors focus-ring"
              >
                Get in touch
              </a>
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden md:block"
          >
            <div className="relative w-44 h-56 rounded-lg overflow-hidden border border-white/[0.08] shadow-lg shadow-black/20">
              <Image
                src="/avatar.png"
                alt="Hilman Nidal Hamzi"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Subtle warm overlay */}
              <div
                className="absolute inset-0 mix-blend-soft-light opacity-30"
                style={{ background: 'linear-gradient(135deg, #C89434 0%, transparent 60%)' }}
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-white/[0.12] flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-text-secondary/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
