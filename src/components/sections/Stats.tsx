'use client'

import { AnimateIn } from '@/components/AnimateIn'
import { SectionLabel } from '@/components/ui/SectionLabel'

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
          <SectionLabel tone="dark" className="mb-8">
            Snapshot
          </SectionLabel>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-0 md:divide-x md:divide-line/20">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 0.1}>
              <div className="md:px-10 first:pl-0 last:pr-0 space-y-2">
                <p className="font-display text-5xl md:text-6xl font-bold text-ember leading-none">
                  {stat.number}
                </p>
                <p className="font-display text-lg md:text-xl text-paper font-semibold">
                  {stat.label}
                </p>
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
