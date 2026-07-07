'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface HighlightTextProps {
  children: React.ReactNode
  color?: string
  delay?: number
}

export function HighlightText({ children, color = '#e0f2fe', delay = 0 }: HighlightTextProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-20px' })

  return (
    <span ref={ref} className="relative inline-block whitespace-nowrap px-1 z-10">
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute bottom-1 left-0 right-0 h-[0.35em] -z-10 origin-left"
        style={{ backgroundColor: color }}
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      />
    </span>
  )
}
