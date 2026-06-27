'use client';

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
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.div variants={fadeInUp} className="mb-16 max-w-2xl">
          <SectionLabel>contact</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl text-text mb-4">
            Let&apos;s work together
          </h2>
          <p className="font-body text-base text-muted leading-relaxed">
            Available for internship opportunities and freelance projects.
            Reach out through any of the channels below.
          </p>
        </motion.div>

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
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: 'radial-gradient(circle at top left, rgba(242,150,107,0.08) 0%, transparent 70%)' }}
                aria-hidden="true"
              />

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
