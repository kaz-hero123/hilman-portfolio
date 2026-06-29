'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ACCENT = '#C89434'
const MUTED  = '#97A89C'
const TEXT   = '#F0EDE4'
const BG     = '#0F1F18'

interface NodeProps {
  x: number
  y: number
  width: number
  height: number
  label: string
  active?: boolean
}

function DiagramNode({ x, y, width, height, label, active }: NodeProps) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={2}
        ry={2}
        fill="none"
        stroke={active ? ACCENT : MUTED}
        strokeWidth={1.5}
      />
      <text
        x={x + width / 2}
        y={y + height / 2 + 4}
        textAnchor="middle"
        fill={TEXT}
        fontFamily="IBM Plex Mono, monospace"
        fontSize={11}
      >
        {label}
      </text>
    </g>
  )
}

interface ArrowProps {
  x1: number; y1: number
  x2: number; y2: number
  active?: boolean
  horizontal?: boolean
}

function Arrow({ x1, y1, x2, y2, active }: ArrowProps) {
  const color = active ? ACCENT : MUTED
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={1.5} markerEnd={`url(#arrow-${active ? 'accent' : 'muted'})`} />
    </g>
  )
}

export function RFIDDiagram() {
  const ref = useRef<SVGSVGElement>(null)
  const inView = useInView(ref, { amount: 0.4, once: true })

  return (
    <div className="w-full overflow-x-auto">
      <svg
        ref={ref}
        viewBox="0 0 520 460"
        className="w-full max-w-2xl mx-auto"
        style={{ background: BG }}
        role="img"
        aria-label="RFID Attendance System: dual-pipeline architecture diagram"
      >
        <defs>
          <marker id="arrow-accent" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill={ACCENT} />
          </marker>
          <marker id="arrow-muted" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill={MUTED} />
          </marker>

          <clipPath id="rfid-reveal">
            <motion.rect
              x={0} y={0} height={460}
              initial={{ width: 0 }}
              animate={inView ? { width: 520 } : { width: 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            />
          </clipPath>
        </defs>

        <text x={130} y={28} textAnchor="middle" fill={MUTED} fontFamily="IBM Plex Mono, monospace" fontSize={10} letterSpacing={1}>
          GATE ENTRY PIPELINE
        </text>
        <text x={390} y={28} textAnchor="middle" fill={ACCENT} fontFamily="IBM Plex Mono, monospace" fontSize={10} letterSpacing={1}>
          CROSS-CHECK PIPELINE
        </text>

        <g clipPath="url(#rfid-reveal)">
          <DiagramNode x={30}  y={50}  width={200} height={44} label="RFID Gate Scan" />
          <Arrow x1={130} y1={94}  x2={130} y2={128} />
          <DiagramNode x={30}  y={128} width={200} height={44} label="attendance_rfids" />
          <Arrow x1={130} y1={172} x2={130} y2={206} />
          <DiagramNode x={30}  y={206} width={200} height={44} label="Read-only store" />

          <DiagramNode x={290} y={50}  width={200} height={44} label="Teacher Records" active />
          <Arrow x1={390} y1={94}  x2={390} y2={128} active />
          <DiagramNode x={290} y={128} width={200} height={44} label="attendances table" active />
          <Arrow x1={390} y1={172} x2={390} y2={206} active />
          <DiagramNode x={290} y={206} width={200} height={44} label="Source of truth" active />
          <Arrow x1={390} y1={250} x2={390} y2={284} active />

          <DiagramNode x={290} y={284} width={200} height={44} label="JOIN query" active />
          <Arrow x1={390} y1={328} x2={390} y2={362} active />
          <DiagramNode x={190} y={362} width={200} height={44} label="Final Attendance Status" active />

          <line x1={130} y1={250} x2={130} y2={390} stroke={MUTED} strokeWidth={1} strokeDasharray="4 3" />
          <line x1={130} y1={390} x2={190} y2={390} stroke={MUTED} strokeWidth={1} markerEnd="url(#arrow-muted)" strokeDasharray="4 3" />

          <text x={50} y={272} fill={MUTED} fontFamily="IBM Plex Mono, monospace" fontSize={9}>
            reference only
          </text>
        </g>
      </svg>
    </div>
  )
}
