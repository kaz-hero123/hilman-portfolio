export type ProjectStatus = 'production' | 'prototype' | 'in-progress'

export interface Project {
  slug: string
  functionTag: string
  title: string
  subtitle: string
  status: ProjectStatus
  stack: string[]
  repoUrl?: string
  problem: string
  constraints: string
  decision: string
  rejectedPath: string
  outcome: string
  reflection: string
}

export interface TimelineEvent {
  date: string
  label: string
  org: string
  type: 'internship' | 'competition' | 'exam' | 'education'
}

export interface CapabilityGroup {
  tier: 'confident' | 'building' | 'exploring'
  label: string
  items: string[]
}

export interface NowItem {
  project: string
  description: string
  deadline?: string
}

