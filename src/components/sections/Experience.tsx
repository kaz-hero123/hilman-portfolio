'use client';

/**
 * Experience — Section
 * Ref: design-system.md §6 (timeline, 2 entries)
 *
 * Gate C rules:
 * ✅ Dibungkus SectionWrapper
 * ✅ Maksimal 3 motion.div
 * ✅ Data dari @/data/experience.ts
 *
 * NOTE: Gate A blocker — experience data masih ada TODO fields.
 * Section tetap dirender, tapi content akan terlihat TODO sampai data diisi.
 */

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/layout';
import { SectionLabel, Tag } from '@/components/ui';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import { experiences } from '@/data/experience';

export function Experience() {
  return (
    <SectionWrapper id="experience">
      {/* motion.div 1 — stagger wrapper */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {/* motion.div 2 — heading */}
        <motion.div variants={fadeInUp} className="mb-12">
          <SectionLabel>experience</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl text-text">
            Where I&apos;ve worked
          </h2>
        </motion.div>

        {/* motion.div 3 — timeline */}
        <motion.div variants={fadeInUp} className="space-y-0">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative">
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div
                  className="absolute left-[7px] top-10 bottom-0 w-px bg-border"
                  aria-hidden="true"
                />
              )}

              <div className="flex gap-6">
                {/* Timeline dot */}
                <div
                  className="w-3.5 h-3.5 rounded-full border-2 border-coral bg-bg shrink-0 mt-1.5"
                  aria-hidden="true"
                />

                {/* Content */}
                <div className={index < experiences.length - 1 ? 'pb-10' : ''}>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                    <h3 className="font-display text-lg text-text">{exp.role}</h3>
                    <span className="font-mono text-xs text-coral">{exp.company}</span>
                  </div>
                  <p className="font-mono text-xs text-muted mb-3">{exp.period}</p>
                  <p className="font-body text-sm text-muted leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <Tag key={tech} color="default">{tech}</Tag>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
