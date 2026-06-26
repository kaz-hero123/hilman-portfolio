'use client';

/**
 * Contact — Section
 * Ref: design-system.md §6 (satu headline, 3 link cards: email, LinkedIn, GitHub)
 *
 * Gate C rules:
 * ✅ Dibungkus SectionWrapper
 * ✅ Maksimal 3 motion.div
 * ✅ rel="noopener noreferrer" + aria-label pada semua external links
 * ✅ min-h-[48px] pada semua link cards
 * ✅ focus-visible:ring-2 pada semua interaktif
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
    icon: <Mail size={20} strokeWidth={1.5} aria-hidden="true" />,
    ariaLabel: 'Send an email to Hilman',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/hilman-nidal',
    href: 'https://linkedin.com/in/hilman-nidal',
    icon: <LinkedInIcon size={20} />,
    ariaLabel: "View Hilman's LinkedIn profile",
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/kaz-hero123',
    href: 'https://github.com/kaz-hero123',
    icon: <GitHubIcon size={20} />,
    ariaLabel: "View Hilman's GitHub profile",
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
        {/* motion.div 2 — heading */}
        <motion.div variants={fadeInUp} className="mb-12 max-w-2xl">
          <SectionLabel>contact</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl text-text mb-4">
            Let&apos;s work together
          </h2>
          <p className="font-body text-base text-muted leading-relaxed">
            Available for internship opportunities and freelance projects.
            Reach out through any of the channels below.
          </p>
        </motion.div>

        {/* motion.div 3 — 3 link cards */}
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {contactLinks.map(({ id, label, value, href, icon, ariaLabel }) => (
            <a
              key={id}
              href={href}
              target={id !== 'email' ? '_blank' : undefined}
              rel={id !== 'email' ? 'noopener noreferrer' : undefined}
              aria-label={ariaLabel}
              className={cn(
                'group p-6 rounded-lg border border-border bg-surface',
                'flex flex-col gap-3 min-h-[48px]',
                'transition-all duration-200',
                'hover:border-coral/50 hover:shadow-glow',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral',
                'focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
              )}
            >
              <div className="flex items-center justify-between">
                <span className="text-muted group-hover:text-coral transition-colors">
                  {icon}
                </span>
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                  className="text-muted group-hover:text-coral transition-colors"
                  aria-hidden="true"
                />
              </div>
              <div>
                <p className="font-mono text-xs text-muted mb-1">{label}</p>
                <p className="font-body text-sm text-text">{value}</p>
              </div>
            </a>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
