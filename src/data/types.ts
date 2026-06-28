// src/data/types.ts
// PRD §4 — All canonical data types

export type ProjectStatus = 'production' | 'prototype' | 'in-progress'

export interface Project {
  slug: string
  functionTag: string         // e.g. "DUAL-PIPELINE ATTENDANCE SYSTEM" — uppercase
  title: string
  subtitle: string            // role + context
  status: ProjectStatus
  stack: string[]
  repoUrl?: string
  // Case study fields — all required for shipped projects
  problem: string             // the actual engineering problem
  constraints: string         // what was fixed/given that couldn't be changed
  decision: string            // what was built and why
  rejectedPath: string        // what was considered and explicitly not chosen
  outcome: string             // qualitative only — never invent a metric
  reflection: string          // what would be changed now
}

export interface TimelineEvent {
  date: string                // e.g. "Jan 2025"
  label: string
  org: string
  type: 'internship' | 'competition' | 'exam' | 'education'
}

export interface CapabilityGroup {
  tier: 'confident' | 'building' | 'exploring'
  label: string               // display label
  items: string[]
}

export interface NowItem {
  project: string
  description: string
  deadline?: string
}
