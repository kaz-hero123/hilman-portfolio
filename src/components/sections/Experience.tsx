'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/layout';
import { SectionLabel, Tag } from '@/components/ui';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import { experiences } from '@/data/experience';
import { cn } from '@/lib/utils';

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.div variants={fadeInUp} className="mb-12">
          <SectionLabel>experience</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl text-text">
            Where I&apos;ve worked
          </h2>
        </motion.div>

        <motion.div variants={fadeInUp} className="space-y-0">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative flex gap-6">
              <div className="flex flex-col items-center shrink-0">
                <div className="relative mt-1.5">
                  {index === 0 && (
                    <div
                      className="absolute inset-0 rounded-full bg-coral/30 animate-ping"
                      style={{ transform: 'scale(2)' }}
                      aria-hidden="true"
                    />
                  )}
                  <div
                    className={cn(
                      'w-3.5 h-3.5 rounded-full border-2 relative z-10',
                      index === 0
                        ? 'border-coral bg-coral'
                        : 'border-muted bg-bg',
                    )}
                    aria-hidden="true"
                  />
                </div>
                {index < experiences.length - 1 && (
                  <div
                    className="flex-1 w-px bg-border mt-2 mb-0"
                    style={{ minHeight: '48px' }}
                    aria-hidden="true"
                  />
                )}
              </div>

              <div className={cn('flex-1', index < experiences.length - 1 ? 'pb-10' : '')}>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                  <h3 className="font-display text-lg text-text">{exp.role}</h3>
                  <span className="font-mono text-xs text-coral">{exp.company}</span>
                  {exp.type === 'internship' && (
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded-full border border-lavender/20 bg-lavender/5 text-lavender">
                      internship
                    </span>
                  )}
                </div>
                <div className="mb-3">
                  <span className="font-mono text-xs px-3 py-1 rounded-full bg-surface2 border border-border text-muted">
                    {exp.period}
                  </span>
                </div>
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
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
