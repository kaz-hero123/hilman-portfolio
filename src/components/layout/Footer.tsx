/**
 * Footer — Layout Primitive
 * Ref: design-system.md §6 (minimal: name + year)
 *
 * Scaffold Checklist §15:
 * ✅ File di folder layout/
 * ✅ cn() untuk semua className
 * ✅ font-mono class eksplisit
 * ✅ Semantic HTML (<footer>)
 * ✅ Exported dari barrel index.ts
 */

import { cn } from '@/lib/utils';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className={cn(
        'border-t border-border',
        'py-8 px-6',
      )}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <p className="font-mono text-xs text-muted">
          Hilman Nidal Hamzi · {year}
        </p>
        <p className="font-mono text-xs text-muted">
          Built with Next.js
        </p>
      </div>
    </footer>
  );
}
