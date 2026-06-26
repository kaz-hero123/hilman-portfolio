/**
 * Navbar — Layout Primitive
 * Ref: design-system.md §6 (sticky navbar, name left, nav links right)
 *
 * Visual Upgrade:
 * - Active section tracking via IntersectionObserver
 * - Coral dot below active nav link
 * - Scroll progress bar di top edge
 */

'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

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
    const sectionIds = navLinks.map((l) => l.sectionId);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px' },
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
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

        {/* Nav links — right */}
        <ul className="flex items-center gap-1" role="list">
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
                {/* Active dot */}
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
      </nav>
    </motion.header>
  );
}
