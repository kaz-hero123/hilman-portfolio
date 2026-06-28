'use client';

/**
 * Stack — Section
 * Ref: design-system.md §6
 *
 * Changes: full-width surface bg (contrast break), compact spacing
 */

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/layout';
import { SectionLabel, Tag } from '@/components/ui';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import { stackGroups } from '@/data/stack';

const totalTools = stackGroups.reduce((acc, g) => acc + g.items.length, 0);

export function Stack() {
  return (
    <SectionWrapper id="stack" variant="surface" spacing="compact">
      {/* motion.div 1 — stagger wrapper */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {/* motion.div 2 — heading */}
        <motion.div variants={fadeInUp} className="mb-10 flex items-end justify-between gap-4 flex-wrap">
          <div>
            <SectionLabel>stack</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl text-text">
              What I work with
            </h2>
          </div>
          <span className="font-mono text-xs text-muted border border-border rounded px-3 py-1 mb-1">
            {totalTools} tools
          </span>
        </motion.div>

        {/* motion.div 3 — stack groups */}
        <motion.div variants={fadeInUp} className="space-y-2">
          {stackGroups.map(({ layer, items }) => (
            <div
              key={layer}
              className="group grid grid-cols-[130px_1fr] md:grid-cols-[160px_1fr] gap-4 items-center
                         rounded-lg border border-transparent px-4 py-3
                         hover:border-border/60 hover:bg-bg/40 transition-all duration-200"
            >
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-coral/40 group-hover:bg-coral transition-colors shrink-0" aria-hidden="true" />
                <p className="font-mono text-xs text-muted">{layer}</p>
              </div>
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
