'use client'

import { AnimateIn } from '@/components/AnimateIn'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { timelineEvents } from '@/data/timeline'
import { cn } from '@/lib/utils'

const dotStyles: Record<string, string> = {
  internship:  'bg-sageDeep',
  competition: 'bg-gold',
  exam:        'bg-ember',
  education:   'bg-dust',
}

const labelStyles: Record<string, string> = {
  internship:  'text-sageDeep',
  competition: 'text-goldDeep',
  exam:        'text-ink',
  education:   'text-dust',
}

const typeLabel: Record<string, string> = {
  internship:  'Internship',
  competition: 'Competition',
  exam:        'Exam',
  education:   'Education',
}

export function Experience() {
  return (
    <section id="experience" className="bg-panel">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-28">

        <AnimateIn>
          <div className="mb-14">
            <SectionLabel>Experience</SectionLabel>
            <h2 className="font-display text-heading text-ink">
              Where I&apos;ve been
            </h2>
          </div>
        </AnimateIn>

        <div className="relative">
          <div
            className="absolute left-[7px] md:left-[calc(140px+7px)] top-2 bottom-2 w-px bg-line/40"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {timelineEvents.map((entry, i) => (
              <AnimateIn key={i} delay={i * 0.07}>
                <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-8 relative">

                  <div className="md:text-right">
                    <span className="font-mono text-xs text-dust tracking-wide">
                      {entry.date}
                    </span>
                  </div>

                  <div className="relative pl-7 pb-1">
                    <span
                      className={cn(
                        'absolute left-0 top-[6px] w-[15px] h-[15px] rounded-full border-2 border-panel',
                        dotStyles[entry.type] ?? 'bg-line',
                      )}
                      aria-hidden="true"
                    />

                    <div>
                      <span
                        className={cn(
                          'font-mono text-[0.625rem] uppercase tracking-widest mr-2',
                          labelStyles[entry.type] ?? 'text-dust',
                        )}
                      >
                        {typeLabel[entry.type] ?? entry.type}
                      </span>

                      <h3 className="font-display text-subhead text-ink mt-0.5">
                        {entry.label}
                      </h3>
                      <p className="font-body text-caption text-dust mt-0.5">
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
