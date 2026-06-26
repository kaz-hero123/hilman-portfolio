'use client';

/**
 * Hero — Section
 * Ref: design-system.md §6, §7
 *
 * Gate C rules:
 * ✅ Dibungkus SectionWrapper
 * ✅ Maksimal 3 motion.div
 * ✅ Blinking cursor HANYA di section ini
 * ✅ Data diimport dari @/data — tidak hardcoded di JSX
 */

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/layout';
import { Badge } from '@/components/ui';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import { ArrowDown, Mail } from 'lucide-react';

export function Hero() {
  return (
    <SectionWrapper
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-16"
    >
      {/* motion.div 1 — stagger container */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-4xl"
      >
        {/* motion.div 2 — status badge */}
        <motion.div variants={fadeInUp} className="mb-8">
          <Badge variant="available" dot>
            available for internship
          </Badge>
        </motion.div>

        {/* motion.div 3 — main hero text block */}
        <motion.div variants={fadeInUp}>
          {/* Name */}
          <h1 className="font-display font-bold text-text leading-[1.05] mb-4
                          text-5xl md:text-7xl lg:text-8xl">
            Hilman<br />
            <span className="text-coral">Nidal</span> Hamzi
          </h1>

          {/* Role subtitle — Mono, coral */}
          <p className="font-mono text-sm md:text-base text-coral mb-3">
            Backend Developer · Laravel &amp; Full-Stack
          </p>

          {/* Status indicator — THE signature element (design-system.md §7) */}
          <p className="font-mono text-sm text-mint flex items-center gap-2 mb-10">
            <span className="text-muted" aria-hidden="true">›</span>
            available for internship
            <span className="animate-blink text-mint" aria-hidden="true">■</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-sm min-h-[48px]
                         bg-coral text-bg font-body font-medium transition-all duration-150 cursor-pointer select-none
                         hover:bg-coral/90
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral
                         focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              View Projects
              <ArrowDown size={16} strokeWidth={1.5} aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-sm min-h-[48px]
                         bg-transparent text-text border border-border font-body transition-all duration-150 cursor-pointer select-none
                         hover:border-coral hover:text-coral
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral
                         focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              Get in touch
              <Mail size={16} strokeWidth={1.5} aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
