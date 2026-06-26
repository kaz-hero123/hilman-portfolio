'use client';

/**
 * Stack — Section
 * Ref: design-system.md §6
 *
 * Gate C rules:
 * ✅ Dibungkus SectionWrapper
 * ✅ Maksimal 3 motion.div
 * ✅ Dikelompok per layer — bukan icon dump
 * ✅ Data dari @/data/stack.ts
 */

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/layout';
import { SectionLabel, Tag } from '@/components/ui';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import { stackGroups } from '@/data/stack';

export function Stack() {
  return (
    <SectionWrapper id="stack">
      {/* motion.div 1 — stagger wrapper */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {/* motion.div 2 — heading */}
        <motion.div variants={fadeInUp} className="mb-12">
          <SectionLabel>stack</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl text-text">
            What I work with
          </h2>
        </motion.div>

        {/* motion.div 3 — stack groups */}
        <motion.div variants={fadeInUp} className="space-y-8">
          {stackGroups.map(({ layer, items }) => (
            <div key={layer} className="grid grid-cols-[120px_1fr] md:grid-cols-[160px_1fr] gap-4 items-start">
              <p className="font-mono text-xs text-muted pt-1">{layer}</p>
              <div className="flex flex-wrap gap-2">
                {items.map((tech) => (
                  <Tag key={tech} color="lavender">{tech}</Tag>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
