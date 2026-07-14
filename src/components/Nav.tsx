'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { ChevronDown } from 'lucide-react'
import { m, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'
import { HoverScramble } from '@/components/animations/HoverScramble'
import { GlitchText } from '@/components/animations/GlitchText'
import { Magnetic } from '@/components/animations/Magnetic'


const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
]

const serviceItems = [
  { label: 'Backend', href: '#craft' },
  { label: 'Node.js & APIs', href: '#craft' },
  { label: 'Project Management', href: '#craft' },
]

const sectionIds = ['hero', 'about', 'work', 'craft', 'history', 'testimonials', 'contact']


function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div className="relative w-[18px] h-[14px]">
      <span
        className={cn(
          'absolute left-0 w-full h-[1.5px] bg-current transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
          open ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
        )}
      />
      <span
        className={cn(
          'absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1.5px] bg-current transition-opacity duration-200',
          open ? 'opacity-0' : 'opacity-100'
        )}
      />
      <span
        className={cn(
          'absolute left-0 w-full h-[1.5px] bg-current transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
          open ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'
        )}
      />
    </div>
  )
}


export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [heroHeight, setHeroHeight] = useState(0)
  const [activeSection, setActiveSection] = useState('hero')
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return
    const update = () => setHeroHeight(hero.offsetHeight)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > heroHeight - 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [heroHeight])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useLockBodyScroll(menuOpen)

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

  const closeAll = useCallback(() => {
    setMenuOpen(false)
    setServicesOpen(false)
  }, [])

  const onHero = !scrolled

  const isActive = (href: string) => {
    const id = href.replace('#', '')
    return activeSection === id
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/95 backdrop-blur-sm border-b border-ash shadow-[0_1px_0_0_rgba(0,0,0,0.06)]'
            : 'bg-transparent'
        )}
      >
        <nav
          className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 h-16 flex items-center"
          aria-label="Main navigation"
        >
          <ul className="hidden md:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Magnetic>
                  <a
                    href={link.href}
                    onClick={closeAll}
                    className={cn(
                      'relative block font-body text-[15px] font-normal tracking-wide transition-colors duration-200 focus-ring link-draw',
                      onHero
                        ? 'text-white/90 hover:text-white'
                        : 'text-ink hover:text-ink/60',
                      isActive(link.href) && !onHero && 'text-accent'
                    )}
                  >
                    <HoverScramble text={link.label} />
                    {isActive(link.href) && (
                      <m.span
                        layoutId="nav-active"
                        className={cn(
                          'absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full',
                          onHero ? 'bg-white' : 'bg-accent'
                        )}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      />
                    )}
                  </a>
                </Magnetic>
              </li>
            ))}

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
                  Skills
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
                    <m.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.15, ease: 'easeOut' }}
                      className="absolute top-full left-0 mt-2 bg-white/90 backdrop-blur-md border border-ash shadow-sm min-w-[185px] overflow-hidden"
                    >
                      <ul className="py-2.5" role="list">
                        {serviceItems.map((item) => (
                          <li key={item.label}>
                            <a
                              href={item.href}
                              onClick={closeAll}
                              className="block px-5 py-2.5 font-body text-[14px] text-ink hover:text-accent hover:bg-accent-light/50 transition-colors duration-150"
                            >
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>
            </li>
          </ul>

          <a
            href="#hero"
            onClick={closeAll}
            className={cn(
              'absolute left-1/2 -translate-x-1/2 font-mono text-[14px] font-medium tracking-tight transition-colors duration-200 focus-ring flex items-center',
              onHero
                ? 'text-white hover:text-white/75'
                : 'text-ink hover:text-ink/60'
            )}
          >
            <span className={cn('mr-1 transition-colors', onHero ? 'text-white/50' : 'text-ink/40')}>~/</span>
            <GlitchText text="hilman" />
            <span className={cn('w-1.5 h-3.5 animate-pulse ml-[2px]', onHero ? 'bg-white/70' : 'bg-accent')} />
          </a>

          <div className="ml-auto flex items-center gap-3">
            <a
              href="mailto:hilmannidal@gmail.com"
              className={cn(
                'hidden md:inline-flex items-center font-mono text-[12px] font-medium tracking-wide px-4 py-2 border transition-all duration-200 focus-ring',
                onHero
                  ? 'border-white/30 text-white hover:border-white hover:bg-white/10'
                  : 'border-ink text-ink hover:bg-ink hover:text-white'
              )}
            >
              Hire me
            </a>

            <button
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((v) => !v)}
              className={cn(
                'md:hidden flex items-center gap-2.5 font-mono text-[12px] font-medium tracking-wide px-4 py-2.5 transition-colors duration-200 focus-ring',
                onHero
                  ? 'text-white hover:text-white/75'
                  : 'text-ink hover:text-ink/60'
              )}
            >
              <HamburgerIcon open={menuOpen} />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <m.div
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
            <div
              className="absolute inset-0 bg-black/10 backdrop-blur-[2px]"
              onClick={closeAll}
              aria-hidden="true"
            />

            <m.div
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-ash shadow-sm"
            >
              <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
                <ul className="py-6 space-y-0" role="list">
                  {navLinks.map((link, i) => (
                    <m.li
                      key={link.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * i, duration: 0.2 }}
                    >
                      <a
                        href={link.href}
                        onClick={closeAll}
                        className={cn(
                          'block font-body text-[17px] text-ink hover:text-accent py-3.5 border-b border-ash transition-colors focus-ring',
                          isActive(link.href) && 'text-accent'
                        )}
                      >
                        {link.label}
                      </a>
                    </m.li>
                  ))}

                  <m.li
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08, duration: 0.2 }}
                  >
                    <span className="block font-body text-[17px] text-ink py-3.5 border-b border-ash">
                      Skills
                    </span>
                    <ul className="pl-5 pb-1 pt-1 space-y-0">
                      {serviceItems.map((item) => (
                        <li key={item.label}>
                          <a
                            href={item.href}
                            onClick={closeAll}
                            className="block font-body text-[14px] text-dim hover:text-accent py-2 transition-colors focus-ring"
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </m.li>

                  <m.li
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
                  </m.li>
                </ul>
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  )
}
