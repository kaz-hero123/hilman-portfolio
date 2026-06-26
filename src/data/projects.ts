/**
 * Data proyek Hilman Nidal Hamzi.
 * Ref: design-system.md §9
 *
 * Rules:
 * - `problem` = satu kalimat, awali dengan konteks masalah bukan solusi
 * - `outcome` = satu kalimat, harus ada impact/hasil konkret
 * - Tidak boleh filler phrase (§11 design-system.md)
 */

import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'rfid-attendance',
    title: 'RFID Attendance System',
    role: 'Backend Developer · HummaTech Indonesia',
    problem:
      'School needed separate tracking for gate entry and per-lesson attendance — a single pipeline could not handle both reliably.',
    outcome:
      'Dual-pipeline architecture deployed to production; Python/openpyxl tooling cut manual import time significantly.',
    stack: ['Laravel', 'PHP', 'MySQL', 'Python', 'Postman'],
    isPrivate: true,
    featured: true,
  },
  {
    id: 'rapor-ai',
    title: 'Rapor AI',
    role: 'Solo Developer · Google JuaraVibeCoding 2026',
    problem:
      'Indonesian school report cards contain dense structured data that parents and students interpret differently.',
    outcome:
      'Vision-language model produces two distinct summaries from a single report card photo — one for students, one for parents.',
    stack: ['Node.js', 'Express', 'Gemini Vision API'],
    githubUrl: 'https://github.com/kaz-hero123/rapor-ai',
    featured: true,
  },
  {
    id: 'owlbook',
    title: 'OwlBook — Digital Library',
    role: 'Solo Developer · Final Exam Project (UKK)',
    problem:
      'Manual library management led to stock errors, late-return fines going untracked, and no reporting capability.',
    outcome:
      'Full borrowing lifecycle with state machine, automated PDF reporting, and RBAC across 7-table schema.',
    stack: ['Laravel', 'Tailwind CSS', 'DomPDF', 'MySQL'],
    featured: false,
  },
];
