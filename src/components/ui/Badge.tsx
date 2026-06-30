// src/components/ui/Badge.tsx
// PRD §8.5 — status/availability badges with optional pulsing dot
import { cn } from '@/lib/utils'

type BadgeVariant = 'available' | 'building' | 'default'

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  dot?: boolean
  className?: string
}

// PRD §8.5: available → sage family, building → gold family, default → dust/panel
// ember/coral explicitly NOT used (fails contrast, wrong semantic role)
const variantStyles: Record<BadgeVariant, string> = {
  available: 'bg-sage/10 text-sageDeep border-sage/20',
  building:  'bg-gold/10 text-goldDeep border-gold/20',
  default:   'bg-panel   text-dust     border-line',
}

const dotStyles: Record<BadgeVariant, string> = {
  available: 'bg-sage animate-pulse',
  building:  'bg-gold animate-pulse',
  default:   'bg-dust',
}

export function Badge({ children, variant = 'default', dot = false, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-xs border',
        variantStyles[variant],
        className,
      )}
    >
      {dot && (
        <span
          className={cn('w-1.5 h-1.5 rounded-full', dotStyles[variant])}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  )
}
