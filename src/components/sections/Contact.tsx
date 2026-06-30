'use client'

import { Mail, ExternalLink } from 'lucide-react'
import { AnimateIn } from '@/components/AnimateIn'
import { SectionLabel } from '@/components/ui/SectionLabel'

// PRD §6 — Contact: bg-forest dark band (bookend with Stats)
// PRD §2.1 dual-context: paper/line/ember valid on forest; Deep variants NOT valid here

const links = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hilmannidal@gmail.com',
    href: 'mailto:hilmannidal@gmail.com',
    desc: 'Best way to reach me',
  },
  {
    icon: ExternalLink,
    label: 'GitHub',
    value: 'kaz-hero123',
    href: 'https://github.com/kaz-hero123',
    desc: 'Code, projects, history',
  },
  {
    icon: ExternalLink,
    label: 'LinkedIn',
    value: 'hilman-nidal',
    href: 'https://linkedin.com/in/hilman-nidal',
    desc: 'Professional profile',
  },
]

export function Contact() {
  return (
    <section id="contact" className="bg-forest">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-28">

        {/* Header */}
        <AnimateIn>
          <div className="mb-14 max-w-xl">
            {/* SectionLabel tone="dark" — text-line on forest (9.36 contrast) */}
            <SectionLabel tone="dark">Contact</SectionLabel>
            <h2 className="font-display text-heading text-paper mb-4">
              Let&apos;s talk.
            </h2>
            {/* text-line on forest: 9.36 — dual-role muted text for dark band */}
            <p className="font-body text-body text-line leading-relaxed">
              I&apos;m looking for a backend internship starting August 2026.
              If you have an interesting problem to solve, I&apos;d love to hear about it.
            </p>
          </div>
        </AnimateIn>

        {/* 3 link cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {links.map((link, i) => {
            const Icon = link.icon
            return (
              <AnimateIn key={link.label} delay={i * 0.08}>
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group block p-6 rounded-lg border border-line/20 bg-paper/5 hover:bg-paper/10 transition-all duration-200 focus-ring min-h-[48px]"
                  aria-label={`${link.label}: ${link.value}`}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon — ember on forest: 5.24 contrast, valid as icon fg */}
                    <Icon
                      size={20}
                      strokeWidth={1.5}
                      className="text-ember shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-mono text-xs text-line/70 uppercase tracking-widest mb-1">
                        {link.label}
                      </p>
                      {/* ember on forest for value text — passes 5.24 at this size */}
                      <p className="font-body text-[0.9375rem] font-medium text-ember group-hover:underline">
                        {link.value}
                      </p>
                      <p className="font-body text-caption text-line/60 mt-1">
                        {link.desc}
                      </p>
                    </div>
                  </div>
                </a>
              </AnimateIn>
            )
          })}
        </div>

      </div>
    </section>
  )
}
