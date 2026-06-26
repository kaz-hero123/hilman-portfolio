/**
 * Tag — UI Atom (Tech Stack / Skill Labels)
 * Ref: design-system.md §8.5
 *
 * Scaffold Checklist §15:
 * ✅ File di folder ui/
 * ✅ Props interface (TagProps)
 * ✅ cn() untuk semua className
 * ✅ font-mono class eksplisit
 * ✅ Exported dari barrel index.ts
 */

import { cn } from '@/lib/utils';

type TagColor = 'lavender' | 'coral' | 'mint' | 'default';

export interface TagProps {
  children: React.ReactNode;
  color?: TagColor;
}

const colorStyles: Record<TagColor, string> = {
  lavender: 'bg-lavender/10 text-lavender border-lavender/20',
  coral:    'bg-coral/10    text-coral    border-coral/20',
  mint:     'bg-mint/10     text-mint     border-mint/20',
  default:  'bg-surface     text-muted    border-border',
};

export function Tag({ children, color = 'default' }: TagProps) {
  return (
    <span
      className={cn(
        'font-mono text-xs px-2.5 py-1 rounded border',
        'inline-flex items-center',
        colorStyles[color],
      )}
    >
      {children}
    </span>
  );
}
