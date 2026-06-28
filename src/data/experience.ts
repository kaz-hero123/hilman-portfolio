import type { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'hummatech-internship',
    role: 'Backend Developer Intern',
    company: 'HummaTech Indonesia',
    period: 'Jan 2025 – Mar 2025',
    type: 'internship',
    description:
      'Built and maintained backend infrastructure for an RFID-based attendance system used by multiple schools daily. Designed a dual-pipeline architecture that separated gate-entry and per-lesson tracking — solving a reliability issue the previous single-pipeline approach couldn\'t handle. Also wrote Python/openpyxl tooling that cut manual data import time significantly.',
    stack: ['Laravel', 'PHP', 'MySQL', 'Python', 'Postman'],
    isPrivate: true,
  },
];
