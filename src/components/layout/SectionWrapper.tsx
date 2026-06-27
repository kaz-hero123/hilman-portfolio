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
