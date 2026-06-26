/**
 * Global TypeScript interfaces for Hilman Portfolio.
 * Ref: design-system.md §9
 *
 * Rules:
 * - Strict mode ON — tidak ada `any`
 * - Semua field optional harus pakai `?`, bukan `undefined` union
 */

// ─── Projects ────────────────────────────────────────────────────────────────

export interface Project {
  id: string;
  title: string;
  role: string;
  problem: string;   // Satu kalimat: konteks masalah
  outcome: string;   // Satu kalimat: impact/hasil konkret
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  isPrivate?: boolean;
  featured?: boolean;
}

// ─── Stack ───────────────────────────────────────────────────────────────────

export interface StackGroup {
  layer: string;
  items: string[];
}

// ─── Experience ──────────────────────────────────────────────────────────────

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;        // e.g. "Jan 2025 – Mar 2025"
  type: 'internship' | 'freelance' | 'part-time' | 'full-time';
  description: string;   // 2–3 kalimat, bukan bullet points
  stack: string[];
  isPrivate?: boolean;
}

// ─── Achievements ────────────────────────────────────────────────────────────

export interface Achievement {
  id: string;
  title: string;
  issuer: string;        // e.g. "Google", "Dicoding", "SMK ..."
  date: string;          // e.g. "2026"
  category: 'competition' | 'certification' | 'recognition' | 'project';
  description?: string;  // Opsional — satu kalimat
  url?: string;
}
