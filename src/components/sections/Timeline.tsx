'use client'

import { AnimateIn } from '@/components/AnimateIn'
import { timelineEvents } from '@/data/timeline'
import { nowItems } from '@/data/now'

const typeColors: Record<string, string> = {
  internship:  'bg-emerald-400',
  competition: 'bg-amber-400',
  exam:        'bg-sky-400',
  education:   'bg-violet-400',
  active:      'bg-accent',
}

interface TimelineEntry {
  date: string
  label: string
  org: string
  type: string
  isActive?: boolean
  description?: string
}

export function Timeline() {
  const entries: TimelineEntry[] = [
    ...nowItems.map((item) => ({
      date: item.deadline ?? 'Now',
      label: item.project,
      org: item.description,
      type: 'active',
      isActive: true,
      description: item.description,
    })),
    ...timelineEvents.map((e) => ({
      ...e,
      isActive: false,
    })),
  ]

  return (
    <section id="path" className="bg-surface-dark border-t border-white/[0.04]">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-28">

        <AnimateIn>
          <div className="mb-14">
            <p className="font-mono text-eyebrow uppercase text-text-secondary/60 tracking-wider mb-2">
              Path
            </p>
            <h2 className="font-sans text-heading text-text-primary">
              Where I&apos;ve been, where I&apos;m going
            </h2>
          </div>
        </AnimateIn>

        <div className="relative">
          <div
            className="absolute left-[7px] md:left-[calc(140px+7px)] top-2 bottom-2 w-px bg-white/[0.06]"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {entries.map((entry, i) => (
              <AnimateIn key={i} delay={i * 0.06}>
                <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-8 relative">

                  <div className="md:text-right">
                    <span className={`font-mono text-eyebrow tracking-wider ${
                      entry.isActive ? 'text-accent' : 'text-text-secondary/60'
                    }`}>
                      {entry.date}
                    </span>
                  </div>

                  <div className="relative pl-7 md:pl-7 pb-1">
                    <span
                      className={`absolute left-0 top-[7px] w-[15px] h-[15px] rounded-full border-2 border-surface-dark ${
                        typeColors[entry.type] ?? 'bg-text-secondary/30'
                      } ${entry.isActive ? 'animate-pulse' : ''}`}
                      aria-hidden="true"
                    />

                    <div>
                      <h3 className={`font-sans text-body leading-snug ${
                        entry.isActive ? 'text-text-primary font-medium' : 'text-text-primary/90'
                      }`}>
                        {entry.isActive && (
                          <span className="font-mono text-[0.625rem] text-accent/70 uppercase tracking-wider mr-2 align-middle">
                            Active
                          </span>
                        )}
                        {entry.label}
                      </h3>
                      <p className="font-sans text-caption text-text-secondary/60 mt-0.5">
                        {entry.org}
                      </p>
                    </div>
                  </div>

                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
