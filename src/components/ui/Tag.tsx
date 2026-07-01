import { cn } from '@/lib/utils'

type TagColor = 'gold' | 'sage' | 'default'

interface TagProps {
  children: React.ReactNode
  color?: TagColor
  className?: string
}

const colorStyles: Record<TagColor, string> = {
  gold:    'bg-gold/10 text-goldDeep border-gold/20',
  sage:    'bg-sage/10 text-sageDeep border-sage/20',
  default: 'bg-panel   text-dust     border-line',
}

export function Tag({ children, color = 'default', className }: TagProps) {
  return (
    <span
      className={cn(
        'font-mono text-xs px-2.5 py-1 rounded border inline-flex items-center',
        colorStyles[color],
        className,
      )}
    >
      {children}
    </span>
  )
}
