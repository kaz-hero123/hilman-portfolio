'use client'

import Link from 'next/link'
import { projects } from '@/data/projects'
import { AnimateIn } from '@/components/AnimateIn'

const statusStyle: Record<string, string> = {
  production: 'text-emerald-400/80 border-emerald-400/20',
  prototype:  'text-amber-400/80 border-amber-400/20',
}

const statusLabel: Record<string, string> = {
  production: 'Production',
  prototype:  'Prototype',
}

export function SelectedWork() {
  const shippedProjects = projects.filter((p) => p.status !== 'in-progress')

  return (
    <section id="work" className="bg-surface-dark border-t border-white/[0.04]">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-28">

        <AnimateIn>
          <div className="mb-14">
            <p className="font-mono text-eyebrow uppercase text-text-secondary/60 tracking-wider mb-2">
              Selected work
            </p>
            <h2 className="font-sans text-heading text-text-primary">
              Projects I&apos;ve shipped
            </h2>
          </div>
        </AnimateIn>

        <div className="space-y-4">
          {shippedProjects.map((project, i) => (
            <AnimateIn key={project.slug} delay={i * 0.08}>
              <Link
                href={`/work/${project.slug}`}
                className="group block rounded-lg border border-white/[0.04] hover:border-white/[0.1] bg-surface-elevated/0 hover:bg-surface-elevated/60 transition-all duration-300 focus-ring"
              >
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr_auto] gap-4 md:gap-8 p-5 md:p-7 items-center">

                  <div className="space-y-1.5">
                    <h3 className="font-sans text-body font-semibold text-text-primary group-hover:text-accent transition-colors duration-200">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-3">
                      <span className={`font-mono text-[0.6875rem] px-2 py-0.5 border rounded-sm ${statusStyle[project.status]}`}>
                        {statusLabel[project.status]}
                      </span>
                      <span className="font-mono text-[0.6875rem] text-text-secondary/50">
                        {project.stack.slice(0, 3).join(' · ')}
                      </span>
                    </div>
                  </div>

                  <p className="font-sans text-caption text-text-secondary leading-relaxed line-clamp-2">
                    {project.problem.split('.')[0]}.
                  </p>
                  <div className="hidden md:flex items-center justify-end">
                    <span className="text-text-secondary/30 group-hover:text-accent group-hover:translate-x-1 transition-all duration-200 text-lg">
                      &rarr;
                    </span>
                  </div>

                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  )
}
