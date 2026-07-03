'use client'

import { AnimateIn } from '@/components/AnimateIn'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Tag } from '@/components/ui/Tag'

const achievements = [
  {
    year: '2026',
    event: 'Google JuaraVibeCoding 2026',
    org: 'Google',
    type: 'Competition',
    note: 'Built Rapor AI — vision-language report card summariser.',
  },
  {
    year: '2026',
    event: 'IT Fest 2026 — Jelajah Madura',
    org: 'Team project',
    type: 'Competition',
    note: 'Led backend architecture as team project manager.',
  },
  {
    year: '2025',
    event: 'Final Competency Exam (UKK) — OwlBook',
    org: 'SMK RPL/PPLG',
    type: 'Exam',
    note: 'Built full library lifecycle system — passed with RBAC across 7-table schema.',

    
  },
]

export function Achievements() {
  return (
    <section id="achievements" className="bg-paper">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-28">

        <AnimateIn>
          <div className="mb-12">
            <SectionLabel>Achievements</SectionLabel>
            <h2 className="font-display text-heading text-ink">
              Milestones
            </h2>
          </div>
        </AnimateIn>

        <div className="space-y-4">
          {achievements.map((item, i) => (
            <AnimateIn key={item.event} delay={i * 0.08}>
              <div className="group flex flex-col sm:flex-row sm:items-start gap-4 p-6 rounded-lg border border-line bg-panel hover:border-ember/40 hover:shadow-cardLift transition-all duration-200">

                <div className="shrink-0 w-14">
                  <span className="font-mono text-xs text-dust">{item.year}</span>
                </div>

                <div className="flex-1 space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-subhead text-ink">
                      {item.event}
                    </h3>
                    <Tag color="gold">{item.type}</Tag>
                  </div>
                  <p className="font-mono text-xs text-dust">{item.org}</p>
                  <p className="font-body text-caption text-dust leading-relaxed">
                    {item.note}
                  </p>
                </div>

              </div>
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  )
}
