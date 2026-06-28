'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ACCENT = '#C89434'
const MUTED  = '#97A89C'
const TEXT   = '#F0EDE4'
const BG     = '#0F1F18'

export function RaporAIDiagram() {
  const ref = useRef<SVGSVGElement>(null)
  const inView = useInView(ref, { amount: 0.4, once: true })

  return (
    <div className="w-full overflow-x-auto">
      <svg
        ref={ref}
        viewBox="0 0 580 260"
        className="w-full max-w-2xl mx-auto"
        style={{ background: BG }}
        role="img"
        aria-label="Rapor AI: single vision-language model call with dual output architecture"
      >
        <defs>
          <marker id="rapor-arrow-accent" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill={ACCENT} />
          </marker>
          <marker id="rapor-arrow-muted" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill={MUTED} />
          </marker>
          <clipPath id="rapor-reveal">
            <motion.rect
              x={0} y={0} height={260}
              initial={{ width: 0 }}
              animate={inView ? { width: 580 } : { width: 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            />
          </clipPath>
        </defs>

        <g clipPath="url(#rapor-reveal)">
          {/* Node 1: Photo Input */}
          <rect x={10} y={108} width={110} height={44} rx={2} fill="none" stroke={MUTED} strokeWidth={1.5} />
          <text x={65} y={132} textAnchor="middle" fill={TEXT} fontFamily="IBM Plex Mono, monospace" fontSize={10}>Photo input</text>
          <text x={65} y={148} textAnchor="middle" fill={MUTED} fontFamily="IBM Plex Mono, monospace" fontSize={9}>(rapor image)</text>

          {/* Arrow → Gemini */}
          <line x1={120} y1={130} x2={156} y2={130} stroke={MUTED} strokeWidth={1.5} markerEnd="url(#rapor-arrow-muted)" />

          {/* Node 2: Gemini Vision API */}
          <rect x={156} y={108} width={130} height={44} rx={2} fill="none" stroke={MUTED} strokeWidth={1.5} />
          <text x={221} y={132} textAnchor="middle" fill={TEXT} fontFamily="IBM Plex Mono, monospace" fontSize={10}>Gemini Vision</text>
          <text x={221} y={148} textAnchor="middle" fill={MUTED} fontFamily="IBM Plex Mono, monospace" fontSize={9}>API call</text>

          {/* Arrow → Prompt */}
          <line x1={286} y1={130} x2={322} y2={130} stroke={ACCENT} strokeWidth={1.5} markerEnd="url(#rapor-arrow-accent)" />

          {/* Node 3: Single structured prompt — ACTIVE */}
          <rect x={322} y={108} width={130} height={44} rx={2} fill="none" stroke={ACCENT} strokeWidth={1.5} />
          <text x={387} y={128} textAnchor="middle" fill={TEXT} fontFamily="IBM Plex Mono, monospace" fontSize={10}>Single prompt</text>
          <text x={387} y={144} textAnchor="middle" fill={ACCENT} fontFamily="IBM Plex Mono, monospace" fontSize={9}>structured output</text>

          {/* Split arrows from prompt to dual outputs */}
          {/* To Student Summary */}
          <line x1={452} y1={120} x2={488} y2={80} stroke={ACCENT} strokeWidth={1.5} markerEnd="url(#rapor-arrow-accent)" />
          {/* To Parent Summary */}
          <line x1={452} y1={140} x2={488} y2={180} stroke={ACCENT} strokeWidth={1.5} markerEnd="url(#rapor-arrow-accent)" />

          {/* Node 4a: Student Summary */}
          <rect x={488} y={56} width={82} height={44} rx={2} fill="none" stroke={ACCENT} strokeWidth={1.5} />
          <text x={529} y={76} textAnchor="middle" fill={TEXT} fontFamily="IBM Plex Mono, monospace" fontSize={10}>Student</text>
          <text x={529} y={92} textAnchor="middle" fill={TEXT} fontFamily="IBM Plex Mono, monospace" fontSize={10}>Summary</text>

          {/* Node 4b: Parent Summary */}
          <rect x={488} y={156} width={82} height={44} rx={2} fill="none" stroke={ACCENT} strokeWidth={1.5} />
          <text x={529} y={176} textAnchor="middle" fill={TEXT} fontFamily="IBM Plex Mono, monospace" fontSize={10}>Parent</text>
          <text x={529} y={192} textAnchor="middle" fill={TEXT} fontFamily="IBM Plex Mono, monospace" fontSize={10}>Summary</text>

          {/* Label: rejected path note */}
          <text x={221} y={190} textAnchor="middle" fill={MUTED} fontFamily="IBM Plex Mono, monospace" fontSize={9}>
            NOT 2 separate calls
          </text>
        </g>
      </svg>
    </div>
  )
}
