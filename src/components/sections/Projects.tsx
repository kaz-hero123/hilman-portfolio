'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/layout';
import { SectionLabel, ProjectCard } from '@/components/ui';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import { projects } from '@/data/projects';

export function Projects() {
  return (
    <SectionWrapper id="projects">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.div variants={fadeInUp} className="mb-12">
          <SectionLabel>projects</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl text-text">
            What I&apos;ve built
          </h2>
        </motion.div>

        <motion.div variants={fadeInUp} className="space-y-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} {...project} index={i} />
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
