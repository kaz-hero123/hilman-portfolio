'use client'

import { m } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { fadeUpSmallVariant } from '@/lib/motion'


const fadeUp = fadeUpSmallVariant


const navColumns = [
  {
    heading: 'Navigation',
    links: [
      { label: 'Home', href: '#hero' },
      { label: 'Work', href: '#work' },
      { label: 'Services', href: '#craft' },
      { label: 'Experience', href: '#history' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    heading: 'Projects',
    links: [
      { label: 'Jelajah Madura', href: '#work' },
      { label: 'UiVault', href: '#work' },
      { label: 'Rapor AI', href: '#work' },
      { label: 'OwlBook', href: '#work' },
      { label: 'RFID Attendance', href: '#work' },
    ],
  },
  {
    heading: 'Connect',
    links: [
      { label: 'GitHub', href: 'https://github.com/kaz-hero123', external: true },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/hilman-nidal-hamzi-997969415', external: true },
      { label: 'Email', href: 'mailto:hilmannidal@gmail.com', external: true },
    ],
  },
]

const legalLinks: { label: string; href: string }[] = []


function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}


export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <m.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="pt-20 pb-16 grid grid-cols-2 md:grid-cols-5 gap-10"
        >
          <div className="col-span-2 md:col-span-1">
            <a
              href="#hero"
              className="font-mono text-[15px] font-medium text-ink hover:text-ink/60 transition-colors focus-ring inline-block"
            >
              <span className="text-accent">{'<'}</span>
              HNH
              <span className="text-accent">{' />'}</span>
            </a>
          </div>

          {navColumns.map((col) => (
            <div key={col.heading}>
              <p className="font-body text-[14px] font-semibold text-ink mb-4">
                {col.heading}
              </p>
              <ul className="space-y-3" role="list">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...('external' in link && link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="inline-flex items-center gap-1 font-body text-[14px] text-dim hover:text-accent transition-colors duration-150 focus-ring"
                    >
                      {link.label}
                      {'external' in link && link.external && (
                        <span className="text-[11px] text-dust" aria-hidden="true">↗</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="font-body text-[14px] font-semibold text-ink mb-4">
              Get in touch
            </p>
            <p className="font-body text-[14px] text-dim leading-[1.6] mb-5">
              Have a project or question? Reach out directly.
            </p>
            <a
              href="mailto:hilmannidal@gmail.com"
              className="inline-flex items-center justify-center font-mono text-[12px] uppercase tracking-widest font-medium text-ink border border-ink px-6 py-2.5 hover:bg-ink hover:text-white transition-all duration-200 focus-ring rounded-sm inline-block"
            >
              Email me
            </a>
          </div>
        </m.div>

        <hr className="border-0 border-t border-[#E5E5E5]" />

        <div className="py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6">
            <p className="font-body text-[13px] text-dim">
              © 2026 Hilman Nidal Hamzi. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-body text-[13px] text-dim underline underline-offset-2 hover:text-ink transition-colors duration-150 focus-ring"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-5">
            {[
              { Icon: LinkedInIcon, label: 'LinkedIn', href: 'https://linkedin.com/in/hilman-nidal-hamzi-997969415' },
              { Icon: GitHubIcon, label: 'GitHub', href: 'https://github.com/kaz-hero123' },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-ink hover:text-accent transition-colors duration-150 focus-ring"
              >
                <Icon />
              </a>
            ))}

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="ml-2 flex items-center gap-1.5 font-mono text-[11px] text-dim hover:text-accent transition-colors duration-150 focus-ring"
            >
              <ArrowUp size={14} strokeWidth={1.75} />
              Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
