export type Project = {
  slug: string
  title: string
  description: string
  tags: string[]
  image?: string
  href?: string
  /** col: which masonry column (0 = left hero col, 1 = center, 2 = right) */
  col: 0 | 1 | 2
}

export const projects: Project[] = [
  {
    slug: 'archipelago-review',
    title: 'The archipelago review',
    description: 'A digital journal with a strict grid and no apologies.',
    tags: ['Editorial design', 'Web development', 'Content strategy'],
    image: '/projects/archipelago.jpg',
    href: '#',
    col: 0,
  },
  {
    slug: 'atlas-machinery',
    title: 'Atlas machinery co.',
    description: 'Industrial brand identity built from the ground up.',
    tags: ['Brand identity', 'Art direction', 'E-commerce'],
    image: '/projects/atlas.jpg',
    href: '#',
    col: 0,
  },
  {
    slug: 'rfid-attendance',
    title: 'RFID Attendance System',
    description:
      'Dual-pipeline attendance architecture deployed to a live school environment.',
    tags: ['Laravel', 'PHP', 'MySQL', 'Python'],
    image: undefined,
    href: '#',
    col: 1,
  },
  {
    slug: 'rapor-ai',
    title: 'Rapor AI',
    description:
      'Vision-language model that produces two distinct summaries from a single report card photo.',
    tags: ['Node.js', 'Express', 'Gemini Vision API'],
    image: undefined,
    href: '#',
    col: 1,
  },
  {
    slug: 'owlbook',
    title: 'OwlBook — Digital Library',
    description:
      'Full borrowing lifecycle modelled as a state machine with RBAC and PDF reporting.',
    tags: ['Laravel', 'Tailwind CSS', 'DomPDF'],
    image: undefined,
    href: '#',
    col: 2,
  },
  {
    slug: 'field-guide',
    title: 'Field Guide Design System',
    description:
      'Component-driven design system used across three distinct product teams.',
    tags: ['Design systems', 'React', 'Storybook'],
    image: undefined,
    href: '#',
    col: 2,
  },
]
