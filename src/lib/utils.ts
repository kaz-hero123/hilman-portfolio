import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * cn() — utility untuk conditional className merging.
 * Pakai ini untuk SEMUA className concatenation, bukan string template.
 * Ref: design-system.md §8.1
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
