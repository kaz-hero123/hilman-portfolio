'use client';

/**
 * Hero — Section
 * Ref: design-system.md §6, §7
 *
 * Visual: echo text background, AI avatar, personality tagline, marquee ticker
 */

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SectionWrapper } from '@/components/layout';
import { Badge } from '@/components/ui';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import { ArrowDown, Mail } from 'lucide-react';

const marqueeItems = [
  'Backend Developer', 'Laravel', 'PHP', 'Node.js', 'MySQL',
  'Python', 'REST API', 'Full-Stack', 'Clean Code', 'Available for Internship',
  'Backend Developer', 'Laravel', 'PHP', 'Node.js', 'MySQL',
  'Python', 'REST API', 'Full-Stack', 'Clean Code', 'Available for Internship',
];

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-16 relative overflow-hidden">
      {/* === Echo text background — THE signature moment === */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
        aria-hidden="true"
      >
        <span
          className="font-display font-bold leading-none tracking-tighter text-[clamp(80px,18vw,220px)] text-text/[0.03] whitespace-nowrap"
        >
          HILMAN
        </span>
      </div>

      {/* Background ambient blobs */}
      <div
        className="pointer-events-none absolute -top-40 right-0 w-[500px] h-[500px] rounded-full opacity-[0.05]"
        style={{ background: 'radial-gradient(circle, #F2966B 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center">

          {/* LEFT — text content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-2xl relative z-10"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="mb-8">
              <Badge variant="available" dot>
                available for internship
              </Badge>
            </motion.div>

            {/* Name */}
            <motion.div variants={fadeInUp}>
              <h1 className="font-display font-bold text-text leading-[1.05] mb-5
                              text-5xl md:text-7xl lg:text-8xl">
                Hilman<br />
                <span className="text-coral">Nidal</span> Hamzi
              </h1>

              {/* Personality tagline — micro-copy yang punya karakter */}
              <p className="font-body text-base md:text-lg text-muted leading-relaxed mb-3 max-w-md">
                I build the systems you don&apos;t see,<br className="hidden md:block" />
                but definitely depend on.
              </p>

              {/* Status indicator */}
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
                             bg-coral text-bg font-body font-medium transition-all duration-150
                             hover:bg-coral/90 hover:shadow-glow
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral
                             focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  See what I&apos;ve built
                  <ArrowDown size={16} strokeWidth={1.5} aria-hidden="true" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-sm min-h-[48px]
                             bg-transparent text-text border border-border font-body transition-all duration-150
                             hover:border-coral hover:text-coral
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral
                             focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  Let&apos;s talk
                  <Mail size={16} strokeWidth={1.5} aria-hidden="true" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — Avatar illustration */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' as const }}
            className="hidden md:flex flex-col items-center gap-4 relative z-10"
            aria-hidden="true"
          >
            <div className="relative animate-float">
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-2xl opacity-50"
                style={{
                  background: 'linear-gradient(135deg, rgba(242,150,107,0.3) 0%, rgba(179,160,214,0.2) 100%)',
                  filter: 'blur(20px)',
                  transform: 'scale(1.12)',
                }}
              />
              {/* Avatar frame */}
              <div
                className="relative w-56 h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden border border-coral/20"
                style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }}
              >
                <Image
                  src="/avatar.png"
                  alt="Hilman Nidal Hamzi — Backend Developer"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Floating tag — top left */}
              <div
                className="absolute -top-3 -left-4 px-3 py-1 rounded-full border border-border bg-bg/90 backdrop-blur-sm"
                style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.4)' }}
              >
                <span className="font-mono text-xs text-coral">Laravel</span>
              </div>
              {/* Floating tag — bottom right */}
              <div
                className="absolute -bottom-3 -right-4 px-3 py-1 rounded-full border border-border bg-bg/90 backdrop-blur-sm"
                style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.4)' }}
              >
                <span className="font-mono text-xs text-lavender">Node.js</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee Ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-16 md:mt-24 border-t border-b border-border py-4 overflow-hidden marquee-wrapper"
        aria-hidden="true"
      >
        <div className="marquee-track flex gap-8 animate-marquee whitespace-nowrap w-max">
          {marqueeItems.map((item, i) => (
            <span key={i} className="flex items-center gap-8">
              <span className="font-mono text-xs text-muted uppercase tracking-widest">{item}</span>
              <span className="text-coral/40 text-xs">✦</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
