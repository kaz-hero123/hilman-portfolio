/**
 * SectionWrapper — Layout Primitive
 * Ref: design-system.md §8.2
 *
 * Semua section WAJIB dibungkus dengan ini untuk spacing yang konsisten.
 *
 * Scaffold Checklist §15:
 * ✅ File di folder layout/
 * ✅ Props interface (SectionWrapperProps)
 * ✅ cn() untuk semua className
 * ✅ Semantic HTML (<section>)
 * ✅ Exported dari barrel index.ts
 */

import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  id?: string;
}

export function SectionWrapper({ id, className, children, ...props }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn('py-24 px-6 max-w-5xl mx-auto', className)}
      {...props}
    >
      {children}
    </section>
  );
}
