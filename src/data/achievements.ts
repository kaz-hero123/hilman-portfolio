/**
 * Data pencapaian / sertifikat Hilman Nidal Hamzi.
 * Ref: design-system.md §6, coding-guide.md §7
 *
 * STATUS: 🔴 BLOCKER — Gate A tidak bisa closed sampai konten ini diisi final.
 * Lihat Known Blockers Register (coding-guide.md §7).
 *
 * TODO: Isi field berikut dengan data asli:
 *   - title, issuer, date, category, description (opsional), url (opsional)
 *
 * ATURAN ISI:
 * - `description` = opsional, satu kalimat jika diisi
 * - `category`: 'competition' | 'certification' | 'recognition' | 'project'
 * - `date` format: "YYYY" atau "MMM YYYY"
 */

import type { Achievement } from '@/types';

export const achievements: Achievement[] = [
  {
    id: 'juara-vibecoding-2026',
    title: 'Google JuaraVibeCoding 2026',
    issuer: 'Google',
    date: '2026',
    category: 'competition',
    description: 'TODO: fill description — opsional, satu kalimat tentang pencapaian ini.',
    url: 'https://github.com/kaz-hero123/rapor-ai',
  },
  // TODO: tambah sertifikat, penghargaan, atau pencapaian lain
  // Contoh entry:
  // {
  //   id: 'dicoding-cert-backend',
  //   title: 'Belajar Membuat Aplikasi Back-End untuk Pemula',
  //   issuer: 'Dicoding',
  //   date: 'TODO',
  //   category: 'certification',
  // },
];
