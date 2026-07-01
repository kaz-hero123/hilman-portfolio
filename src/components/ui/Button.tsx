import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'ghost'
type Size    = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  asChild?: boolean
}

const variantStyles: Record<Variant, string> = {
  primary: cn(
    'bg-ember text-ink font-body font-medium',
    'hover:bg-ember/90',
    'focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper',
  ),
  ghost: cn(
    'bg-transparent text-ink border border-line font-body',
    'hover:border-ember/60 hover:text-ink',
    'focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper',
  ),
}

const sizeStyles: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm min-h-[40px]',
  md: 'px-5 py-2.5 text-[0.9375rem] min-h-[48px]',
  lg: 'px-7 py-3 text-base min-h-[52px]',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded transition-all duration-200',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'outline-none',
          variantStyles[variant],
          sizeStyles[size],
          className,
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
