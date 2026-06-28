'use client';

/**
 * Contact — Section
 * Ref: design-system.md §6
 *
 * Changes: pull-quote bold statement sebelum cards, hover gradient upgrade
 */

import { motion } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '@/components/ui/SocialIcons';
import { SectionWrapper } from '@/components/layout';
import { SectionLabel } from '@/components/ui';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import { cn } from '@/lib/utils';

const contactLinks = [
  {
    id: 'email',
    label: 'Email',
    value: 'hilmannidal@gmail.com',
    href: 'mailto:hilmannidal@gmail.com',
    icon: <Mail size={22} strokeWidth={1.5} aria-hidden="true" />,
    ariaLabel: 'Send an email to Hilman',
    desc: 'Best for project inquiries',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/hilman-nidal',
    href: 'https://linkedin.com/in/hilman-nidal',
    icon: <LinkedInIcon size={22} />,
    ariaLabel: "View Hilman's LinkedIn profile",
    desc: 'Professional background',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/kaz-hero123',
    href: 'https://github.com/kaz-hero123',
    icon: <GitHubIcon size={22} />,
    ariaLabel: "View Hilman's GitHub profile",
    desc: 'Code & repositories',
  },
];

export function Contact() {
  return (
    <SectionWrapper id="contact">
      {/* motion.div 1 — stagger wrapper */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {/* motion.div 2 — heading + pull-quote */}
        <motion.div variants={fadeInUp} className="mb-14">
          <SectionLabel>contact</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl text-text mb-6">
            Let&apos;s work together
          </h2>
          {/* Pull-quote — bold statement before cards */}
          <blockquote className="border-l-2 border-coral pl-5 py-1 max-w-lg">
            <p className="font-body text-base md:text-lg text-text/80 leading-relaxed italic">
              &ldquo;I&apos;m not just looking for a task — I&apos;m looking for
              a team that ships things that matter.&rdquo;
            </p>
          </blockquote>
          <p className="font-body text-sm text-muted mt-4">
            Available for internship and freelance projects. Reach out below.
          </p>
        </motion.div>

        {/* motion.div 3 — 3 link cards */}
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {contactLinks.map(({ id, label, value, href, icon, ariaLabel, desc }) => (
            <a
              key={id}
              href={href}
              target={id !== 'email' ? '_blank' : undefined}
              rel={id !== 'email' ? 'noopener noreferrer' : undefined}
              aria-label={ariaLabel}
              className={cn(
                'group relative p-6 rounded-xl border border-border bg-surface overflow-hidden',
                'flex flex-col gap-4 min-h-[140px]',
                'transition-all duration-300 ease-out',
                'hover:border-coral/50 hover:-translate-y-1',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral',
                'focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
              )}
            >
              {/* Hover gradient overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: 'radial-gradient(circle at top left, rgba(242,150,107,0.08) 0%, transparent 70%)' }}
                aria-hidden="true"
              />
              {/* Icon + arrow row */}
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-surface2 border border-border flex items-center justify-center text-muted group-hover:text-coral group-hover:border-coral/30 transition-all duration-200">
                  {icon}
                </div>
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                  className="text-muted/40 group-hover:text-coral transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </div>
              <div>
                <p className="font-mono text-xs text-muted mb-0.5">{label}</p>
                <p className="font-body text-sm text-text font-medium mb-1">{value}</p>
                <p className="font-mono text-xs text-muted/50">{desc}</p>
              </div>
            </a>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
