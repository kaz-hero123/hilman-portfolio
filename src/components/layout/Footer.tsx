/**
 * Footer — Layout Primitive
 * Ref: design-system.md §6 (minimal: name + year)
 *
 * Visual Upgrade:
 * - Social icon links (GitHub, LinkedIn)
 * - "Available for internship" badge
 */

import { cn } from '@/lib/utils';
import { GitHubIcon, LinkedInIcon } from '@/components/ui/SocialIcons';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={cn('border-t border-border', 'py-10 px-6')}>
      <div className="max-w-5xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          {/* Left: name + badge */}
          <div className="flex items-center gap-3 flex-wrap">
            <p className="font-display text-sm font-semibold text-text">
              Hilman Nidal Hamzi
            </p>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-xs border border-mint/20 bg-mint/10 text-mint">
              <span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse" aria-hidden="true" />
              Available for internship
            </span>
          </div>

          {/* Right: social icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/kaz-hero123"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className={cn(
                'w-9 h-9 rounded-lg border border-border bg-surface flex items-center justify-center',
                'text-muted hover:text-coral hover:border-coral/40 transition-all duration-200',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-1 focus-visible:ring-offset-bg',
              )}
            >
              <GitHubIcon size={16} />
            </a>
            <a
              href="https://linkedin.com/in/hilman-nidal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className={cn(
                'w-9 h-9 rounded-lg border border-border bg-surface flex items-center justify-center',
                'text-muted hover:text-coral hover:border-coral/40 transition-all duration-200',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-1 focus-visible:ring-offset-bg',
              )}
            >
              <LinkedInIcon size={16} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 pt-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <p className="font-mono text-xs text-muted">
              © {year} Hilman Nidal Hamzi
            </p>
            <p className="font-mono text-xs text-muted">
              Built with Next.js · Tailwind CSS · Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
