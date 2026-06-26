/**
 * Data pengalaman kerja Hilman Nidal Hamzi.
 * Ref: design-system.md §6, coding-guide.md §7
 *
 * STATUS: 🔴 BLOCKER — Gate A tidak bisa closed sampai konten ini diisi final.
 * Lihat Known Blockers Register (coding-guide.md §7).
 *
 * TODO: Isi field berikut dengan data asli:
 *   - role, company, period, type, description, stack
 *
 * ATURAN ISI:
 * - `description` = 2–3 kalimat, bukan bullet points
 * - Tidak boleh filler phrase ("passionate", "hardworking", dst)
 * - `period` format: "MMM YYYY – MMM YYYY" atau "MMM YYYY – Present"
 */

import type { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'hummatech-internship',
    role: 'Backend Developer Intern',
    company: 'HummaTech Indonesia',
    period: 'TODO: fill period', // e.g. "Jan 2025 – Mar 2025"
    type: 'internship',
    description:
      'TODO: fill description — 2–3 kalimat tentang apa yang dikerjakan dan impact-nya. Bukan bullet points.',
    stack: ['Laravel', 'PHP', 'MySQL', 'Python', 'Postman'],
    isPrivate: true,
  },
  // TODO: tambah entry lain jika ada pengalaman lain
];
