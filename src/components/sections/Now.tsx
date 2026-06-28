'use client'

/**
 * Now — Section 6 (light band)
 * PRD §6.6
 *
 * Intro: "What's actively in progress right now."
 * Each NowItem:
 *   - Project name: mono eyebrow uppercase accent-light
 *   - Description: sans body text-primary-light
 *   - Deadline (if present): mono eyebrow muted-light
 *
 * Jelajah Madura and UiVault LIVE HERE — never in Selected Work
 */

import { nowItems } from '@/data/now'

export function Now() {
  return (
    <section
      id="now"
      className="bg-band-light"
    >
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-24 md:py-32">

        {/* Section eyebrow */}
        <p className="font-mono text-eyebrow uppercase text-text-muted-light tracking-widest mb-4">
          Now
        </p>

        {/* Intro line */}
        <p className="font-sans text-body text-text-primary-light mb-16">
          What&apos;s actively in progress right now.
        </p>

        {/* Now items */}
        <div className="space-y-12">
          {nowItems.map((item) => (
            <div key={item.project} className="border-t border-border-light pt-8">

              {/* Project name */}
              <h2 className="font-mono text-eyebrow uppercase text-accent-light tracking-widest mb-2">
                {item.project}
              </h2>

              {/* Description */}
              <p className="font-sans text-body text-text-primary-light mb-3">
                {item.description}
              </p>

              {/* Deadline */}
              {item.deadline && (
                <p className="font-mono text-eyebrow text-text-muted-light">
                  {item.deadline}
                </p>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
