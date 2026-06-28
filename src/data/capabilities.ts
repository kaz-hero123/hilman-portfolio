// src/data/capabilities.ts
// PRD §5 — Three-tier capability map
import type { CapabilityGroup } from './types'

export const capabilities: CapabilityGroup[] = [
  {
    tier: 'confident',
    label: 'Confident',
    items: ['Laravel', 'PHP', 'MySQL', 'REST API design', 'RBAC', 'Python scripting'],
  },
  {
    tier: 'building',
    label: 'Building',
    items: ['Node.js services', 'Vision model integration', 'Express'],
  },
  {
    tier: 'exploring',
    label: 'Exploring',
    items: ['Livewire / Alpine.js', 'Frontend systems', 'Full-stack architecture'],
  },
]
