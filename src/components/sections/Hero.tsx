'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/layout';
import { Badge } from '@/components/ui';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import { ArrowDown, Mail } from 'lucide-react';

const marqueeItems = [
  'Backend Developer',
  'Laravel',
  'PHP',
  'Node.js',
  'MySQL',
  'Python',
  'REST API',
  'Full-Stack',
  'Clean Code',
  'Available for Internship',
  'Backend Developer',
  'Laravel',
  'PHP',
  'Node.js',
  'MySQL',
  'Python',
  'REST API',
  'Full-Stack',
  'Clean Code',
  'Available for Internship',
];

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-16 relative overflow-hidden">
      <div
        className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #F2966B 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 -left-40 w-[400px] h-[400px] rounded-full opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, #B3A0D6 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <Badge variant="available" dot>
                available for internship
              </Badge>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h1 className="font-display font-bold text-text leading-[1.05] mb-4
                              text-5xl md:text-7xl lg:text-8xl">
                Hilman<br />
                <span className="text-coral">Nidal</span> Hamzi
              </h1>

              <p className="font-mono text-sm md:text-base text-coral mb-3">
                Backend Developer · Laravel &amp; Full-Stack
              </p>

              <p className="font-mono text-sm text-mint flex items-center gap-2 mb-10">
                <span className="text-muted" aria-hidden="true">›</span>
                available for internship
                <span className="animate-blink text-mint" aria-hidden="true">■</span>
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-sm min-h-[48px]
                             bg-coral text-bg font-body font-medium transition-all duration-150 cursor-pointer select-none
                             hover:bg-coral/90 hover:shadow-glow
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

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="hidden md:flex flex-col items-center gap-4"
            aria-hidden="true"
          >
            <div className="relative animate-float">
              <div
                className="absolute inset-0 rounded-2xl opacity-60"
                style={{
                  background: 'linear-gradient(135deg, rgba(242,150,107,0.3) 0%, rgba(179,160,214,0.2) 100%)',
                  filter: 'blur(20px)',
                  transform: 'scale(1.1)',
                }}
              />
              <div
                className="relative w-56 h-56 lg:w-64 lg:h-64 rounded-2xl border-2 border-coral/30 bg-surface overflow-hidden"
                style={{ boxShadow: '0 0 0 1px rgba(242,150,107,0.1), 0 20px 60px rgba(0,0,0,0.5)' }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(160deg, #1a1a1a 0%, #111111 60%, rgba(242,150,107,0.05) 100%)',
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                  <span
                    className="font-display text-6xl font-bold"
                    style={{
                      background: 'linear-gradient(135deg, #F2966B 0%, #B3A0D6 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    HN
                  </span>
                  <span className="font-mono text-xs text-muted tracking-widest">kaz-hero123</span>
                </div>
                <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-mint animate-pulse" />
              </div>

              <div
                className="absolute -top-3 -left-4 px-3 py-1 rounded-full border border-border bg-surface/90 backdrop-blur-sm"
                style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.4)' }}
              >
                <span className="font-mono text-xs text-coral">Laravel</span>
              </div>
              <div
                className="absolute -bottom-3 -right-4 px-3 py-1 rounded-full border border-border bg-surface/90 backdrop-blur-sm"
                style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.4)' }}
              >
                <span className="font-mono text-xs text-lavender">Node.js</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

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
              <span className="font-mono text-xs text-muted uppercase tracking-widest">
                {item}
              </span>
              <span className="text-coral/40 text-xs">✦</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
