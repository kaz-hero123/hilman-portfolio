'use client';

/**
 * Projects — Section
 * Ref: design-system.md §6
 *
 * Gate C rules:
 * ✅ Dibungkus SectionWrapper
 * ✅ Maksimal 3 motion.div
 * ✅ Data dari @/data/projects.ts
 * ✅ 3 featured project cards (full-width)
 */

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/layout';
import { SectionLabel, ProjectCard } from '@/components/ui';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import { projects } from '@/data/projects';

export function Projects() {
  return (
    <SectionWrapper id="projects">
      {/* motion.div 1 — stagger wrapper */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {/* motion.div 2 — heading */}
        <motion.div variants={fadeInUp} className="mb-12">
          <SectionLabel>projects</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl text-text">
            What I&apos;ve built
          </h2>
        </motion.div>

        {/* motion.div 3 — project cards */}
        <motion.div variants={fadeInUp} className="space-y-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
