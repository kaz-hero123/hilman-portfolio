'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
]

const serviceItems = [
  { label: 'Strategy', href: '#strategy' },
  { label: 'Design', href: '#design' },
  { label: 'Development', href: '#development' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)
  const [heroHeight, setHeroHeight] = useState(0)

  // Track hero section height for color transition
  useEffect(() => {
    const hero = document.getElementById('hero')
    if (hero) {
      const updateHeight = () => setHeroHeight(hero.offsetHeight)
      updateHeight()
      window.addEventListener('resize', updateHeight)
      return () => window.removeEventListener('resize', updateHeight)
    }
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > heroHeight - 80)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // initial check
    return () => window.removeEventListener('scroll', onScroll)
  }, [heroHeight])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const handleLinkClick = () => {
    setMenuOpen(false)
    setServicesOpen(false)
  }

  // When over hero = white text; when scrolled past = dark text on light bg
  const overHero = !scrolled

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-[#E8E4DE] border-b border-[#D5D0C8]'
            : 'bg-transparent',
        )}
      >
        <nav
          className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 h-[60px] flex items-center"
          aria-label="Main navigation"
        >
          {/* Left: Nav Links */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    'font-body text-[16px] font-normal transition-colors duration-300 focus-ring',
                    overHero
                      ? 'text-white/90 hover:text-white'
                      : 'text-ink hover:text-ink/70',
                  )}
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              </li>
            ))}

            {/* Services Dropdown */}
            <li>
              <div ref={servicesRef} className="relative">
                <button
                  type="button"
                  onClick={() => setServicesOpen((v) => !v)}
                  className={cn(
                    'flex items-center gap-1.5 font-body text-[16px] font-normal transition-colors duration-300 focus-ring',
                    overHero
                      ? 'text-white/90 hover:text-white'
                      : 'text-ink hover:text-ink/70',
                  )}
                  aria-expanded={servicesOpen}
                >
                  Services
                  <ChevronDown
                    size={14}
                    strokeWidth={2}
                    className={cn(
                      'transition-transform duration-200 mt-0.5',
                      servicesOpen && 'rotate-180',
                    )}
                  />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15, ease: 'easeOut' }}
                      className="absolute top-full left-0 mt-2 bg-white border border-ink min-w-[180px]"
                    >
                      <ul className="py-3" role="list">
                        {serviceItems.map((item) => (
                          <li key={item.href}>
                            <a
                              href={item.href}
                              className="block px-5 py-2 font-body text-[15px] text-ink hover:text-ink/60 transition-colors"
                              onClick={handleLinkClick}
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

          {/* Center: Logo — script font, absolutely positioned */}
          <a
            href="#hero"
            className={cn(
              'absolute left-1/2 -translate-x-1/2 font-script text-[28px] transition-colors duration-300 focus-ring',
              overHero
                ? 'text-white hover:text-white/80'
                : 'text-ink hover:text-ink/70',
            )}
            onClick={handleLinkClick}
          >
            Logo
          </a>

          {/* Right: Menu button — solid black rectangle */}
          <div className="ml-auto">
            <button
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="bg-ink text-white font-body text-[14px] font-medium px-6 py-2.5 hover:bg-ink/85 transition-colors duration-200 focus-ring"
            >
              {menuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </nav>
      </header>

      {/* Full-screen Menu Overlay */}
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
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40"
          >
            <div
              className="absolute inset-0 bg-ink/10 backdrop-blur-sm"
              onClick={handleLinkClick}
              aria-hidden="true"
            />

            <motion.div
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute top-[60px] right-0 left-0 bg-paper border-b border-line"
            >
              <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
                <ul className="py-6 space-y-1" role="list">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i, duration: 0.25 }}
                    >
                      <a
                        href={link.href}
                        className="block font-body text-[18px] text-ink hover:text-dust py-3 border-b border-line/40 transition-colors focus-ring"
                        onClick={handleLinkClick}
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}

                  <motion.li
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.25 }}
                  >
                    <span className="block font-body text-[18px] text-ink py-3 border-b border-line/40">
                      Services
                    </span>
                    <ul className="pl-4 py-2 space-y-0.5">
                      {serviceItems.map((item) => (
                        <li key={item.href}>
                          <a
                            href={item.href}
                            className="block font-body text-[15px] text-dust hover:text-ink py-2 transition-colors focus-ring"
                            onClick={handleLinkClick}
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.li>

                  <motion.li
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15, duration: 0.25 }}
                    className="pt-4"
                  >
                    <a
                      href="mailto:hilmannidal@gmail.com"
                      className="inline-block font-body text-[14px] font-medium text-white bg-ink px-6 py-3 hover:bg-ink/85 transition-colors focus-ring"
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
