'use client';

/**
 * About — Section
 * Ref: design-system.md §6, §11
 *
 * Gate C rules:
 * ✅ Dibungkus SectionWrapper
 * ✅ Maksimal 3 motion.div
 * ✅ Dua kolom: teks kiri, placeholder foto kanan
 * ✅ 3–4 kalimat, bukan bullet points
 * ✅ Badge "currently building" dengan mint
 */

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/layout';
import { SectionLabel, Badge } from '@/components/ui';
import { fadeInUp, staggerContainer } from '@/lib/motion';

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
          className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-start"
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
          </div>

          {/* Photo placeholder — right */}
          <div
            className="w-48 h-48 md:w-56 md:h-56 rounded-lg border border-border bg-surface
                        flex items-center justify-center shrink-0 mx-auto md:mx-0"
            aria-hidden="true"
          >
            <span className="font-mono text-xs text-muted">photo</span>
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
