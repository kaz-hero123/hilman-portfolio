/**
 * Tech stack data Hilman Nidal Hamzi.
 * Ref: design-system.md §9
 *
 * Dikelompok per layer — bukan icon dump.
 * Urutan: Languages → Frontend → Backend → Databases → Tools & Cloud
 */

import type { StackGroup } from '@/types';

export const stackGroups: StackGroup[] = [
  {
    layer: 'Languages',
    items: ['PHP', 'JavaScript', 'Python'],
  },
  {
    layer: 'Frontend',
    items: ['HTML', 'CSS', 'Tailwind CSS', 'Alpine.js', 'Livewire'],
  },
  {
    layer: 'Backend',
    items: ['Laravel', 'Node.js', 'Express'],
  },
  {
    layer: 'Databases',
    items: ['MySQL'],
  },
  {
    layer: 'Tools & Cloud',
    items: ['Git', 'GitHub', 'Postman', 'GCP / Cloud Run'],
  },
];
