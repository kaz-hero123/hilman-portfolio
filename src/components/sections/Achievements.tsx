'use client';

/**
 * Achievements — Section
 * Ref: design-system.md §6 (3-col compact grid)
 *
 * Gate C rules:
 * ✅ Dibungkus SectionWrapper
 * ✅ Maksimal 3 motion.div
 * ✅ Data dari @/data/achievements.ts
 *
 * NOTE: Gate A blocker — achievements data masih ada TODO fields.
 */

import { motion } from 'framer-motion';
import { ExternalLink, Trophy, Award, Star, Folder } from 'lucide-react';
import { SectionWrapper } from '@/components/layout';
import { SectionLabel } from '@/components/ui';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import { achievements } from '@/data/achievements';
import { cn } from '@/lib/utils';
import type { Achievement } from '@/types';

const categoryIcon: Record<Achievement['category'], React.ReactNode> = {
  competition:   <Trophy size={16} strokeWidth={1.5} aria-hidden="true" />,
  certification: <Award  size={16} strokeWidth={1.5} aria-hidden="true" />,
  recognition:   <Star   size={16} strokeWidth={1.5} aria-hidden="true" />,
  project:       <Folder size={16} strokeWidth={1.5} aria-hidden="true" />,
};

export function Achievements() {
  return (
    <SectionWrapper id="achievements">
      {/* motion.div 1 — stagger wrapper */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {/* motion.div 2 — heading */}
        <motion.div variants={fadeInUp} className="mb-12">
          <SectionLabel>achievements</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl text-text">
            Milestones
          </h2>
        </motion.div>

        {/* motion.div 3 — 3-col compact grid */}
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {achievements.map((item) => (
            <div
              key={item.id}
              className={cn(
                'p-5 rounded-lg border border-border bg-surface',
                'transition-all duration-200 hover:border-lavender/40',
                item.url && 'cursor-pointer',
              )}
            >
              {/* Icon + category */}
              <div className="flex items-center gap-2 text-lavender mb-3">
                {categoryIcon[item.category]}
                <span className="font-mono text-xs text-muted capitalize">{item.category}</span>
              </div>

              {/* Title */}
              <h3 className="font-display text-base text-text mb-1 leading-snug">
                {item.title}
              </h3>

              {/* Issuer + date */}
              <p className="font-mono text-xs text-muted mb-2">
                {item.issuer} · {item.date}
              </p>

              {/* Description (optional) */}
              {item.description && (
                <p className="font-body text-xs text-muted leading-relaxed mb-3">
                  {item.description}
                </p>
              )}

              {/* Link (optional) */}
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${item.title}`}
                  className="inline-flex items-center gap-1 font-mono text-xs text-lavender hover:text-text transition-colors min-h-[48px]"
                >
                  View <ExternalLink size={12} strokeWidth={1.5} aria-hidden="true" />
                </a>
              )}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
