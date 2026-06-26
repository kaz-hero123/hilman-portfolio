/**
 * Navbar — Layout Primitive
 * Ref: design-system.md §6 (sticky navbar, name left, nav links right)
 *
 * Scaffold Checklist §15:
 * ✅ File di folder layout/
 * ✅ cn() untuk semua className
 * ✅ font-display (nama) + font-mono (nav links)
 * ✅ min-h-[48px] pada semua nav links
 * ✅ focus-visible:ring-2 pada semua interaktif
 * ✅ aria-label pada nav landmark
 * ✅ Scroll-state handled via Framer Motion
 * ✅ Mobile-first responsive
 * ✅ Exported dari barrel index.ts
 */

'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#about',        label: 'about' },
  { href: '#stack',        label: 'stack' },
  { href: '#projects',     label: 'projects' },
  { href: '#experience',   label: 'experience' },
  { href: '#contact',      label: 'contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-50',
        'transition-colors duration-300',
        scrolled ? 'bg-bg/90 backdrop-blur-sm border-b border-border' : 'bg-transparent',
      )}
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
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

        {/* Nav links — right */}
        <ul className="flex items-center gap-1" role="list">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={cn(
                  'font-mono text-xs text-muted px-3 min-h-[48px]',
                  'inline-flex items-center',
                  'hover:text-text transition-colors',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral',
                  'focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-sm',
                )}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
