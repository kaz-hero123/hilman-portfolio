import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  /**
   * 'default'  → max-w-5xl mx-auto px-6 (standard constrained layout)
   * 'surface'  → full-width bg surface, inner content constrained
   * 'flush'    → no horizontal padding constraint at all
   */
  variant?: 'default' | 'surface' | 'flush';
  /**
   * 'compact'  → py-16
   * 'default'  → py-24
   * 'spacious' → py-32
   */
  spacing?: 'compact' | 'default' | 'spacious';
}

const spacingMap = {
  compact:  'py-16',
  default:  'py-24',
  spacious: 'py-32',
};

export function SectionWrapper({
  id,
  className,
  children,
  variant = 'default',
  spacing = 'default',
  ...props
}: SectionWrapperProps) {
  const py = spacingMap[spacing];

  if (variant === 'surface') {
    return (
      <section id={id} className={cn('w-full bg-surface', py, className)} {...props}>
        <div className="max-w-5xl mx-auto px-6">
          {children}
        </div>
      </section>
    );
  }

  if (variant === 'flush') {
    return (
      <section id={id} className={cn(py, className)} {...props}>
        {children}
      </section>
    );
  }

  // default
  return (
    <section
      id={id}
      className={cn(py, 'px-6 max-w-5xl mx-auto', className)}
      {...props}
    >
      {children}
    </section>
  );
}
