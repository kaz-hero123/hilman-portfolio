import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'ghost';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const variantStyles: Record<Variant, string> = {
  primary: cn(
    'bg-coral text-bg font-body font-medium',
    'hover:bg-coral/90',
    'focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2',
    'focus-visible:ring-offset-bg',
  ),
  ghost: cn(
    'bg-transparent text-text border border-border font-body',
    'hover:border-coral hover:text-coral',
    'focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2',
    'focus-visible:ring-offset-bg',
  ),
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', className, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center gap-2',
        'px-6 py-3 rounded-md text-sm min-h-[48px]',
        'transition-all duration-150 cursor-pointer',
        'select-none outline-none',
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
);
Button.displayName = 'Button';
