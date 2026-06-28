'use client'

/**
 * Trajectory — Section 5 (dark band)
 * PRD §6.5
 *
 * Layout: vertical timeline, left-anchored
 * Markers: diamond ◆ in accent-dark
 * Date: mono eyebrow, muted-dark, uppercase
 * Event label: sans body, text-primary-dark, medium weight
 * Org: sans eyebrow, muted-dark
 * Chronological order (earliest first)
 */

import { timelineEvents } from '@/data/timeline'

// Type icon indicator — subtle, no color coding beyond muted
const typeLabel: Record<string, string> = {
  internship:  'Internship',
  competition: 'Competition',
  exam:        'Exam',
  education:   'Education',
}

export function Trajectory() {
  return (
    <section
      id="trajectory"
      className="bg-band-dark"
    >
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-24 md:py-32">

        {/* Section eyebrow */}
        <p className="font-mono text-eyebrow uppercase text-text-muted-dark tracking-widest mb-16">
          Trajectory
        </p>

        {/* Vertical timeline */}
        <div className="relative">
          {/* Timeline spine */}
          <div
            className="absolute left-[5px] top-2 bottom-0 w-px bg-border-dark"
            aria-hidden="true"
          />

          <ol className="space-y-12">
            {timelineEvents.map((event, idx) => (
              <li key={idx} className="relative pl-8">
                {/* Diamond marker ◆ */}
                <span
                  className="absolute left-0 top-1.5 text-accent-dark text-xs leading-none select-none"
                  aria-hidden="true"
                >
                  ◆
                </span>

                {/* Date */}
                <time
                  className="font-mono text-eyebrow uppercase text-text-muted-dark tracking-widest block mb-1"
                >
                  {event.date}
                </time>

                {/* Event label */}
                <p className="font-sans text-body text-text-primary-dark font-medium">
                  {event.label}
                </p>

                {/* Org + type */}
                <p className="font-mono text-eyebrow text-text-muted-dark mt-0.5">
                  {event.org} · {typeLabel[event.type]}
                </p>
              </li>
            ))}
          </ol>
        </div>

      </div>
    </section>
  )
}
