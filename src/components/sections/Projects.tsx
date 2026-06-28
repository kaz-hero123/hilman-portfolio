'use client';

/**
 * Projects — Section
 * Ref: design-system.md §6
 *
 * Changes: spacious spacing (py-32), decorative large section number in bg
 */

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/layout';
import { SectionLabel, ProjectCard } from '@/components/ui';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import { projects } from '@/data/projects';

export function Projects() {
  return (
    <SectionWrapper id="projects" spacing="spacious">
      {/* motion.div 1 — stagger wrapper */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="relative"
      >
        {/* Decorative large background number */}
        <div
          className="pointer-events-none select-none absolute -top-6 -right-2 font-display font-bold text-[120px] md:text-[160px] leading-none text-text/[0.025] hidden md:block"
          aria-hidden="true"
        >
          03
        </div>

        {/* motion.div 2 — heading */}
        <motion.div variants={fadeInUp} className="mb-12 relative z-10">
          <SectionLabel>projects</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl text-text">
            What I&apos;ve built
          </h2>
        </motion.div>

        {/* motion.div 3 — project cards */}
        <motion.div variants={fadeInUp} className="space-y-6 relative z-10">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} {...project} index={i} />
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
