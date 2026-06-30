// src/components/ui/SectionLabel.tsx
// PRD §8.2 — dual-context label above section headings
import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  /** 'light' = on paper/panel bg | 'dark' = on forest bg */
  tone?: 'light' | 'dark'
  className?: string
}

export function SectionLabel({ children, tone = 'light', className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        'font-mono text-xs uppercase tracking-widest mb-3',
        tone === 'light' ? 'text-dust' : 'text-line',
        className,
      )}
    >
      {children}
    </p>
  )
}
