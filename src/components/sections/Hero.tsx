'use client'

import { motion } from 'framer-motion'
import { User } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'

function StatusIndicator() {
  return (
    <p className="font-mono text-sm text-sageDeep flex items-center gap-2">
      <span className="text-dust" aria-hidden="true">›</span>
      available for internship
      <span className="animate-blink text-sageDeep" aria-hidden="true">■</span>
    </p>
  )
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-paper min-h-[100svh] flex items-center overflow-hidden"
    >
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(232,137,60,0.05) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 w-full pt-24 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center">

          <div className="space-y-5 max-w-xl">

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <SectionLabel>Backend Developer</SectionLabel>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-display text-display text-ink leading-[1.08]"
            >
              Hilman Nidal Hamzi.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="font-mono text-sm text-dust"
            >
              › Backend Developer · Laravel / Full-Stack Engineer
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="font-body text-body text-dust leading-relaxed"
            >
              3 systems shipped to production. I build backends that hold when the edge
              cases hit — and I document every decision I reject along the way.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              <StatusIndicator />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="flex items-center gap-6 pt-2"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 font-body text-[0.9375rem] font-medium bg-ember text-ink px-5 py-2.5 rounded min-h-[48px] hover:bg-ember/90 transition-colors focus-ring"
              >
                View Projects
                <span aria-hidden="true">↓</span>
              </a>
              <a
                href="mailto:hilmannidal@gmail.com"
                className="font-body text-[0.9375rem] text-dust hover:text-ink link-draw transition-colors focus-ring"
              >
                Get in touch
              </a>
            </motion.div>

          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden md:flex justify-center"
          >
            <div
              className="relative w-44 h-56 rounded-lg border border-line bg-panel flex items-center justify-center shadow-card overflow-hidden"
              aria-label="Photo placeholder — real photo coming soon"
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(160deg, rgba(232,137,60,0.04) 0%, transparent 60%)',
                }}
                aria-hidden="true"
              />
              <User
                size={56}
                strokeWidth={1}
                className="text-line"
                aria-hidden="true"
              />
            </div>
          </motion.div>

        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-line flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-dust/40" />
        </motion.div>
      </motion.div>
    </section>
  )
}
