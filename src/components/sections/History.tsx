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
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const timeline = [
  {
    year: '2024',
    position: 'below' as const,
    text: 'Lead design technologist at Stamen Studio. Bridging the gap between design intent and production code.',
  },
  {
    year: '2022',
    position: 'above' as const,
    text: 'Senior product designer at Field Guide Inc. Shipped a design system used by three distinct product teams.',
  },
  {
    year: '2020',
    position: 'below' as const,
    text: 'Independent creative director. Launched two editorial platforms and a direct-to-consumer goods brand.',
  },
  {
    year: '2018',
    position: 'above' as const,
    text: 'UI engineer at The Manual. Built the front-end for a long-form journalism platform from scratch.',
  },
  {
    year: '2016',
    position: 'below' as const,
    text: 'Designer at Periscope Studio. Learned the weight of a well-set page and the discipline of a deadline.',
  },
]

// ─── Component ────────────────────────────────────────────────────────────────

export function History() {
  return (
    <section id="history" className="bg-mist">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-28 pb-28">
        {/* ── Header ─────────────────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-[720px] mb-20"
        >
          <p className="font-body text-[11px] font-semibold tracking-[0.12em] uppercase text-ink mb-5">
            History
          </p>
          <h2
            className="font-serif font-black text-ink tracking-tight mb-6"
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              lineHeight: '1.05',
            }}
          >
            A decade of making things that hold their shape
          </h2>
          <p className="font-body text-[16px] leading-[1.7] text-dim mb-8">
            I have worked with studios, agencies, and directly with founders.
            The common thread is a respect for the work.
          </p>

          {/* CTA row */}
          <div className="flex items-center gap-6">
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
          </div>
        </motion.div>

        {/* ── Timeline — horizontal with alternating above/below ────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="relative"
        >
          {/* ── Desktop timeline (hidden on mobile) ────────────────────── */}
          <div className="hidden md:block">
            {/* Above-line entries (2022, 2018) */}
            <div className="grid grid-cols-5 gap-0 mb-4">
              {timeline.map((entry) => (
                <motion.div
                  key={entry.year}
                  variants={fadeUp}
                  className={
                    entry.position === 'above'
                      ? 'px-4'
                      : 'px-4 invisible'
                  }
                >
                  <h3 className="font-serif font-bold text-[1.5rem] leading-[1.1] tracking-tight text-ink mb-2">
                    {entry.year}
                  </h3>
                  <p className="font-body text-[14px] leading-[1.65] text-dim">
                    {entry.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Horizontal line with dots */}
            <div className="relative flex items-center">
              <div className="absolute inset-x-0 h-[2px] bg-ink" />
              <div className="relative grid grid-cols-5 w-full">
                {timeline.map((entry) => (
                  <div key={entry.year} className="flex justify-start pl-0">
                    <div className="w-3 h-3 rounded-full bg-ink relative z-10" />
                  </div>
                ))}
              </div>
            </div>

            {/* Below-line entries (2024, 2020, 2016) */}
            <div className="grid grid-cols-5 gap-0 mt-4">
              {timeline.map((entry) => (
                <motion.div
                  key={entry.year}
                  variants={fadeUp}
                  className={
                    entry.position === 'below'
                      ? 'px-4'
                      : 'px-4 invisible'
                  }
                >
                  <h3 className="font-serif font-bold text-[1.5rem] leading-[1.1] tracking-tight text-ink mb-2">
                    {entry.year}
                  </h3>
                  <p className="font-body text-[14px] leading-[1.65] text-dim">
                    {entry.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Mobile timeline (vertical stack, shown on small screens) ── */}
          <div className="md:hidden space-y-8">
            {timeline.map((entry) => (
              <motion.div
                key={entry.year}
                variants={fadeUp}
                className="flex gap-5"
              >
                {/* Dot + vertical line */}
                <div className="flex flex-col items-center pt-1">
                  <div className="w-3 h-3 rounded-full bg-ink shrink-0" />
                  <div className="w-[2px] flex-1 bg-ink/20 mt-2" />
                </div>
                {/* Content */}
                <div className="pb-2">
                  <h3 className="font-serif font-bold text-[1.35rem] leading-[1.1] tracking-tight text-ink mb-2">
                    {entry.year}
                  </h3>
                  <p className="font-body text-[14px] leading-[1.65] text-dim">
                    {entry.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
