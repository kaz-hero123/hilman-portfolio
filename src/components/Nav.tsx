'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Projects',    href: '#projects' },
  { label: 'About',       href: '#about' },
  { label: 'Experience',  href: '#experience' },
  { label: 'Contact',     href: '#contact' },
]

export function Nav() {
  const [scrolled,    setScrolled]    = useState(false)
  const [menuOpen,    setMenuOpen]    = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 640) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-paper/90 backdrop-blur-md border-b border-line'
            : 'bg-transparent',
        )}
      >
        <nav
          className="max-w-5xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between"
          aria-label="Main navigation"
        >
          <a
            href="#hero"
            className="font-display text-[0.9375rem] font-bold text-ink hover:text-ember transition-colors focus-ring"
            onClick={handleLinkClick}
          >
            Hilman N. Hamzi
          </a>

          <ul className="hidden sm:flex items-center gap-8" role="list">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-body text-caption text-dust hover:text-ink link-draw transition-colors focus-ring"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="mailto:hilmannidal@gmail.com"
            className="hidden sm:inline-flex font-body text-caption text-ink border border-line rounded px-3 py-1.5 hover:border-ember/60 transition-colors focus-ring"
          >
            Get in touch
          </a>

          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="sm:hidden flex items-center justify-center w-10 h-10 -mr-2 text-ink hover:text-ember transition-colors focus-ring rounded"
          >
            {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </nav>
      </header>

      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
        className={cn(
          'fixed inset-0 z-40 sm:hidden transition-all duration-300',
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none',
        )}
      >
        <div
          className="absolute inset-0 bg-ink/20 backdrop-blur-sm"
          onClick={handleLinkClick}
          aria-hidden="true"
        />

        <div
          className={cn(
            'absolute top-14 right-0 left-0 bg-paper border-b border-line shadow-cardLift',
            'transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]',
            menuOpen ? 'translate-y-0' : '-translate-y-4',
          )}
        >
          <ul
            className="flex flex-col px-6 py-4 gap-1"
            role="list"
            onClick={handleLinkClick}
          >
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block font-body text-base text-ink hover:text-ember py-3 border-b border-line/50 last:border-0 transition-colors focus-ring"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="mailto:hilmannidal@gmail.com"
                className="block font-body text-base text-ember font-medium py-3 focus-ring"
              >
                Get in touch →
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
