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
    slug: 'jelajah-madura',
    title: 'Jelajah Madura',
    description:
      'Laravel tourism platform with three-role system (wisatawan/kontributor/admin), content moderation flow, and slug-based regency routing. Built for IT Fest 2026. In active development.',
    tags: ['Laravel', 'PHP', 'MySQL'],
    image: undefined,
    href: '#',
    col: 0,
  },
  {
    slug: 'uivault',
    title: 'UiVault',
    description:
      'Laravel/Livewire moodboard manager with a custom ColorExtractor service using stride-based grid sampling for palette extraction.',
    tags: ['Laravel', 'Livewire', 'PHP'],
    image: undefined,
    href: '#',
    col: 0,
  },
  {
    slug: 'rapor-ai',
    title: 'Rapor AI',
    description:
      'Dual-persona school report card analyzer. Gemini Vision API reads a single photo and generates distinct summaries for students and parents. Built for Google JuaraVibeCoding 2026.',
    tags: ['Node.js', 'Express', 'Gemini Vision API'],
    image: undefined,
    href: '#',
    col: 1,
  },
  {
    slug: 'owlbook',
    title: 'OwlBook',
    description:
      'Digital library with role-based access, borrowing lifecycle state machine, fine calculation, and PDF reporting via DomPDF. Uses DB::transaction() with pessimistic locking for race-condition safety.',
    tags: ['Laravel', 'Tailwind CSS', 'DomPDF'],
    image: undefined,
    href: '#',
    col: 1,
  },
  {
    slug: 'rfid-attendance',
    title: 'RFID Attendance System',
    description:
      'Attendance system built during internship at HummaTech Indonesia. Dual-pipeline architecture deployed to a live school environment.',
    tags: ['Laravel', 'PHP', 'MySQL', 'Python'],
    image: undefined,
    href: '#',
    col: 2,
  },
]
