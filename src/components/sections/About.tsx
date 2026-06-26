'use client';

/**
 * About — Section
 * Ref: design-system.md §6, §11
 *
 * Visual Upgrade:
 * - Styled editorial photo frame (rotated -3deg, coral border, corner dot)
 * - Stat numbers row di bawah paragraf
 */

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/layout';
import { SectionLabel, Badge } from '@/components/ui';
import { fadeInUp, staggerContainer } from '@/lib/motion';

const stats = [
  { value: '1', label: 'Internship' },
  { value: '3', label: 'Production projects' },
  { value: '2+', label: 'Years coding' },
];

export function About() {
  return (
    <SectionWrapper id="about">
      {/* motion.div 1 — stagger wrapper */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {/* motion.div 2 — heading */}
        <motion.div variants={fadeInUp} className="mb-12">
          <SectionLabel>about</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl text-text">
            Who I am
          </h2>
        </motion.div>

        {/* motion.div 3 — two-column content */}
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-12 items-start"
        >
          {/* Text — left */}
          <div className="space-y-5">
            <p className="font-body text-base md:text-lg text-muted leading-relaxed">
              I&apos;m a backend-focused developer from Indonesia, currently studying at SMK,
              with hands-on production experience building systems for real users.
              My internship at HummaTech gave me early exposure to shipping backend
              infrastructure that schools depend on daily.
            </p>
            <p className="font-body text-base md:text-lg text-muted leading-relaxed">
              I gravitate toward Laravel for its structure and PHP&apos;s practicality,
              but I pick the right tool for the job — Node.js when the use case calls for it,
              Python when I need to automate data workflows.
              What I care about most is systems that are readable, reliable, and maintainable.
            </p>
            <p className="font-body text-base md:text-lg text-muted leading-relaxed">
              Outside of backend work, I&apos;ve been exploring full-stack development
              and AI-integrated tooling — Rapor AI being a recent example of combining
              a vision model with a real problem that needed solving.
            </p>

            {/* Currently building badge */}
            <div className="pt-2">
              <Badge variant="building" dot>
                currently building: this portfolio
              </Badge>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              {stats.map(({ value, label }) => (
                <div key={label} className="space-y-1">
                  <p className="font-display text-3xl font-bold text-coral">{value}</p>
                  <p className="font-mono text-xs text-muted leading-snug">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Photo frame — right (editorial styled) */}
          <div className="flex justify-center md:justify-end" aria-hidden="true">
            <div className="relative">
              {/* Shadow/glow layer */}
              <div
                className="absolute inset-0 rounded-xl opacity-30"
                style={{
                  background: 'linear-gradient(135deg, #F2966B, #B3A0D6)',
                  filter: 'blur(24px)',
                  transform: 'scale(0.9) translateY(12px)',
                }}
              />
              {/* Rotated decorative border */}
              <div
                className="absolute inset-0 rounded-xl border border-lavender/30"
                style={{ transform: 'rotate(3deg)' }}
              />
              {/* Main frame */}
              <div
                className="relative w-52 h-64 md:w-60 md:h-72 rounded-xl border-2 border-coral/40 bg-surface overflow-hidden"
                style={{
                  transform: 'rotate(-2deg)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
                }}
              >
                {/* Background gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(160deg, #222222 0%, #1a1a1a 50%, rgba(179,160,214,0.05) 100%)',
                  }}
                />
                {/* Grid lines — editorial feel */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, #f0ece4 0px, #f0ece4 1px, transparent 1px, transparent 32px), repeating-linear-gradient(90deg, #f0ece4 0px, #f0ece4 1px, transparent 1px, transparent 32px)',
                  }}
                />
                {/* Initials centered */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <span
                    className="font-display text-7xl font-bold"
                    style={{
                      background: 'linear-gradient(135deg, #F2966B 30%, #B3A0D6 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    HN
                  </span>
                  <span className="font-mono text-xs text-muted tracking-[0.2em] uppercase">Hilman Nidal</span>
                </div>
                {/* Corner dot accent */}
                <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-coral opacity-80" />
                <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-lavender opacity-60" />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
