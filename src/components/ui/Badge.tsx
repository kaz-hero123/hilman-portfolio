import { cn } from '@/lib/utils';

type BadgeVariant = 'available' | 'building' | 'default';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  dot?: boolean;
}

const variantStyles: Record<BadgeVariant, string> = {
  available: 'bg-mint/10 text-mint border-mint/20',
  building:  'bg-coral/10 text-coral border-coral/20',
  default:   'bg-surface text-muted border-border',
};

const dotStyles: Record<BadgeVariant, string> = {
  available: 'bg-mint animate-pulse',
  building:  'bg-coral animate-pulse',
  default:   'bg-muted',
};

export function Badge({ children, variant = 'default', dot = false }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full',
        'font-mono text-xs border',
        variantStyles[variant],
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
  );
}
