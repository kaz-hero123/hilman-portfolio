'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ACCENT = '#C89434'
const MUTED  = '#97A89C'
const TEXT   = '#F0EDE4'
const BG     = '#0F1F18'

export function OwlBookDiagram() {
  const ref = useRef<SVGSVGElement>(null)
  const inView = useInView(ref, { amount: 0.4, once: true })

  return (
    <div className="w-full overflow-x-auto">
      <svg
        ref={ref}
        viewBox="0 0 580 300"
        className="w-full max-w-2xl mx-auto"
        style={{ background: BG }}
        role="img"
        aria-label="OwlBook: library borrowing lifecycle state machine diagram"
      >
        <defs>
          <marker id="owl-arrow-accent" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill={ACCENT} />
          </marker>
          <marker id="owl-arrow-muted" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill={MUTED} />
          </marker>
          <clipPath id="owl-reveal">
            <motion.rect
              x={0} y={0} height={300}
              initial={{ width: 0 }}
              animate={inView ? { width: 580 } : { width: 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            />
          </clipPath>
        </defs>

        <g clipPath="url(#owl-reveal)">
          {/* State 1: Available */}
          <rect x={10} y={118} width={100} height={44} rx={2} fill="none" stroke={MUTED} strokeWidth={1.5} />
          <text x={60} y={138} textAnchor="middle" fill={TEXT} fontFamily="IBM Plex Mono, monospace" fontSize={10}>available</text>
          <text x={60} y={154} textAnchor="middle" fill={MUTED} fontFamily="IBM Plex Mono, monospace" fontSize={9}>state</text>

          {/* Trigger label */}
          <text x={158} y={126} textAnchor="middle" fill={MUTED} fontFamily="IBM Plex Mono, monospace" fontSize={9}>borrow()</text>

          {/* Arrow → Borrowed */}
          <line x1={110} y1={140} x2={196} y2={140} stroke={MUTED} strokeWidth={1.5} markerEnd="url(#owl-arrow-muted)" />

          {/* State 2: Borrowed */}
          <rect x={196} y={118} width={100} height={44} rx={2} fill="none" stroke={MUTED} strokeWidth={1.5} />
          <text x={246} y={138} textAnchor="middle" fill={TEXT} fontFamily="IBM Plex Mono, monospace" fontSize={10}>borrowed</text>
          <text x={246} y={154} textAnchor="middle" fill={MUTED} fontFamily="IBM Plex Mono, monospace" fontSize={9}>state</text>

          {/* Branch up — on-time return */}
          <line x1={296} y1={128} x2={370} y2={76} stroke={MUTED} strokeWidth={1.5} markerEnd="url(#owl-arrow-muted)" />
          <text x={326} y={95} textAnchor="middle" fill={MUTED} fontFamily="IBM Plex Mono, monospace" fontSize={9}>return (on time)</text>

          {/* State 3a: Returned on-time */}
          <rect x={370} y={54} width={130} height={44} rx={2} fill="none" stroke={MUTED} strokeWidth={1.5} />
          <text x={435} y={74} textAnchor="middle" fill={TEXT} fontFamily="IBM Plex Mono, monospace" fontSize={10}>returned</text>
          <text x={435} y={90} textAnchor="middle" fill={MUTED} fontFamily="IBM Plex Mono, monospace" fontSize={9}>on-time</text>

          {/* Branch down — late return (ACTIVE PATH) */}
          <line x1={296} y1={152} x2={370} y2={196} stroke={ACCENT} strokeWidth={1.5} markerEnd="url(#owl-arrow-accent)" />
          <text x={334} y={186} textAnchor="middle" fill={ACCENT} fontFamily="IBM Plex Mono, monospace" fontSize={9}>return (late)</text>

          {/* State 3b: Returned late — ACTIVE */}
          <rect x={370} y={196} width={130} height={44} rx={2} fill="none" stroke={ACCENT} strokeWidth={1.5} />
          <text x={435} y={216} textAnchor="middle" fill={TEXT} fontFamily="IBM Plex Mono, monospace" fontSize={10}>returned</text>
          <text x={435} y={232} textAnchor="middle" fill={ACCENT} fontFamily="IBM Plex Mono, monospace" fontSize={9}>late</text>

          {/* Arrow → Fine computed */}
          <line x1={500} y1={218} x2={528} y2={218} stroke={ACCENT} strokeWidth={1.5} markerEnd="url(#owl-arrow-accent)" />

          {/* Fine computation node — ACTIVE */}
          <rect x={528} y={196} width={42} height={44} rx={2} fill="none" stroke={ACCENT} strokeWidth={1.5} />
          <text x={549} y={218} textAnchor="middle" fill={ACCENT} fontFamily="IBM Plex Mono, monospace" fontSize={9}>fine</text>
          <text x={549} y={232} textAnchor="middle" fill={MUTED} fontFamily="IBM Plex Mono, monospace" fontSize={8}>derived</text>

          {/* Note: fines derived from timestamps */}
          <text x={435} y={260} textAnchor="middle" fill={MUTED} fontFamily="IBM Plex Mono, monospace" fontSize={9}>
            fine = f(due_date, return_timestamp)
          </text>
        </g>
      </svg>
    </div>
  )
}
