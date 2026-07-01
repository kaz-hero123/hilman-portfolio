'use client'

import { AnimateIn } from '@/components/AnimateIn'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Tag } from '@/components/ui/Tag'
import { capabilities } from '@/data/capabilities'

const tierMeta: Record<string, { tagColor: 'gold' | 'sage' | 'default'; description: string }> = {
  confident: {
    tagColor: 'gold',
    description: 'Daily drivers — tools I reach for without thinking.',
  },
  building: {
    tagColor: 'default',
    description: 'Actively working with — shipped or in active use.',
  },
  exploring: {
    tagColor: 'default',
    description: 'Learning deliberately — not just tinkered with.',
  },
}

export function Stack() {
  return (
    <section id="stack" className="bg-panel">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-28">

        <AnimateIn>
          <div className="mb-12">
            <SectionLabel>Stack</SectionLabel>
            <h2 className="font-display text-heading text-ink">
              What I work with
            </h2>
          </div>
        </AnimateIn>

        <div className="space-y-10">
          {capabilities.map((group, i) => {
            const meta = tierMeta[group.tier] ?? { tagColor: 'default', description: '' }
            return (
              <AnimateIn key={group.tier} delay={i * 0.1}>
                <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 md:gap-8 items-start">

                  <div className="md:pt-0.5">
                    <p className="font-mono text-xs text-dust uppercase tracking-widest">
                      {group.label}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <Tag key={item} color={meta.tagColor}>
                          {item}
                        </Tag>
                      ))}
                    </div>
                    <p className="font-body text-caption text-dust">
                      {meta.description}
                    </p>
                  </div>

                </div>
              </AnimateIn>
            )
          })}
        </div>

      </div>
    </section>
  )
}
