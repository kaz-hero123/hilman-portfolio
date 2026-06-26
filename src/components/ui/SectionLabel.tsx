/**
 * SectionLabel — UI Atom (Eyebrow text di atas section heading)
 * Ref: design-system.md §8.3
 *
 * Scaffold Checklist §15:
 * ✅ File di folder ui/
 * ✅ Props interface (SectionLabelProps)
 * ✅ cn() untuk semua className
 * ✅ font-mono class eksplisit
 * ✅ Exported dari barrel index.ts
 *
 * Usage:
 *   <SectionLabel>projects</SectionLabel>
 *   <h2 className="font-display text-4xl text-text">What I've built</h2>
 */

import { cn } from '@/lib/utils';

export interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        'font-mono text-xs text-muted uppercase tracking-widest mb-3',
        className,
      )}
    >
      {children}
    </p>
  );
}
