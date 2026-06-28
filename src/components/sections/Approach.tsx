'use client'

import { AnimateIn } from '@/components/AnimateIn'

export function Approach() {
  return (
    <section id="approach" className="bg-surface-light">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-16">

          {/* Left column */}
          <AnimateIn>
            <div>
              <p className="font-mono text-eyebrow uppercase text-text-secondary-inv/50 tracking-wider mb-2">
                Approach
              </p>
              <h2 className="font-sans text-heading text-text-primary-inv">
                How I think about building
              </h2>
            </div>
          </AnimateIn>

          {/* Right column */}
          <AnimateIn delay={0.1}>
            <div className="space-y-6">
              {/* Serif opening — used once for editorial contrast */}
              <p className="font-serif text-editorial text-text-primary-inv leading-relaxed">
                Backend engineering, for me, is mostly about what happens after you ship.
              </p>

              <div className="space-y-5 max-w-xl">
                <p className="font-sans text-body text-text-secondary-inv leading-relaxed">
                  At HummaTech, I learned what it means to build something schools depend on
                  daily. That shaped how I think about architecture — not &ldquo;what&apos;s the
                  simplest thing that could work&rdquo; but &ldquo;what&apos;s the simplest thing
                  that stays maintainable when someone else touches it at 2am.&rdquo;
                </p>

                <p className="font-sans text-body text-text-secondary-inv leading-relaxed">
                  I hold a backend developer and project manager role on team projects — not
                  because I had to, but because the systems thinking that makes good backend work
                  also makes good coordination. The same instinct that tells you to separate
                  concerns in code tells you to separate concerns in a team.
                </p>
              </div>
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  )
}
