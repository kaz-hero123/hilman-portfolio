'use client'

import { AnimateIn } from '@/components/AnimateIn'
import { SectionLabel } from '@/components/ui/SectionLabel'

// PRD §6 — Stats: BARU di v2. bg-forest dark band.
// Numbers from PRD §Open Items (confirmed: 1 Internship, 3 Production Systems, 2+ Years)
const stats = [
  {
    number: '1',
    label: 'Internship',
    sub: 'HummaTech Indonesia',
  },
  {
    number: '3',
    label: 'Production Systems',
    sub: 'Shipped & deployed',
  },
  {
    number: '2+',
    label: 'Years Building',
    sub: 'Backend & full-stack',
  },
]

export function Stats() {
  return (
    <section id="stats" className="bg-forest">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-24">

        <AnimateIn>
          {/* SectionLabel tone="dark" — uses text-line (passes 9.36 contrast on forest) */}
          <SectionLabel tone="dark" className="mb-8">
            Snapshot
          </SectionLabel>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-0 md:divide-x md:divide-line/20">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 0.1}>
              <div className="md:px-10 first:pl-0 last:pr-0 space-y-2">
                {/* Big number — ember on forest: contrast 5.24, passes AA large text */}
                <p className="font-display text-5xl md:text-6xl font-bold text-ember leading-none">
                  {stat.number}
                </p>
                {/* Label — paper on forest: 12.32 contrast, passes AAA */}
                <p className="font-display text-lg md:text-xl text-paper font-semibold">
                  {stat.label}
                </p>
                {/* Sub-label — line on forest: 9.36 contrast, dual-role muted text */}
                <p className="font-mono text-xs text-line">
                  {stat.sub}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  )
}
