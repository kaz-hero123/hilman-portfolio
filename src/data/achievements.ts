import type { Achievement } from '@/types';

export const achievements: Achievement[] = [
  {
    id: 'juara-vibecoding-2026',
    title: 'Google JuaraVibeCoding 2026',
    issuer: 'Google',
    date: '2026',
    category: 'competition',
    description:
      'Built Rapor AI — a vision-language app that generates two distinct summaries from a school report card photo, one for students and one for parents.',
    url: 'https://github.com/kaz-hero123/rapor-ai',
  },
  {
    id: 'ukk-graduation',
    title: 'Ujian Kompetensi Keahlian (UKK)',
    issuer: 'SMK — Rekayasa Perangkat Lunak',
    date: '2025',
    category: 'certification',
    description:
      'Passed the national vocational competency exam by building OwlBook, a full-stack digital library system with RBAC, state machine, and automated PDF reporting.',
  },
];
