'use client'

/**
 * SelectedWork — Section 3 (dark band)
 * PRD §6.3
 *
 * Layout: vertical stack — NOT a card grid
 * Each entry: functionTag → title → status badge → 1-sentence problem → stack (plain) → text link
 * NO numbering, NO in-progress projects
 */

import Link from 'next/link'
import { projects } from '@/data/projects'

// Status badge label map
const statusLabel: Record<string, string> = {
  production: 'PRODUCTION',
  prototype:  'PROTOTYPE',
  'in-progress': 'IN PROGRESS',
}

export function SelectedWork() {
  // Only show shipped projects (not in-progress) per PRD §6.3
  const shippedProjects = projects.filter((p) => p.status !== 'in-progress')

  return (
    <section
      id="selected-work"
      className="bg-band-dark"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-24 md:py-32">

        {/* Section eyebrow */}
        <p className="font-mono text-eyebrow uppercase text-text-muted-dark tracking-widest mb-16">
          Selected Work
        </p>

        {/* Vertical stack of case study entries */}
        <div className="space-y-20">
          {shippedProjects.map((project) => (
            <article key={project.slug} className="border-t border-border-dark pt-10">

              {/* Function tag */}
              <p className="font-mono text-eyebrow uppercase text-text-muted-dark tracking-widest mb-3">
                {project.functionTag}
              </p>

              {/* Title + status badge */}
              <div className="flex flex-wrap items-baseline gap-4 mb-4">
                <h2 className="font-mono font-bold text-text-primary-dark text-[clamp(1.5rem,4vw,2.5rem)] leading-tight">
                  {project.title}
                </h2>
                <span className="font-mono text-eyebrow uppercase text-text-muted-dark tracking-widest">
                  {statusLabel[project.status]}
                </span>
              </div>

              {/* 1-sentence problem */}
              <p className="font-sans text-body text-text-muted-dark mb-5 max-w-2xl">
                {project.problem.split('.')[0]}.
              </p>

              {/* Stack — plain text separated by · NOT pill badges */}
              <p className="font-mono text-eyebrow text-text-muted-dark mb-6">
                {project.stack.join(' · ')}
              </p>

              {/* Case study link */}
              <Link
                href={`/work/${project.slug}`}
                className="font-mono text-eyebrow uppercase text-accent-dark link-underline min-h-[48px] inline-flex items-center focus-visible:focus-ring"
              >
                Read case study →
              </Link>

            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
