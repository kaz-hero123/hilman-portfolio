'use client'

import { motion } from 'framer-motion'

// ─── Animation ────────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
}

// ─── Data ─────────────────────────────────────────────────────────────────────

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
      { label: 'Case studies', href: '#work' },
      { label: 'Process', href: '#craft' },
      { label: 'Writing', href: '#' },
      { label: 'Resources', href: '#' },
      { label: 'Archive', href: '#' },
    ],
  },
  {
    heading: 'Connect',
    links: [
      { label: 'LinkedIn', href: 'https://linkedin.com' },
      { label: 'Twitter', href: 'https://twitter.com' },
      { label: 'GitHub', href: 'https://github.com' },
      { label: 'Dribbble', href: 'https://dribbble.com' },
      { label: 'Email', href: 'mailto:hilmannidal@gmail.com' },
    ],
  },
]

const legalLinks = [
  { label: 'Privacy policy', href: '#' },
  { label: 'Terms of service', href: '#' },
  { label: 'Cookies settings', href: '#' },
]

// ─── Social icons ─────────────────────────────────────────────────────────────

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {/* ── Main footer grid ───────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="pt-20 pb-16 grid grid-cols-2 md:grid-cols-5 gap-10"
        >
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <a
              href="#hero"
              className="font-script text-[28px] leading-none text-ink hover:text-ink/60 transition-colors focus-ring"
            >
              Logo
            </a>
          </div>

          {/* Nav columns */}
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
                      className="font-body text-[14px] text-dim hover:text-ink transition-colors duration-150 focus-ring"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Subscribe column */}
          <div>
            <p className="font-body text-[14px] font-semibold text-ink mb-4">
              Subscribe
            </p>
            <p className="font-body text-[14px] text-dim leading-[1.6] mb-5">
              Join the newsletter for sharp insights on craft, code, and the
              creative process.
            </p>
            <form
              className="flex"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email"
                aria-label="Email address"
                className="flex-1 font-body text-[14px] text-ink border border-ink px-4 py-2.5 placeholder:text-dust bg-transparent outline-none focus:ring-1 focus:ring-ink"
              />
              <button
                type="submit"
                className="font-body text-[14px] font-medium text-ink border border-ink border-l-0 px-5 py-2.5 hover:bg-ink hover:text-white transition-colors duration-200 focus-ring shrink-0"
              >
                Subscribe
              </button>
            </form>
            <p className="font-body text-[12px] text-dust leading-[1.5] mt-3">
              By subscribing you agree to our privacy policy and consent to
              receive updates.
            </p>
          </div>
        </motion.div>

        {/* ── Bottom bar ─────────────────────────────────────────────────── */}
        <hr className="border-0 border-t border-[#E5E5E5]" />

        <div className="py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Left: copyright + legal */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6">
            <p className="font-body text-[13px] text-dim">
              © 2026 Personal Portfolio. All rights reserved.
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

          {/* Right: social icons */}
          <div className="flex items-center gap-4">
            {[
              { Icon: FacebookIcon, label: 'Facebook' },
              { Icon: InstagramIcon, label: 'Instagram' },
              { Icon: XIcon, label: 'X' },
              { Icon: LinkedInIcon, label: 'LinkedIn' },
              { Icon: YouTubeIcon, label: 'YouTube' },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="text-ink hover:text-dim transition-colors duration-150 focus-ring"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
