'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Trophy, Award, Star, Folder } from 'lucide-react';
import { SectionWrapper } from '@/components/layout';
import { SectionLabel } from '@/components/ui';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import { achievements } from '@/data/achievements';
import { cn } from '@/lib/utils';
import type { Achievement } from '@/types';

const categoryConfig: Record<
  Achievement['category'],
  { icon: React.ReactNode; accentClass: string; iconBgClass: string; iconColorClass: string }
> = {
  competition: {
    icon: <Trophy size={16} strokeWidth={1.5} aria-hidden="true" />,
    accentClass: 'bg-coral',
    iconBgClass: 'bg-coral/10',
    iconColorClass: 'text-coral',
  },
  certification: {
    icon: <Award size={16} strokeWidth={1.5} aria-hidden="true" />,
    accentClass: 'bg-lavender',
    iconBgClass: 'bg-lavender/10',
    iconColorClass: 'text-lavender',
  },
  recognition: {
    icon: <Star size={16} strokeWidth={1.5} aria-hidden="true" />,
    accentClass: 'bg-mint',
    iconBgClass: 'bg-mint/10',
    iconColorClass: 'text-mint',
  },
  project: {
    icon: <Folder size={16} strokeWidth={1.5} aria-hidden="true" />,
    accentClass: 'bg-muted',
    iconBgClass: 'bg-surface2',
    iconColorClass: 'text-muted',
  },
};

export function Achievements() {
  return (
    <SectionWrapper id="achievements">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.div variants={fadeInUp} className="mb-12">
          <SectionLabel>achievements</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl text-text">
            Milestones
          </h2>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {achievements.map((item) => {
            const cfg = categoryConfig[item.category];
            return (
              <div
                key={item.id}
                className={cn(
                  'group relative rounded-lg border border-border bg-surface overflow-hidden',
                  'transition-all duration-200 hover:border-border/80 hover:-translate-y-0.5',
                )}
              >
                <div className={cn('h-[2px] w-full', cfg.accentClass)} aria-hidden="true" />

                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className={cn('w-8 h-8 rounded-lg flex items-center justify-center', cfg.iconBgClass, cfg.iconColorClass)}>
                      {cfg.icon}
                    </div>
                    <span className="font-mono text-xs text-muted">{item.date}</span>
                  </div>

                  <h3 className="font-display text-base text-text mb-1 leading-snug">
                    {item.title}
                  </h3>

                  <p className="font-mono text-xs text-muted mb-3">
                    {item.issuer}
                  </p>

                  {item.description && (
                    <p className="font-body text-xs text-muted leading-relaxed mb-3">
                      {item.description}
                    </p>
                  )}

                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${item.title}`}
                      className={cn(
                        'inline-flex items-center gap-1 font-mono text-xs transition-colors min-h-[48px]',
                        cfg.iconColorClass,
                        'hover:opacity-80',
                      )}
                    >
                      View <ExternalLink size={12} strokeWidth={1.5} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
