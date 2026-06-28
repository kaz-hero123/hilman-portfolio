'use client'

/**
 * CapabilityMap — Section 4 (light band)
 * PRD §6.4
 *
 * Three horizontal groups: Confident / Building / Exploring
 * Group header: mono eyebrow uppercase
 * Items: plain list, Sans body text
 * Visually distinct via spacing only — no progress bars, no icons, no color coding
 */

import { capabilities } from '@/data/capabilities'

export function CapabilityMap() {
  return (
    <section
      id="capability-map"
      className="bg-band-light"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-24 md:py-32">

        {/* Section eyebrow */}
        <p className="font-mono text-eyebrow uppercase text-text-muted-light tracking-widest mb-16">
          Capability Map
        </p>

        {/* Three tiers — horizontal on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {capabilities.map((group) => (
            <div key={group.tier}>
              {/* Tier header */}
              <h2 className="font-mono text-eyebrow uppercase text-text-muted-light tracking-widest mb-6 border-b border-border-light pb-4">
                {group.label}
              </h2>

              {/* Items — plain list */}
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="font-sans text-body text-text-primary-light"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
