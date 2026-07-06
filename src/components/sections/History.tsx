'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ChevronRight } from 'lucide-react'
import { fadeUpVariant, createStaggerContainer } from '@/lib/motion'

// ─── Animation ────────────────────────────────────────────────────────────────

const fadeUp = fadeUpVariant
const stagger = createStaggerContainer(0.08, 0.1)

// ─── Data ─────────────────────────────────────────────────────────────────────

const timeline = [
  {
    year: 'Ketua MPK',
    period: '2021',
    position: 'below' as const,
    text: 'Student council leadership. Organizational and coordination experience before technical work.',
  },
  {
    year: 'SMK',
    period: '2022–2025',
    position: 'above' as const,
    text: 'Vocational study at SMKN 3 Pamekasan, RPL/PPLG (software engineering) track.',
  },
  {
    year: 'Internship',
    period: '2024',
    position: 'below' as const,
    text: 'HummaTech Indonesia. Built the RFID attendance system deployed to a live school.',
  },
  {
    year: 'Self-study',
    period: '2024–2025',
    position: 'above' as const,
    text: 'Rebuilt web dev fundamentals through a structured roadmap: Git \u2192 HTML/CSS \u2192 JavaScript \u2192 PHP \u2192 Laravel.',
  },
  {
    year: 'UKK Project',
    period: '2025',
    position: 'below' as const,
    text: 'Vocational competency exam. Built OwlBook \u2014 a digital library system with RBAC and state-machine borrowing.',
  },
  {
    year: 'PENS 2026',
    period: 'Upcoming',
    position: 'above' as const,
    text: 'Incoming D4 Software Engineering student at PENS Surabaya. Starts August 2026 \u2014 upcoming.',
  },
]

// ─── Component ────────────────────────────────────────────────────────────────

export function History() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  return (
    <section id="history" className="bg-mist" ref={containerRef}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-28 pb-28">
        {/* ── Header ─────────────────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-[720px] mb-20"
        >
          <p className="font-mono text-[11px] font-medium tracking-[0.12em] uppercase text-accent mb-5">
            {'// history'}
          </p>
          <h2
            className="font-serif font-bold text-ink tracking-tight mb-6"
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              lineHeight: '1.05',
            }}
          >
            The path so far
          </h2>
          <p className="font-body text-[16px] leading-[1.7] text-dim mb-8">
            From student council to vocational school to internship to
            self-directed study. Each step built on the last.
          </p>

          {/* CTA row */}
          <div className="flex items-center gap-5">
            <a
              href="#work"
              className="inline-flex items-center justify-center font-mono text-[12px] md:text-[13px] uppercase tracking-widest font-medium text-ink border border-ink px-7 py-3 hover:bg-ink hover:text-white transition-all duration-200 focus-ring rounded-sm"
            >
              Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 font-mono text-[12px] md:text-[13px] uppercase tracking-widest font-medium text-dim hover:text-ink transition-colors duration-200 focus-ring group"
            >
              Contact
              <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </motion.div>

        {/* ── Timeline ────────────────────────────────────────────────────── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="relative"
        >
          {/* ── Desktop timeline (hidden on mobile) ────────────────────── */}
          <div className="hidden md:block">
            {/* Above-line entries */}
            <div className="grid grid-cols-6 gap-0 mb-6">
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
                  <p className="font-mono text-[11px] text-accent tracking-wide mb-1">
                    {entry.period}
                  </p>
                  <h3 className="font-serif font-bold text-[1.5rem] leading-[1.1] tracking-tight text-ink mb-2">
                    {entry.year}
                  </h3>
                  <p className="font-body text-[14px] leading-[1.65] text-dim">
                    {entry.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Horizontal line with dots — centered */}
            <div className="relative flex items-center">
              <div className="absolute inset-x-4 h-[1px] bg-ink/20" />
              <motion.div 
                className="absolute inset-x-4 h-[2px] bg-accent origin-left"
                style={{ scaleX: scrollYProgress }}
              />
              <div className="relative grid grid-cols-6 w-full">
                {timeline.map((entry) => (
                  <div key={entry.year} className="flex justify-center">
                    <div className="w-3 h-3 rounded-full bg-accent relative z-10 ring-4 ring-mist" />
                  </div>
                ))}
              </div>
            </div>

            {/* Below-line entries */}
            <div className="grid grid-cols-6 gap-0 mt-6">
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
                  <p className="font-mono text-[11px] text-accent tracking-wide mb-1">
                    {entry.period}
                  </p>
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
                  <div className="w-3 h-3 rounded-full bg-accent shrink-0 ring-4 ring-mist" />
                  <div className="w-[1px] flex-1 bg-ink/15 mt-2" />
                </div>
                {/* Content */}
                <div className="pb-2">
                  <p className="font-mono text-[11px] text-accent tracking-wide mb-1">
                    {entry.period}
                  </p>
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
