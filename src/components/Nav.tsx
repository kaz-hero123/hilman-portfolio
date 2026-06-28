'use client'

import { useState, useEffect } from 'react'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Approach', href: '#approach' },
  { label: 'Path', href: '#path' },
  { label: 'Contact', href: '#contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface-dark/90 backdrop-blur-md border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
        <a
          href="#hero"
          className="font-sans text-[0.9375rem] font-medium text-text-primary hover:text-accent transition-colors focus-ring"
        >
          Hilman N. Hamzi
        </a>

        <ul className="hidden sm:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-sans text-caption text-text-secondary hover:text-text-primary link-draw transition-colors focus-ring"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile: just show email CTA */}
        <a
          href="mailto:hilmannidal@gmail.com"
          className="sm:hidden font-sans text-caption text-accent hover:text-accent-hover transition-colors focus-ring"
        >
          Get in touch
        </a>
      </nav>
    </header>
  )
}
