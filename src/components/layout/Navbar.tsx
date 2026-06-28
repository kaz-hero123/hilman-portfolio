/**
 * Navbar — Layout Primitive
 * Ref: design-system.md §6
 *
 * Visual Upgrade:
 * - Scroll progress bar di top edge
 * - Active section dot via IntersectionObserver
 * - Hamburger menu untuk mobile (<md)
 */

'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#about',       label: 'about',      sectionId: 'about' },
  { href: '#stack',       label: 'stack',      sectionId: 'stack' },
  { href: '#projects',    label: 'projects',   sectionId: 'projects' },
  { href: '#experience',  label: 'experience', sectionId: 'experience' },
  { href: '#contact',     label: 'contact',    sectionId: 'contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docH > 0 ? (scrollY / docH) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-30% 0px -60% 0px' },
    );
    navLinks.forEach(({ sectionId }) => {
      const el = document.getElementById(sectionId);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Close menu on scroll
  useEffect(() => {
    if (menuOpen) {
      const close = () => setMenuOpen(false);
      window.addEventListener('scroll', close, { passive: true, once: true });
    }
  }, [menuOpen]);

  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-50',
          'transition-colors duration-300',
          scrolled || menuOpen
            ? 'bg-bg/95 backdrop-blur-sm border-b border-border'
            : 'bg-transparent',
        )}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' as const }}
      >
        {/* Scroll progress bar */}
        <div
          className="absolute top-0 left-0 h-[2px] bg-coral transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />

        <nav
          aria-label="Main navigation"
          className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between"
        >
          {/* Name — left */}
          <a
            href="#"
            className={cn(
              'font-display text-sm font-semibold text-text',
              'hover:text-coral transition-colors',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral',
              'focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-sm',
            )}
            aria-label="Hilman Nidal Hamzi — back to top"
          >
            hilman.
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map(({ href, label, sectionId }) => {
              const isActive = activeSection === sectionId;
              return (
                <li key={href} className="relative">
                  <a
                    href={href}
                    className={cn(
                      'font-mono text-xs px-3 min-h-[48px]',
                      'inline-flex items-center transition-colors duration-200',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral',
                      'focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-sm',
                      isActive ? 'text-text' : 'text-muted hover:text-text',
                    )}
                  >
                    {label}
                  </a>
                  {isActive && (
                    <motion.div
                      layoutId="nav-active-dot"
                      className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-coral"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      aria-hidden="true"
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Hamburger — mobile only */}
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((prev) => !prev)}
            className={cn(
              'md:hidden w-10 h-10 flex items-center justify-center rounded-lg',
              'text-muted hover:text-text hover:bg-surface transition-colors',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral',
            )}
          >
            {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Mobile navigation"
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-bg/80 backdrop-blur-md"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
            {/* Menu panel */}
            <motion.nav
              className="absolute top-16 left-0 right-0 bg-bg border-b border-border px-6 py-6"
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' as const }}
            >
              <ul className="flex flex-col gap-1" role="list">
                {navLinks.map(({ href, label, sectionId }) => {
                  const isActive = activeSection === sectionId;
                  return (
                    <li key={href}>
                      <a
                        href={href}
                        onClick={() => setMenuOpen(false)}
                        className={cn(
                          'flex items-center gap-3 px-3 py-4 rounded-lg min-h-[56px]',
                          'font-mono text-sm transition-colors',
                          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral',
                          isActive
                            ? 'text-text bg-surface'
                            : 'text-muted hover:text-text hover:bg-surface/60',
                        )}
                      >
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-coral shrink-0" aria-hidden="true" />
                        )}
                        {label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
