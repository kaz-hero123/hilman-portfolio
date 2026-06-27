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
