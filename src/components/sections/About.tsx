'use client'

import { AnimateIn } from '@/components/AnimateIn'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function About() {
  return (
    <section id="about" className="bg-paper">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-16 items-start">

          {/* Left — label + heading */}
          <AnimateIn>
            <div className="md:sticky md:top-24">
              <SectionLabel>About</SectionLabel>
              <h2 className="font-display text-heading text-ink">
                How I think about building
              </h2>
            </div>
          </AnimateIn>

          {/* Right — prose (no photo — PRD §6: no duplicate placeholder) */}
          <AnimateIn delay={0.1}>
            <div className="space-y-5 max-w-lg">
              <p className="font-body text-body text-dust leading-relaxed">
                Backend engineering, for me, is mostly about what happens after you ship.
                At HummaTech, I built systems that schools depend on daily — that shaped how
                I think about architecture. Not &ldquo;what&apos;s the simplest thing that
                could work&rdquo; but &ldquo;what&apos;s the simplest thing that stays
                maintainable when someone else touches it at 2am.&rdquo;
              </p>
              <p className="font-body text-body text-dust leading-relaxed">
                I hold both backend developer and project manager roles on team projects —
                not because I had to, but because the systems thinking that makes good
                backend work also makes good coordination. The same instinct that tells
                you to separate concerns in code tells you to separate concerns in a team.
              </p>
              <p className="font-body text-body text-dust leading-relaxed">
                I document every decision I reject. If I chose a dual-pipeline over a
                unified flow, there&apos;s a reason — and I can explain it. That habit
                started at HummaTech and never left.
              </p>

              {/* Availability note — subtle */}
              <div className="pt-2 border-t border-line">
                <p className="font-mono text-xs text-sageDeep">
                  › Looking for backend internship opportunities — Aug 2026 onwards.
                </p>
              </div>
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  )
}
