'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

// ─── Data ────────────────────────────────────────────────────────────────────

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
]

const serviceItems = [
  { label: 'Strategy', href: '#strategy' },
  { label: 'Design', href: '#craft' },
  { label: 'Development', href: '#work' },
]

// ─── Component ───────────────────────────────────────────────────────────────

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [heroHeight, setHeroHeight] = useState(0)
  const servicesRef = useRef<HTMLDivElement>(null)

  // Measure hero for color-flip threshold
  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return
    const update = () => setHeroHeight(hero.offsetHeight)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  // Scroll: flip from transparent → white bg once past hero
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > heroHeight - 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [heroHeight])

  // Close mobile menu above md breakpoint
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // Close services dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const closeAll = () => {
    setMenuOpen(false)
    setServicesOpen(false)
  }

  const onHero = !scrolled

  return (
    <>
      {/* ── Fixed header ────────────────────────────────────────────────── */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/95 backdrop-blur-sm border-b border-ash'
            : 'bg-transparent'
        )}
      >
        <nav
          className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 h-16 flex items-center"
          aria-label="Main navigation"
        >
          {/* ── Left: nav links + services dropdown ──────────────────── */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeAll}
                  className={cn(
                    'font-body text-[15px] font-normal tracking-wide transition-colors duration-200 focus-ring link-draw',
                    onHero
                      ? 'text-white/90 hover:text-white'
                      : 'text-ink hover:text-ink/60'
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}

            {/* Services dropdown */}
            <li>
              <div ref={servicesRef} className="relative">
                <button
                  type="button"
                  onClick={() => setServicesOpen((v) => !v)}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  className={cn(
                    'flex items-center gap-1.5 font-body text-[15px] font-normal tracking-wide transition-colors duration-200 focus-ring',
                    onHero
                      ? 'text-white/90 hover:text-white'
                      : 'text-ink hover:text-ink/60'
                  )}
                >
                  Services
                  <ChevronDown
                    size={13}
                    strokeWidth={1.75}
                    className={cn(
                      'transition-transform duration-200 mt-[1px]',
                      servicesOpen && 'rotate-180'
                    )}
                  />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.15, ease: 'easeOut' }}
                      className="absolute top-full left-0 mt-2 bg-white border border-ink min-w-[185px]"
                    >
                      <ul className="py-2.5" role="list">
                        {serviceItems.map((item) => (
                          <li key={item.href}>
                            <a
                              href={item.href}
                              onClick={closeAll}
                              className="block px-5 py-2.5 font-body text-[14px] text-ink hover:text-ink/50 transition-colors duration-150"
                            >
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </li>
          </ul>

          {/* ── Center: Logo — script font, absolutely centred ────────── */}
          <a
            href="#hero"
            onClick={closeAll}
            className={cn(
              'absolute left-1/2 -translate-x-1/2 font-script text-[26px] leading-none transition-colors duration-200 focus-ring',
              onHero
                ? 'text-white hover:text-white/75'
                : 'text-ink hover:text-ink/60'
            )}
          >
            Logo
          </a>

          {/* ── Right: Menu button — solid black pill ─────────────────── */}
          <div className="ml-auto">
            <button
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="font-body text-[13px] font-medium tracking-wide px-5 py-2 bg-ink text-white hover:bg-ink/80 transition-colors duration-200 focus-ring"
            >
              {menuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </nav>
      </header>

      {/* ── Full-screen mobile / menu overlay ─────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Navigation menu"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/10 backdrop-blur-[2px]"
              onClick={closeAll}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute top-16 left-0 right-0 bg-white border-b border-ash"
            >
              <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
                <ul className="py-6 space-y-0" role="list">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * i, duration: 0.2 }}
                    >
                      <a
                        href={link.href}
                        onClick={closeAll}
                        className="block font-body text-[17px] text-ink hover:text-ink/50 py-3.5 border-b border-ash transition-colors focus-ring"
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}

                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08, duration: 0.2 }}
                  >
                    <span className="block font-body text-[17px] text-ink py-3.5 border-b border-ash">
                      Services
                    </span>
                    <ul className="pl-5 pb-1 pt-1 space-y-0">
                      {serviceItems.map((item) => (
                        <li key={item.href}>
                          <a
                            href={item.href}
                            onClick={closeAll}
                            className="block font-body text-[14px] text-dim hover:text-ink py-2 transition-colors focus-ring"
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.li>

                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.12, duration: 0.2 }}
                    className="pt-4"
                  >
                    <a
                      href="mailto:hilmannidal@gmail.com"
                      onClick={closeAll}
                      className="inline-block font-body text-[13px] font-medium text-white bg-ink px-6 py-2.5 hover:bg-ink/80 transition-colors focus-ring"
                    >
                      Hire me
                    </a>
                  </motion.li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
